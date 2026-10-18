// Shared Node helpers for tools/build-gq.mjs and tests/grammar-sweep.mjs: loads the site data and grammar-quiz.js's pure functions.
import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';
export const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);export const GQ=require(path.join(ROOT,'grammar-quiz.js'));
// aclass() lives in app.js (browser script); lift that one pure function out of it
const app=fs.readFileSync(path.join(ROOT,'app.js'),'utf8');const a=app.indexOf('function aclass('),b=app.indexOf('\nfunction adjTable(');
export const aclass=new Function(app.slice(a,b)+';return aclass')();
export const J=f=>JSON.parse(fs.readFileSync(path.join(ROOT,f),'utf8'));
export const IDX=J('data/index.json'),LISTS=J('data/lists.json');
const SH={};export function getE(i){const k=String(Math.floor(i/250)).padStart(3,'0');SH[k]=SH[k]||J(`data/e/${k}.json`);return SH[k][i%250]}
export function chartFor(i){const e=getE(i);return e.p==='noun'?GQ.gqNounChart(i,e):e.p==='adj'?GQ.gqAdjChart(i,e,aclass):null}
