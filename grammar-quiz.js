// Grammar quizzes on the case charts: "Name that form" (case), "Fill the table" (fill), "Gender guess" (gender).
// Routes: #quiz/<case|fill|gender>/<10|20|all>/<src>  ·  src = curated slug, my/<id>, decl/<a-m|a-n|o|weak|other>, all/<noun|adj|pron>
// Noun/adjective charts for curated-list words are precomputed into data/gq.json by tools/build-gq.mjs (same functions as below);
// words in the user's own lists are charted on the fly. Pronoun charts mirror the tables in the Pronouns guide.
// The pure functions (gq*) have no DOM access so tests/grammar-sweep.mjs can load this file in Node.
var GQ_CASES=['nom','acc','gen','dat'],GQ_CN={nom:'nominative',acc:'accusative',gen:'genitive',dat:'dative'},GQ_NN={sg:'singular',pl:'plural'};
var GQ_ART={m:'sē',f:'sēo',n:'þæt'},GQ_GN={m:'masculine',f:'feminine',n:'neuter'};
var GQ_DECL={'a-m':'Strong masculine (a-stem: stān, -es, -as)','a-n':'Strong neuter (a-stem: word, scip)','o':'Strong feminine (ō-stem: lār, -e)','weak':'Weak nouns (n-stem: guma, -an)','other':'Other / irregular nouns'};
var GQ_MODES={case:'Name that form',fill:'Fill the table',gender:'Gender guess'};
function gqNorm(s){return String(s==null?'':s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ƿ/g,'w').replace(/\s+/g,' ').trim()}
const gqOkForm=f=>f&&!/[\s()\[\]—–]/.test(f)&&!/^-|-$/.test(f);
// Noun chart from dictionary forms: only plain "<case> <number>" tags (no alternative/dialect/romanization/gender-qualified tags); all 8 cells required
function gqNounChart(id,e){if(!e||e.p!=='noun'||!e.f)return null;const cells={};
 for(const [f0,t] of e.f){if(!t)continue;const T=t.split(' ');
  if(T.some(x=>x==='masculine'||x==='feminine'||x==='neuter')&&T.some(x=>/^(nominative|accusative|genitive|dative)$/.test(x)))return null; // gender-split paradigm: unclear, skip word
  if(T.length!==2)continue;const c=GQ_CASES.find(k=>GQ_CN[k]===T[0]),n=T[1]==='singular'?0:T[1]==='plural'?1:-1;if(!c||n<0)continue;
  const f=String(f0).normalize('NFC').trim();if(!gqOkForm(f))continue;const k=c+'|'+n;(cells[k]=cells[k]||[]).includes(f)||cells[k].push(f)}
 if(GQ_CASES.some(c=>!cells[c+'|0']||!cells[c+'|1']))return null;
 const g=e.g&&e.g.length===1?e.g:'';const ch={id,w:e.w,gl:(e.s&&e.s[0]&&e.s[0][0])||'',k:'noun',g,cols:[{n:'sg',h:'Singular'},{n:'pl',h:'Plural'}],cells};ch.decl=gqDecl(ch);return ch}
// Declension from the endings; assigned only when every listed spelling of the deciding cells agrees
function gqDecl(ch){const C=ch.cells,all=(k,re)=>C[k].every(f=>re.test(gqNorm(f))),nsg=C['nom|0'].map(gqNorm);
 if(all('gen|0',/an$/)&&all('dat|0',/an$/)&&all('nom|1',/an$/)&&!all('nom|0',/an$/))return 'weak';
 if(ch.g==='m'&&all('gen|0',/es$/)&&all('nom|1',/as$/)&&all('dat|1',/um$/))return 'a-m';
 if(ch.g==='n'&&all('gen|0',/es$/)&&all('dat|1',/um$/)&&C['nom|1'].every(f=>/[uo]$/.test(gqNorm(f))||nsg.includes(gqNorm(f))))return 'a-n';
 if(ch.g==='f'&&all('gen|0',/e$/)&&all('acc|0',/e$/)&&all('dat|1',/um$/)&&all('nom|1',/[ae]$/)&&!all('nom|0',/[ae]$/))return 'o';
 return 'other'}
