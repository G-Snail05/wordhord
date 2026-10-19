// Every entry's "Derived:" link: resolve it with the same dtarget() logic as app.js and check the target's headword matches the link text.
import fs from 'node:fs';const R=new URL('..',import.meta.url).pathname;const app=fs.readFileSync(R+'app.js','utf8');
const pick=n=>{const a=app.indexOf('function '+n+'(');return app.slice(a,app.indexOf('\n',a))};
const IDX=JSON.parse(fs.readFileSync(R+'data/index.json'));const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();const NK=IDX.map(e=>norm(e[0]));
const isFormOf=new Function('IDX',app.match(/const isFormOf=([^;]+);/)[1].replace(/^/,'return '))(IDX);
const {dtarget}=new Function('IDX','NK','norm','isFormOf',pick('find')+'\n'+pick('dtarget')+';return {dtarget}')(IDX,NK,norm,isFormOf);
let n=0,ok=0,un=0,bad=0,ents=0;const unl=[];
for(const f of fs.readdirSync(R+'data/e').sort())for(const e of JSON.parse(fs.readFileSync(R+'data/e/'+f))){if(!e.d||!e.d.length)continue;ents++;
 for(const x of e.d){n++;const j=dtarget(x);if(j==null){un++;if(unl.length<15)unl.push(x);continue}
  if(!IDX[j]||NK[j]!==norm(x.replace(/^\*/,'').trim()))bad++;else ok++}}
console.log({entriesWithDerived:ents,links:n,resolvedToEntry:ok,unresolvedSearchLink:un,mismatched:bad});console.log('sample unresolved:',unl.join(' | '));if(bad)process.exit(1);
