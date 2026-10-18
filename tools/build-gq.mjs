// Precompute noun/adjective case charts for every curated-list word -> data/gq.json (used by grammar-quiz.js). Run: node tools/build-gq.mjs
import fs from 'node:fs';import path from 'node:path';import {ROOT,LISTS,IDX,chartFor} from './gq-lib.mjs';
const charts={},none={};const ids=[...new Set(LISTS.flatMap(l=>l.words.map(w=>w[0])))].sort((a,b)=>a-b);
for(const i of ids){if(!/^(noun|adj)$/.test(IDX[i][1]))continue;const c=chartFor(i);if(c){delete c.id;charts[i]={id:i,...c}}else none[i]=1}
fs.writeFileSync(path.join(ROOT,'data/gq.json'),JSON.stringify({charts,none}));
const d={};Object.values(charts).forEach(c=>{if(c.decl)d[c.decl]=(d[c.decl]||0)+1});
console.log(Object.keys(charts).length,'charts',Object.keys(none).length,'without chart; declensions',d);