// Adjective chart: strong declension block from the dictionary (aclass in app.js), 4 cases x m/f/n x sg/pl, all 24 cells required
var GQ_AG=[['masculine','m','masc.'],['feminine','f','fem.'],['neuter','n','neut.']];
function gqAdjChart(id,e,ac){ac=ac||(typeof aclass==='function'?aclass:null);if(!e||e.p!=='adj'||!ac)return null;const A=ac(e.f);if(!A)return null;const b=A.blocks[0];
 const cols=[],cells={};['sg','pl'].forEach(n=>GQ_AG.forEach(([G,g,h])=>cols.push({n,g,h:(n==='sg'?'Sg ':'Pl ')+h})));
 for(let j=0;j<cols.length;j++)for(const c of GQ_CASES){const v=(b[GQ_CN[c]+'|'+cols[j].n+'|'+GQ_AG.find(x=>x[1]===cols[j].g)[0]]||[]).map(f=>String(f).normalize('NFC').trim()).filter(gqOkForm);if(!v.length)return null;cells[c+'|'+j]=[...new Set(v)]}
 return {id,w:e.w,gl:(e.s&&e.s[0]&&e.s[0][0])||'',k:'adj',sub:'strong',cols,cells}}
// Pronoun charts, copied from the Pronouns guide tables (main forms only)
function gqP(id,w,gl,cols,rows){const cells={};GQ_CASES.forEach((c,i)=>rows[i].forEach((v,j)=>cells[c+'|'+j]=v.split(',').map(x=>x.trim())));return {id,w,gl,k:'pron',cols,cells}}
var GQ_PRON=[
 gqP('p:1','iċ / wē','I, we',[{n:'sg',h:'I'},{n:'pl',h:'we'}],[['iċ','wē'],['mē','ūs'],['mīn','ūre'],['mē','ūs']]),
 gqP('p:2','þū / ġē','you',[{n:'sg',h:'you (one)'},{n:'pl',h:'you (all)'}],[['þū','ġē'],['þē','ēow'],['þīn','ēower'],['þē','ēow']]),
 gqP('p:3','hē / hēo / hit / hīe','he, she, it, they',[{n:'sg',g:'m',h:'he'},{n:'sg',g:'n',h:'it'},{n:'sg',g:'f',h:'she'},{n:'pl',h:'they'}],[['hē','hit','hēo','hīe'],['hine','hit','hīe','hīe'],['his','his','hire','heora'],['him','him','hire','him']]),
 gqP('p:se','sē / sēo / þæt','the, that',[{n:'sg',g:'m',h:'masc.'},{n:'sg',g:'n',h:'neut.'},{n:'sg',g:'f',h:'fem.'},{n:'pl',h:'plural'}],[['sē','þæt','sēo','þā'],['þone','þæt','þā','þā'],['þæs','þæs','þǣre','þāra'],['þām','þām','þǣre','þām']]),
 gqP('p:thes','þēs / þēos / þis','this',[{n:'sg',g:'m',h:'masc.'},{n:'sg',g:'n',h:'neut.'},{n:'sg',g:'f',h:'fem.'},{n:'pl',h:'plural'}],[['þēs','þis','þēos','þās'],['þisne','þis','þās','þās'],['þisses','þisses','þisse, þisre','þissa'],['þissum','þissum','þisse, þisre','þissum']]),
 gqP('p:min','mīn','my (possessive)',[{n:'sg',g:'m',h:'Sg masc.'},{n:'sg',g:'f',h:'Sg fem.'},{n:'sg',g:'n',h:'Sg neut.'},{n:'pl',g:'m',h:'Pl masc.'},{n:'pl',g:'f',h:'Pl fem.'},{n:'pl',g:'n',h:'Pl neut.'}],[['mīn','mīn','mīn','mīne','mīna, mīne','mīn'],['mīnne','mīne','mīn','mīne','mīna, mīne','mīn'],['mīnes','mīnre','mīnes','mīnra','mīnra','mīnra'],['mīnum','mīnre','mīnum','mīnum','mīnum','mīnum']])];
