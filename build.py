# Builds static index + shards from kaikki.org Old English JSONL. Usage: python3 build.py oe.jsonl
import json,sys,unicodedata,os,shutil,re
def n(s): return ''.join(c for c in unicodedata.normalize('NFD',s) if not unicodedata.combining(c)).lower().replace('ƿ','w')
SKIP={'table-tags','inflection-template','class','canonical'}
def _unused(s):
  k=re.sub(r'[^a-zæþðȝ]','',n(s))[:2]
  return k.replace('þ','th').replace('ð','dh').replace('æ','ae').replace('ȝ','yogh') or '_'
def gender(d):
  g=set()
  for f in d.get('forms',[]):
    if 'canonical' in f.get('tags',[]): g|=set(f['tags'])&{'masculine','feminine','neuter'}
  for h in d.get('head_templates',[]):
    a=h.get('args',{})
    for k in ('1','2','g','g2','g3','g4'):
      for p in re.split(r'[,/ ]',a.get(k,'')):
        p=p.split('-')[0]
        if p in ('m','f','n'): g.add({'m':'masculine','f':'feminine','n':'neuter'}[p])
  return ''.join(c for c in 'mfn' if any(x[0]==c for x in g))
ents=[]
for l in open(sys.argv[1]):
  d=json.loads(l);w=d.get('word','')
  if not w: continue
  head=next((f['form'] for f in d.get('forms',[]) if 'canonical' in f.get('tags',[])),w)
  senses=[s for s in d.get('senses',[]) if s.get('glosses')]
  fs=[]
  for f in d.get('forms',[]):
    t=f.get('tags',[])
    if set(t)&SKIP or f.get('form') in ('-','—',''):continue
    fs.append([f['form'],' '.join(t)])
  e={'w':head,'p':d.get('pos',''),'i':next((s['ipa'] for s in d.get('sounds',[]) if 'ipa' in s),''),
     's':[[s['glosses'][-1],[[x.get('text',''),x.get('english',x.get('translation',''))] for x in s.get('examples',[])][:3]] for s in senses][:12],
     'y':d.get('etymology_text','')[:1500],'f':fs,'d':[x['word'] for x in d.get('derived',[]) if 'word' in x][:40]}
  if d.get('pos')=='noun':
    gg=gender(d)
    if gg: e['g']=gg
  ents.append(e)
ents.sort(key=lambda e:(n(e['w']),e['w']))
CH=250;shards={};idx=[];forms={}
for i,e in enumerate(ents):
  k=f'{i//CH:03d}';shards.setdefault(k,[]).append(e)
  g=e['s'][0][0] if e['s'] else ''
  idx.append([e['w'],e['p'][:4],g[:70]]+([e['g']] if e.get('g') else []))  # entry i lives in data/e/{i//250}.json at position i%250
  for f,_ in e['f']:
    nf=n(f)
    if nf!=n(e['w']): forms.setdefault(nf,set()).add(i)
shutil.rmtree('data',ignore_errors=True);os.makedirs('data/e')
for k,v in shards.items(): json.dump(v,open(f'data/e/{k}.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump(idx,open('data/index.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump({k:sorted(v) for k,v in forms.items()},open('data/forms.json','w'),ensure_ascii=False,separators=(',',':'))
print(len(idx),'entries',len(shards),'shards',len(forms),'forms')
