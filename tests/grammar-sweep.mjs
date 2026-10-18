// Sweep every curated list (plus the grammar sets and declension groups) through all three grammar-quiz modes,
// building every possible question with grammar-quiz.js's own functions, and check each answer against the source data.
// Run: node tests/grammar-sweep.mjs   (exits 1 on any failure)
import {GQ,IDX,LISTS,J,getE,chartFor} from '../tools/gq-lib.mjs';
const D=J('data/gq.json');let fail=0;const errs=[];const bad=m=>{fail++;if(errs.length<40)errs.push(m)};
const N=GQ.gqNorm,CN={nom:'nominative',acc:'accusative',gen:'genitive',dat:'dative'},NN={0:'singular',1:'plural',sg:'singular',pl:'plural'};
// independent re-derivation of a noun's chart straight from its raw tags
function rawSlots(i,form){const e=getE(i),s=new Set;for(const [f,t] of e.f){if(!t)continue;const T=t.split(' ');if(T.length!==2)continue;const c=Object.keys(CN).find(k=>CN[k]===T[0]);if(!c||!/^(singular|plural)$/.test(T[1]))continue;if(N(f)===N(form))s.add(c+'|'+(T[1]==='singular'?'sg':'pl'))}return s}
function rawCell(i,c,n){return getE(i).f.filter(([f,t])=>t===CN[c]+' '+NN[n]).map(x=>x[0].normalize('NFC').trim())}
// build items exactly like gqItems() in the browser (curated data from data/gq.json)
function items(ids){const out=[],pr=new Set;for(const i of ids){const [w,p,gl,g]=IDX[i];const P=GQ.gqPronFor(w,p);if(P){if(!pr.has(P.id)){pr.add(P.id);out.push({id:P.id,ch:P})}continue}
 out.push({id:i,w,gl,g:p==='noun'&&g&&g.length===1?g:'',pos:p,ch:D.charts[i]||null})}return out}
const srcs=LISTS.map(l=>[l.slug,l.words.map(w=>w[0])]);
['a-m','a-n','o','weak','other'].forEach(k=>srcs.push(['decl/'+k,Object.keys(D.charts).filter(i=>D.charts[i].decl===k).map(Number)]));
['noun','adj'].forEach(k=>srcs.push(['all/'+k,Object.keys(D.charts).filter(i=>D.charts[i].k===k).map(Number)]));
// 0) data/gq.json is in sync with the dictionary
for(const i in D.charts){const c=chartFor(+i);if(JSON.stringify(c)!==JSON.stringify(D.charts[i]))bad(`gq.json out of date for ${i} ${IDX[i][0]}`)}
const tot={case:0,caseAmb:0,fill:0,fillCells:0,gender:0,skipped:0};const per=[];
for(const [src,ids] of srcs){const it=items(ids),ch=it.map(x=>x.ch).filter(Boolean);
 // Name that form
 const cq=GQ.gqCaseQs(ch);for(const q of cq){const all=[];for(const c of GQ.GQ_CASES)for(const n of ['sg','pl'])all.push(c+'|'+n);
  if(!q.valid.length)bad(`${src} case: ${q.form} has no valid slot`);
  for(const s of all){const [c,n]=s.split('|');const inChart=q.ch.cols.some((col,j)=>col.n===n&&q.ch.cells[c+'|'+j].some(f=>N(f)===N(q.form)));
   if(inChart!==q.valid.includes(s))bad(`${src} case: ${q.form} (${q.ch.w}) slot ${s} accepted=${q.valid.includes(s)} but in chart=${inChart}`)}
  if(q.ch.k==='noun'){const r=rawSlots(q.ch.id,q.form);for(const s of q.valid)if(!r.has(s))bad(`${src} case: ${q.form} (${q.ch.w}) ${s} not in raw dictionary tags`);
   for(const s of r)if(!q.valid.includes(s))bad(`${src} case: ${q.form} (${q.ch.w}) raw slot ${s} would be marked wrong`)}
  if(q.valid.length>1)tot.caseAmb++}
 // Fill the table: every blankable cell, marking accepts each listed spelling (whole / ending / no macrons / caps), rejects other cells' forms
 const fb=GQ.gqFillBank(ch);let cells=0;for(const q of fb){if(q.cands.length<2)bad(`${src} fill: <2 blanks for ${q.ch.w}`);
  for(const k of q.cands){cells++;const fs=q.ch.cells[k];const [c,j]=k.split('|');
   if(q.ch.k==='noun'){const r=rawCell(q.ch.id,c,j);for(const f of fs)if(!r.includes(f))bad(`${src} fill: ${q.ch.w} ${k} ${f} not in dictionary`)}
   for(const f of fs){if(!f.startsWith(q.stem))bad(`${src} fill: stem ${q.stem} not prefix of ${f}`);
    for(const inp of [f,f.slice(q.stem.length),'-'+f.slice(q.stem.length),N(f),N(f).toUpperCase(),N(f).slice(N(q.stem).length)])if(!GQ.gqMark(q,k,inp))bad(`${src} fill: ${q.ch.w} ${k} rejects "${inp}" for ${f}`)}
   if(GQ.gqMark(q,k,'')||GQ.gqMark(q,k,q.stem&&''))bad(`${src} fill: empty accepted`);
   for(const k2 of q.cands)if(k2!==k)for(const f2 of q.ch.cells[k2])if(!fs.some(f=>N(f)===N(f2))&&GQ.gqMark(q,k,f2))bad(`${src} fill: ${q.ch.w} ${k} wrongly accepts ${f2} from ${k2}`)}}
 // Gender guess
 const gq=GQ.gqGenderQs(it.filter(x=>x.pos==='noun'));for(const q of gq){const g=getE(q.id).g;if(!g||g.length!==1||g!==q.g)bad(`${src} gender: ${q.w} q=${q.g} entry=${g}`);if(IDX[q.id][1]!=='noun')bad(`${src} gender: ${q.w} not a noun`)}
 const sk=it.filter(x=>!x.ch).length;tot.case+=cq.length;tot.fill+=fb.length;tot.fillCells+=cells;tot.gender+=gq.length;tot.skipped+=sk;per.push(`${src}: case ${cq.length}, fill ${fb.length} charts/${cells} cells, gender ${gq.length}, skipped ${sk}`)}
// pronoun charts mirror the guide: every form must appear in pronouns.js
import fs from 'node:fs';const pj=fs.readFileSync(new URL('../pronouns.js',import.meta.url),'utf8').replace(/<\/?b>/g,'');
for(const P of GQ.GQ_PRON)for(const k in P.cells)for(const f of P.cells[k])if(!pj.includes(f))bad(`pronoun ${P.w} ${k} ${f} not found in pronouns.js`);
console.log(per.join('\n'));console.log('TOTAL',JSON.stringify(tot),'sources',srcs.length);
if(fail){console.log(`FAIL ${fail}`);console.log(errs.join('\n'));process.exit(1)}else console.log('PASS: no question has a wrong "correct" answer or a valid answer marked wrong');