var GQ_PRONW={'p:1':['iċ','wē','mē','ūs'],'p:2':['þū','ġē','þē','ēow'],'p:3':['hē','hēo','hit','hīe','hine','him','his','hire','heora'],'p:se':['sē','sēo','þæt','þā','þone','þām','þæs'],'p:thes':['þēs','þēos','þis','þās'],'p:min':['mīn']};
// which pronoun chart (if any) a dictionary headword belongs to; pos = IDX POS (first 4 chars)
function gqPronFor(w,pos){if(!/^(pron|det|arti)/.test(pos||''))return null;for(const k in GQ_PRONW)if(GQ_PRONW[k].includes(w))return GQ_PRON.find(c=>c.id===k);return null}
function gqSlots(ch,form){const nf=gqNorm(form),s=new Set;for(const c of GQ_CASES)ch.cols.forEach((col,j)=>{if((ch.cells[c+'|'+j]||[]).some(f=>gqNorm(f)===nf))s.add(c+'|'+col.n)});return [...s]}
// Name that form: one question per distinct form of each chart; correct = every case|number slot the form fills in that chart
function gqCaseQs(charts){const out=[];for(const ch of charts){const seen=new Set;for(const c of GQ_CASES)ch.cols.forEach((col,j)=>(ch.cells[c+'|'+j]||[]).forEach(f=>{const n=gqNorm(f);if(seen.has(n))return;seen.add(n);out.push({t:'case',ch,form:f,valid:gqSlots(ch,f)})}))}return out}
// Fill the table views: charts with >4 columns are split into one view per gender (sg + pl)
function gqViews(ch){if(ch.cols.length<=4)return [{ch,cols:ch.cols.map((_,j)=>j)}];return ['m','f','n'].map(g=>({ch,g,cols:ch.cols.map((c,j)=>c.g===g?j:-1).filter(j=>j>=0)}))}
function gqStem(forms){if(!forms.length)return '';let p=[...forms[0]];for(const f of forms){const a=[...f];let i=0;while(i<p.length&&i<a.length&&p[i]===a[i])i++;p=p.slice(0,i)}const s=p.join('');return [...s].length>=2?s:''}
function gqViewInfo(v){const forms=[];v.cols.forEach(j=>GQ_CASES.forEach(c=>forms.push(...v.ch.cells[c+'|'+j])));const stem=gqStem(forms);
 const cands=[];v.cols.forEach(j=>GQ_CASES.forEach(c=>{const fs=v.ch.cells[c+'|'+j];if(fs.every(f=>f.length>stem.length))cands.push(c+'|'+j)}));return {stem,cands}}
function gqFillBank(charts){const out=[];for(const ch of charts)for(const v of gqViews(ch)){const I=gqViewInfo(v);if(I.cands.length>=2)out.push({t:'fill',...v,stem:I.stem,cands:I.cands})}return out}
function gqMark(q,cell,input){let n=gqNorm(input).replace(/^[-‐‑–]+/,'');if(!n)return false;const fs=q.ch.cells[cell],st=gqNorm(q.stem);return fs.some(f=>{const v=gqNorm(f);return n===v||(st&&st+n===v)})}
// Gender guess: nouns with exactly one gender
function gqGenderQs(items){return items.filter(x=>/^[mfn]$/.test(x.g||'')).map(x=>({t:'gender',id:x.id,w:x.w,gl:x.gl,g:x.g}))}
if(typeof module!=='undefined')module.exports={gqNorm,gqNounChart,gqAdjChart,gqDecl,gqPronFor,gqSlots,gqCaseQs,gqViews,gqViewInfo,gqFillBank,gqMark,gqGenderQs,GQ_PRON,GQ_CASES};

