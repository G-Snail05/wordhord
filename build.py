# Builds static index + shards from kaikki.org Old English JSONL. Usage: python3 build.py oe.jsonl
#   or: python3 build.py --runes   (re-add the rune entries from runes_src.json to the existing data/, no download needed)
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
FROM_DATA=sys.argv[1]=='--runes'
if FROM_DATA:
  for k in sorted(os.listdir('data/e')): ents+=json.load(open('data/e/'+k))
  ents=[e for e in ents if e['p']!='rune']
  for e in ents: e.pop('rn',None)
for l in ([] if FROM_DATA else open(sys.argv[1])):
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

# --- Rune entries (kanji-style): appended after the sorted dictionary so word ids stay stable ---
def plain(h): return re.sub(r'<[^>]+>','',h)
def add_runes(ents):
  R=json.load(open('runes_src.json'));base=len(ents)
  def lookup(spec):
    if not spec: return -1
    w,_,k=spec.partition('~');w,_,p=w.partition('@')
    for i,e in enumerate(ents):
      if e['w']==w and (not p or e['p'][:4]==p[:4]) and (not k or (e['s'] and k in e['s'][0][0])): return i
    return -1
  def chip(i,rid,g):
    if i>=0:
      l=ents[i].setdefault('rn',[])
      if [rid,g] not in l: l.append([rid,g])
  for k,r in enumerate(R):
    rid=base+k;g=r['g'];wid=lookup(r.get('link'))
    cid=next((i for i,e in enumerate(ents) if e['p']=='character' and e['w'].split(' ')[0]==g),-1)
    f=[[r['name'],'rune name']]+[[a,'other name'] for a in r.get('alt',[]) if n(a)!=n(r['name'])]+[[r['tr'],'transliteration']]
    seen={n(x[0]) for x in f}
    for x in [r['name']]+r.get('alt',[]):
      h=n(x).replace('þ','th').replace('ð','th').replace('æ','ae').replace('œ','oe')
      if h not in seen: seen.add(h);f.append([h,'search spelling'])
    ents.append({'w':g,'p':'rune','i':'','s':[[(f"the rune {r['name']}" if r['name'][0]!='(' else 'an unnamed rune')+f": {plain(r['mean'])}",[]]],'y':'','f':f,'d':[],
      'r':{**{x:r[x] for x in r if x not in ('link','alt')},'cp':'U+%04X'%ord(g),'wid':wid,'cid':cid}})
    chip(wid,rid,g);chip(cid,rid,g)
    if wid>=0 and ents[wid]['s'] and ents[wid]['s'][0][0].startswith('alternative form of '):
      t=ents[wid]['s'][0][0][20:].strip()
      chip(next((i for i,e in enumerate(ents[:base]) if e['w']==t and e['p']==ents[wid]['p']),-1),rid,g)
    for i,e in enumerate(ents[:base]):
      if e['s'] and e['s'][0][0].startswith('the runic character '+g): chip(i,rid,g)
add_runes(ents)
CH=250;shards={};idx=[];forms={}
for i,e in enumerate(ents):
  k=f'{i//CH:03d}';shards.setdefault(k,[]).append(e)
  g=e['s'][0][0] if e['s'] else ''
  idx.append([e['w'],e['p'][:4],g[:70]]+([e['g']] if e.get('g') else []))  # entry i lives in data/e/{i//250}.json at position i%250
  for f,_ in e['f']:
    nf=n(f)
    if nf!=n(e['w']): forms.setdefault(nf,set()).add(i)
shutil.rmtree('data/e',ignore_errors=True);os.makedirs('data/e')
for k,v in shards.items(): json.dump(v,open(f'data/e/{k}.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump(idx,open('data/index.json','w'),ensure_ascii=False,separators=(',',':'))
json.dump({k:sorted(v) for k,v in forms.items()},open('data/forms.json','w'),ensure_ascii=False,separators=(',',':'))
print(len(idx),'entries',len(shards),'shards',len(forms),'forms')