// ---------------- UI ----------------
let GQD=null,GZ=null;const gqReady=()=>GQD||(GQD=fetch('data/gq.json').then(r=>r.json()));
const gqT=(s,n)=>{const p=s.split('|');return GQ_CN[p[0]]+' '+GQ_NN[p[1]]};
const gqSrcName=s=>s.startsWith('decl/')?GQ_DECL[s.slice(5)]:s==='all/noun'?'All curated nouns':s==='all/adj'?'All curated adjectives':s==='all/pron'?'Pronoun & article charts':null;
// Build the item set for a source: [{id,w,gl,g,ch}] (ch null if no usable chart)
async function gqItems(src){const D=await gqReady();let ids,t=gqSrcName(src);
 if(src.startsWith('decl/')){const k=src.slice(5);ids=Object.keys(D.charts).filter(i=>D.charts[i].k==='noun'&&D.charts[i].decl===k).map(Number)}
 else if(src.startsWith('all/')){const k=src.slice(4);if(k==='pron')return {t,items:GQ_PRON.map(ch=>({id:ch.id,w:ch.w,gl:ch.gl,ch}))};ids=Object.keys(D.charts).filter(i=>D.charts[i].k===k).map(Number)}
 else{const d=await deckFor(src);if(!d)return null;t=d.t;ids=[...new Set(d.ids)].filter(i=>IDX[i])}
 const items=[],pr=new Set;for(const i of ids){const [w,p,gl,g]=IDX[i];const P=gqPronFor(w,p);if(P){if(!pr.has(P.id)){pr.add(P.id);items.push({id:P.id,w:P.w,gl:P.gl,ch:P,src:i})}continue}
  let ch=D.charts[i]||null;if(!ch&&!(i in D.none)&&(p==='noun'||p==='adj')){const e=await getE(i);ch=e.p==='noun'?gqNounChart(i,e):gqAdjChart(i,e)}
  items.push({id:i,w,gl,g:p==='noun'&&g&&g.length===1?g:'',pos:p,ch})}
 return {t,items}}
function gqBank(mode,items){const ch=items.map(x=>x.ch).filter(Boolean);return mode==='case'?gqCaseQs(ch):mode==='fill'?gqFillBank(ch):gqGenderQs(items.filter(x=>x.pos==='noun'))}
async function gqRoute(p){const mode=p[0],n=p[1]==='all'?0:(+p[1]||10),src=p.slice(2).join('/');M.innerHTML='<p>Loading…</p>';
 const crumbs=`<div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a> › ${GQ_MODES[mode]}</div>`;
 const d=src&&await gqItems(src);if(!d){M.innerHTML=crumbs+`<p>List not found. <a href="#quiz">Choose a list</a>.</p>`;return}
 const bank=gqBank(mode,d.items);if(!bank.length){M.innerHTML=crumbs+`<h2 class="pgtitle">${esc(d.t)}</h2><p>This list has no ${mode==='gender'?'nouns with a single known gender':'words with a usable case chart'} for ${GQ_MODES[mode]}. <a href="#quiz/set/${esc(src)}">Pick another list or mode</a>.</p>`;return}
 gqStart({mode,n,src,t:d.t,bank})}
// one session: case questions shuffled; fill = one view per question with 2–4 random blanks
function gqStart(o,only){let qs=only||shuf(o.bank).slice(0,o.n||undefined);
 qs=qs.map(q=>q.t==='fill'?{...q,blanks:only?q.blanks:shuf(q.cands).slice(0,Math.min(q.cands.length,2+Math.floor(Math.random()*3))),ans:null,pick:null}:{...q,pick:null});
 GZ={...o,qs,k:0,score:0,retry:!!only};gqShow()}
function gqHead(){const z=GZ,N=z.qs.length;return `<div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a> › ${esc(z.t)}${z.retry?' › Retry missed':''}</div>
<div class="qmeta"><span>${GQ_MODES[z.mode]}</span><a href="#quiz/set/${esc(z.src)}">Change</a></div>
<div class="qprog" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${z.k}"><span style="width:${100*z.k/N}%"></span></div>
<div class="qstat"><span>Question ${Math.min(z.k+1,N)} of ${N}</span><span>Score ${z.score}</span></div>`}
const gqWho=ch=>`<div class="gqof">${ch.k==='pron'?'a form of':'form of'} <b>${esc(ch.w)}</b>${ch.k==='adj'?' <span class="small">(adjective, strong)</span>':ch.k==='pron'?'':''}${ch.g?gbadge(ch.g):''} <span class="gl">“${esc(cleanG(ch.gl))}”</span></div>`;
function gqChartHTML(ch,cols,cellFn){return `<div class="tw"><table class="gt par gqt"><tr><th></th>${cols.map(j=>`<th class="${ch.cols[j].g?'g-'+ch.cols[j].g:''}">${esc(ch.cols[j].h)}</th>`).join('')}</tr>${GQ_CASES.map(c=>`<tr class="r-${c}"><th class="c-${c}">${GQ_CN[c][0].toUpperCase()+GQ_CN[c].slice(1)}</th>${cols.map(j=>`<td>${cellFn(c,j)}</td>`).join('')}</tr>`).join('')}</table></div>`}
function gqShow(){const z=GZ;if(z.k>=z.qs.length)return gqEnd();const q=z.qs[z.k];let body='';
 if(q.t==='case'){const done=q.pick!=null;
  body=`<div class="card qcard"><div class="qlbl">Which case and number?</div><div class="qw">${esc(q.form)}</div>${gqWho(q.ch)}</div>
<div class="gqgrid" role="group" aria-label="Case and number"><div></div><div class="gqh">Singular</div><div class="gqh">Plural</div>${GQ_CASES.map((c,i)=>`<div class="gqrl c-${c}">${GQ_CN[c]}</div>${['sg','pl'].map((n,j)=>{const s=c+'|'+n,ok=q.valid.includes(s),cls=done?(ok?' ok':s===q.pick?' bad':' dim'):'';
  return `<button type="button" class="qopt gqo gq-${c}${cls}" ${done?'disabled':''} onclick="gqPick('${s}')" aria-label="${GQ_CN[c]} ${GQ_NN[n]}"><span class="qk" aria-hidden="true">${done&&ok?'✓':done&&s===q.pick?'✗':i+1+j*4}</span><span class="qtx">${n==='sg'?'sg':'pl'}</span></button>`}).join('')}`).join('')}</div>
<div id="qfb" class="qfb" aria-live="polite">${done?gqFbCase(q):'<p class="small qhint">Tap the case and number<span class="kbh">, or press 1–4 (singular) / 5–8 (plural)</span>.</p>'}</div>`}
 else if(q.t==='fill'){const done=q.ans!=null,ch=q.ch;
  body=`<div class="card qcard"><div class="qlbl">Fill in the missing forms</div><div class="qw gqw2">${esc(ch.w)}</div><div class="gqof">${ch.k==='adj'?'adjective, strong declension'+(q.g?', '+GQ_GN[q.g]:''):ch.k==='pron'?'pronoun':'noun'}${ch.g?gbadge(ch.g,1):''} <span class="gl">“${esc(cleanG(ch.gl))}”</span></div></div>
${gqChartHTML(ch,q.cols,(c,j)=>{const k=c+'|'+j,bi=q.blanks.indexOf(k);if(bi<0)return esc(ch.cells[k].join(', '));
   if(!done)return `<label class="gqin"><span class="sr">${GQ_CN[c]} ${esc(ch.cols[j].h)}</span>${q.stem?`<span class="gqst">${esc(q.stem)}</span>`:''}<input id="gqi${bi}" data-k="${k}" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="${bi===q.blanks.length-1?'done':'next'}" onfocus="GQF=this"></label>`;
   const ok=q.res[bi];return `<span class="gqa ${ok?'ok':'bad'}">${ok?'✓':'✗'} ${esc(ch.cells[k].join(', '))}${ok?'':` <s class="small">${esc(q.ans[bi]||'—')}</s>`}</span>`})}
${done?'':`<div class="gqkeys" role="group" aria-label="Special letters">${['æ','þ','ð','ā','ē','ī','ō','ū','ȳ','ǣ'].map(ch=>`<button type="button" class="sec" onmousedown="event.preventDefault()" onclick="gqKey('${ch}')">${ch}</button>`).join('')}</div>`}
<div id="qfb" class="qfb" aria-live="polite">${done?gqFbFill(q):`<button type="button" class="qbtn" onclick="gqCheck()">Check</button> <p class="small qhint">${q.stem?`Type the ending after <b>${esc(q.stem)}</b>, or the whole word. `:'Type the whole word. '}Macrons and accents are optional.</p>`}</div>`}
 else{const done=q.pick!=null;
  body=`<div class="card qcard"><div class="qlbl">What gender is this noun?</div><div class="qw">${esc(q.w)}</div><div class="gqof"><span class="gl">“${esc(cleanG(q.gl))}”</span></div></div>
<div class="qopts gqgen" role="group" aria-label="Gender">${['m','f','n'].map((g,i)=>{const cls=done?(g===q.g?' ok':g===q.pick?' bad':' dim'):'';return `<button type="button" class="qopt gqg gqg-${g}${cls}" ${done?'disabled':''} onclick="gqPick('${g}')"><span class="qk" aria-hidden="true">${done&&g===q.g?'✓':done&&g===q.pick?'✗':i+1}</span><span class="qtx"><span class="g ${g}">${GQ_GN[g]}</span> <span class="small">${GQ_ART[g]} …</span></span></button>`}).join('')}</div>
<div id="qfb" class="qfb" aria-live="polite">${done?gqFbGender(q):'<p class="small qhint">Tap a gender<span class="kbh">, or press 1–3 (or M / F / N)</span>.</p>'}</div>`}
 M.innerHTML=`<div class="quiz gq">${gqHead()}${body}</div>`;
 if(q.t==='fill'&&q.ans==null){GQF=$('#gqi0');GQF?.focus({preventScroll:true});M.querySelectorAll('.gqin input').forEach((el,i,a)=>el.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();if(i<a.length-1)a[i+1].focus();else gqCheck()}})}
 else if((q.pick!=null||q.ans!=null))$('#qnext')?.focus({preventScroll:true})}
let GQF=null;function gqKey(c){const el=GQF||$('#gqi0');if(!el)return;const s=el.selectionStart??el.value.length,e=el.selectionEnd??s;el.value=el.value.slice(0,s)+c+el.value.slice(e);el.focus();el.setSelectionRange(s+1,s+1)}
const gqNext=last=>`<button type="button" id="qnext" class="qbtn" onclick="gqNx()">${last?'See results':'Next'} →</button> <span class="small qhint kbh">or press Enter</span>`;
function gqFbCase(q){const right=q.valid.includes(q.pick),last=GZ.k+1>=GZ.qs.length,v=q.valid.map(s=>`<b class="c-${s.split('|')[0]}">${gqT(s)}</b>`);
 return `<div class="card qres ${right?'ok':'bad'}"><b class="qv">${right?'✓ Correct!':'✗ Not quite.'}</b> ${q.valid.length>1?`<b>${esc(q.form)}</b> fits ${q.valid.length} slots in this chart: ${v.join(', ')}. Any of them counts.`:`<b>${esc(q.form)}</b> is ${v[0]}.`}
 ${gqChartHTML(q.ch,q.ch.cols.map((_,j)=>j),(c,j)=>q.ch.cells[c+'|'+j].map(f=>gqNorm(f)===gqNorm(q.form)?`<mark>${esc(f)}</mark>`:esc(f)).join(', '))}
 ${typeof q.ch.id==='number'?`<p class="small"><a href="#w/${q.ch.id}">open entry</a></p>`:'<p class="small"><a href="#grammar/pronouns">Pronouns guide</a></p>'}</div>${gqNext(last)}`}
function gqFbFill(q){const right=q.res.every(Boolean),last=GZ.k+1>=GZ.qs.length;return `<div class="card qres ${right?'ok':'bad'}"><b class="qv">${right?'✓ All correct!':`✗ ${q.res.filter(Boolean).length} of ${q.res.length} right.`}</b> ${typeof q.ch.id==='number'?`<a class="small" href="#w/${q.ch.id}">open entry</a>`:''}</div>${gqNext(last)}`}
function gqFbGender(q){const right=q.pick===q.g,last=GZ.k+1>=GZ.qs.length;return `<div class="card qres ${right?'ok':'bad'}"><b class="qv">${right?'✓ Correct!':'✗ Not quite.'}</b> <b>${GQ_ART[q.g]} ${esc(q.w)}</b> is <span class="g ${q.g}">${GQ_GN[q.g]}</span>: “${esc(cleanG(q.gl))}”. <a class="small" href="#w/${q.id}">open entry</a></div>${gqNext(last)}`}
const gqKeyOf=q=>q.t==='case'?q.ch.id+':'+gqNorm(q.form):q.t==='fill'?q.ch.id+':'+(q.g||''):String(q.id);
function gqMiss(q){const st=QST();st.gmiss=st.gmiss||{};const k=GZ.mode+':'+gqKeyOf(q);st.gmiss[k]=(st.gmiss[k]||0)+1;SQST(st)}
function gqPick(v){const z=GZ,q=z.qs[z.k];if(!q||q.pick!=null||q.t==='fill')return;q.pick=v;const ok=q.t==='case'?q.valid.includes(v):v===q.g;if(ok)z.score++;else gqMiss(q);gqShow()}
function gqCheck(){const z=GZ,q=z.qs[z.k];if(!q||q.t!=='fill'||q.ans!=null)return;q.ans=q.blanks.map((k,i)=>($('#gqi'+i)||{}).value||'');q.res=q.blanks.map((k,i)=>gqMark(q,k,q.ans[i]));
 q.pick=q.res.every(Boolean)?1:0;if(q.pick)z.score++;else gqMiss(q);gqShow()}
function gqNx(){if(!GZ)return;GZ.k++;gqShow();window.scrollTo(0,0)}
const gqWrong=q=>q.t==='case'?!q.valid.includes(q.pick):q.t==='fill'?!q.pick:q.pick!==q.g;
function gqEnd(){const z=GZ,N=z.qs.length,pct=Math.round(100*z.score/N),st=QST(),bk=z.mode+':'+z.src;st.gbest=st.gbest||{};const prev=st.gbest[bk];let nb=false;
 if(!z.retry&&!z.saved){z.saved=1;if(!prev||pct>prev.pct||(pct===prev.pct&&z.score>prev.c)){st.gbest[bk]={c:z.score,n:N,pct,t:z.t,at:Date.now()};nb=true;SQST(st)}}
 const miss=z.qs.filter(gqWrong),b=st.gbest[bk];
 const mrow=q=>q.t==='case'?`<b>${esc(q.form)}</b> (${esc(q.ch.w)}): ${q.valid.map(gqT).join(' / ')}`:q.t==='fill'?`<b>${esc(q.ch.w)}</b>${q.g?' ('+GQ_GN[q.g]+')':''}: ${q.blanks.map(k=>GQ_CN[k.split('|')[0]]+' '+esc(q.ch.cols[+k.split('|')[1]].h.toLowerCase())+' = '+esc(q.ch.cells[k].join(', '))).join('; ')}`:`<b>${GQ_ART[q.g]} ${esc(q.w)}</b>: ${GQ_GN[q.g]}`;
 M.innerHTML=`<div class="quiz gq"><div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a> › ${esc(z.t)}</div><h2 class="pgtitle">Results</h2>
<div class="card qscore"><div class="qbig">${z.score} / ${N}</div><div>${pct}% · ${GQ_MODES[z.mode]}${z.retry?' · retry of missed questions':''}</div>
<div class="small">${pct===100?'Flawless. Wordhord unlocked! 🏆':pct>=80?'Great work, nearly there.':pct>=50?'Good going. Keep at it.':'A good start. Practice makes perfect.'}</div>
${z.retry?'':`<div class="small">${nb&&prev?'🎉 New best score for this list!':nb?'First score saved for this list.':b?`Best for this list: ${b.c}/${b.n} (${b.pct}%)`:''}</div>`}</div>
<div class="qacts">${miss.length?`<button type="button" class="qbtn" onclick="gqStart(GZ,GZ.qs.filter(gqWrong))">Retry missed (${miss.length})</button>`:''}<button type="button" class="qbtn${miss.length?' sec':''}" onclick="gqStart(GZ)">Quiz again</button><a class="btn qbtn2" href="#quiz/set/${esc(z.src)}">New quiz</a></div>
${miss.length?`<h3>Questions you missed</h3><ul class="gqmiss">${miss.map(q=>`<li>${mrow(q)}</li>`).join('')}</ul>`:'<p>No missed questions this round.</p>'}
<p class="small"><a href="#grammar/nouns">Nouns guide</a> · <a href="#grammar/pronouns">Pronouns guide</a> · <a href="#grammar/adjectives">Adjectives guide</a></p></div>`}
// picker helpers (used by quizPicker in quiz.js)
function gqSrcOpts(sel){return `<optgroup label="Grammar sets" class="gqonly">${['all/noun','all/adj','all/pron'].map(s=>`<option value="${s}"${s===sel?' selected':''}>${esc(gqSrcName(s))}</option>`).join('')}</optgroup><optgroup label="By declension (nouns)" class="gqonly">${Object.keys(GQ_DECL).map(k=>`<option value="decl/${k}"${'decl/'+k===sel?' selected':''}>${esc(GQ_DECL[k])}</option>`).join('')}</optgroup>`}
async function gqPickerSync(){const m=(document.querySelector('input[name=qm]:checked')||{}).value||'meaning',g=m!=='meaning',sel=$('#qzl');if(!sel)return;
 $('#qdir')&&($('#qdir').style.display=g?'none':'');sel.querySelectorAll('.gqonly').forEach(o=>{o.hidden=!g;o.disabled=!g});sel.querySelectorAll('option[value=missed]').forEach(o=>{o.hidden=g;o.disabled=g});
 if(sel.selectedOptions[0]?.disabled)sel.value=sel.querySelector('option:not([disabled])').value;
 const info=$('#gqinfo');if(!info)return;if(!g){info.textContent='';return}info.textContent='Checking words…';const src=sel.value,d=await gqItems(src);if(!d||sel.value!==src)return;
 const bank=gqBank(m,d.items),nc=d.items.filter(x=>m==='gender'?x.pos==='noun':true),sk=m==='gender'?nc.filter(x=>!x.g).length:d.items.filter(x=>!x.ch).length;
 info.innerHTML=`${bank.length} question${bank.length===1?'':'s'} available${sk?` · ${sk} word${sk===1?'':'s'} skipped (${m==='gender'?'no single known gender':'no usable case chart, e.g. verbs or indeclinables'})`:''}`}
if(typeof addEventListener==='function')addEventListener('keydown',e=>{if(typeof document==='undefined'||document.body.dataset.page!=='quiz'||!GZ||!$('.quiz.gq')||e.ctrlKey||e.metaKey||e.altKey)return;const q=GZ.qs[GZ.k];if(!q)return;const t=e.target.tagName,inp=t==='INPUT'||t==='SELECT'||t==='TEXTAREA';
 const done=q.t==='fill'?q.ans!=null:q.pick!=null;if(done&&!inp&&(e.key==='Enter'||e.key==='ArrowRight')){e.preventDefault();gqNx();return}if(inp||done)return;
 if(q.t==='case'&&/^[1-8]$/.test(e.key)){e.preventDefault();const i=+e.key-1;gqPick(GQ_CASES[i%4]+'|'+(i<4?'sg':'pl'))}
 else if(q.t==='gender'){const g={1:'m',2:'f',3:'n',m:'m',f:'f',n:'n'}[e.key.toLowerCase()];if(g){e.preventDefault();gqPick(g)}}});
