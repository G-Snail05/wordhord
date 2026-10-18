// Word-meaning quiz: multiple choice built from any curated or user list.
// Routes: #quiz (picker) · #quiz/set/<list> (picker, list preselected) · #quiz/<oe|en>/<10|20|all>/<list>
// <list> = curated slug, my/<id> (user list) or "missed" (most-missed words). Answers are checked by entry id.
const QST=()=>{try{return Object.assign({best:{},miss:{}},JSON.parse(localStorage.oeQuiz||'{}'))}catch(e){return{best:{},miss:{}}}};
const SQST=s=>{try{localStorage.oeQuiz=JSON.stringify(s)}catch(e){}};
const QSTOP=new Set('to a an the of or and in on at for with by as be from into one oneself onself someone something somebody etc is it its that this which very also any some esp especially usually'.split(' '));
const shuf=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
// Clean a dictionary gloss for use as an answer: drop "the rune", bracketed notes, and cut long/truncated glosses at a clause boundary
function cleanG(g){const o=String(g||'');let s=o.replace(/^the rune\s+/i,'');
 for(let k=0;k<3;k++)s=s.replace(/\([^()]*\)/g,'');s=s.replace(/\([^)]*$/,'').replace(/\[[^\]]*\]?/g,'').replace(/\s+([,;:.])/g,'$1').replace(/\s{2,}/g,' ').trim();
 const trim=x=>{x=x.replace(/[,;:\s]+$/,'');let t;while((t=x.match(/\s(\S+)$/))&&QSTOP.has(t[1].toLowerCase()))x=x.slice(0,-t[0].length).replace(/[,;:\s]+$/,'');return x};
 let cut=0;if(o.length>=68||s.length>60){const b=Math.max(s.lastIndexOf(';',60),s.lastIndexOf(',',60));if(b>=3){s=s.slice(0,b);cut=1}else if(s.length>60)s=trim(s.slice(0,s.lastIndexOf(' ',58)))+'…'}
 s=cut?trim(s):s.replace(/[,;:.\s]+$/,'');s=s.replace(/^(an?|the) (?=[a-z0-9])/i,'');return s||o}
const qtoks=s=>norm(s).split(/[^a-z0-9æþðƿ'’-]+/).map(t=>t.replace(/^-+|-+$/g,'')).filter(t=>t.length>1&&!QSTOP.has(t));
// do two glosses mean (near enough) the same thing? same text, or any shared content word ("black" ~ "black", "door" ~ "a large door")
function gclash(a,b){const na=norm(a).replace(/[^a-z0-9]+/g,' ').trim(),nb=norm(b).replace(/[^a-z0-9]+/g,' ').trim();if(na===nb)return true;
 const ta=new Set(qtoks(a));return qtoks(b).some(t=>ta.has(t))}
const QBAD=/^(alternative|obsolete|misspelling|abbreviation|initialism|synonym of|a surname|a male given name|a female given name|meaning unclear)/i;
const QGRAM=/^(nominative|accusative|genitive|dative|instrumental|oblique|plural|singular|inflected|strong|weak|first|second|third|present|past|preterite|masculine|feminine|neuter)[\s/]/i;
const qgood=i=>IDX[i]&&IDX[i][2]&&!isFormOf(i)&&!QBAD.test(IDX[i][2])&&!QGRAM.test(IDX[i][2])&&cleanG(IDX[i][2]).length>0;
let QPOOL=null;function qpool(){if(QPOOL)return QPOOL;QPOOL={};IDX.forEach((e,i)=>{if(qgood(i)&&!/^(name|suff|pref|char)$/.test(e[1]))(QPOOL[e[1]]=QPOOL[e[1]]||[]).push(i)});QPOOL['*']=Object.values(QPOOL).flat();return QPOOL}
// 3 distractors: same list + same POS, then same POS anywhere in the dictionary, then same list, then anything
function qdistract(id,listIds){const P=qpool(),pos=IDX[id][1],cg=cleanG(IDX[id][2]),out=[];
 const ok=j=>j!==id&&qgood(j)&&NK[j]!==NK[id]&&!gclash(cleanG(IDX[j][2]),cg)&&out.every(c=>NK[c]!==NK[j]&&!gclash(cleanG(IDX[c][2]),cleanG(IDX[j][2])));
 const take=c=>{for(const j of c){if(out.length>=3)return;if(ok(j))out.push(j)}};
 const rnd=a=>{const r=[];if(!a||!a.length)return r;for(let t=0;t<300&&r.length<60;t++)r.push(a[Math.floor(Math.random()*a.length)]);return r};
 take(shuf(listIds.filter(j=>IDX[j][1]===pos)));if(out.length<3)take(rnd(P[pos]));if(out.length<3)take(shuf(listIds));if(out.length<3)take(rnd(P['*']));return out}
let QZ=null;
function qmissedIds(){const m=QST().miss;return Object.entries(m).filter(([i,c])=>c>0&&IDX[+i]).sort((a,b)=>b[1]-a[1]).slice(0,20).map(x=>+x[0])}
async function qdeck(key){if(key==='missed')return{t:'My trickiest words',ids:qmissedIds()};return deckFor(key)}
async function quizRoute(h){await ready;await listsReady;const p=h.split('/').slice(1);
 if(!p.length||!p[0])return quizPicker('');if(p[0]==='set')return quizPicker(p.slice(1).join('/'));
 const dir=p[0]==='en'?'en':'oe',n=p[1]==='all'?0:(+p[1]||10),key=p.slice(2).join('/');const d=key&&await qdeck(key);
 if(!d){M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a></div><p>List not found. <a href="#quiz">Choose a list</a>.</p>`;return}
 const ids=[...new Set(d.ids)].filter(i=>IDX[i]);if(!ids.length){M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a></div><h2 class="pgtitle">${esc(d.t)}</h2><p>This list has no words yet. Add words from any dictionary entry with “+ Add to list”, or <a href="#quiz">pick another list</a>.</p>`;return}
 qstart({key,t:d.t,dir,n,ids})}
function qstart(o,only){const qs=shuf(only||o.ids).slice(0,o.n&&!only?o.n:undefined).map(id=>({id,opts:shuf([id,...qdistract(id,o.ids)]),pick:null}));
 QZ={...o,qs,k:0,score:0,retry:!!only};qshow()}
const QDIR={oe:'Old English → English',en:'English → Old English'};
function qhead(){const z=QZ,N=z.qs.length;return `<div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a> › ${esc(z.t)}${z.retry?' › Retry missed':''}</div>
<div class="qmeta"><span>${QDIR[z.dir]}</span><a href="#quiz/set/${esc(z.key)}">Change</a></div>
<div class="qprog" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${z.k}"><span style="width:${100*z.k/N}%"></span></div>
<div class="qstat"><span>Question ${Math.min(z.k+1,N)} of ${N}</span><span>Score ${z.score}</span></div>`}
function qprompt(id){const [w,p,g,gd]=IDX[id],rn=p==='rune';return QZ.dir==='oe'
 ?`<div class="card qcard"><div class="qlbl">What does this mean?</div><div class="qw${rn?' rune':''}">${esc(w)}</div>${rn?'':`<div class="rune qr">${rs(w)}</div>`}<div class="wb">${posb(p)}${gbadge(gd,1)}</div></div>`
 :`<div class="card qcard"><div class="qlbl">Which Old English ${rn?'rune':'word'} means…</div><div class="qg">${esc(cleanG(g))}</div><div class="wb">${posb(p)}</div></div>`}
function qoptLabel(j){const [w,p]=IDX[j];return QZ.dir==='oe'?`<span class="qtx">${esc(cleanG(IDX[j][2]))}</span>`:`<span class="qtx"><b class="${p==='rune'?'rune qrb':''}">${esc(w)}</b>${p==='rune'?'':` <span class="rune">${rs(w)}</span>`}</span>`}
function qshow(){const z=QZ;if(z.k>=z.qs.length)return qend();const q=z.qs[z.k],done=q.pick!=null;
 M.innerHTML=`<div class="quiz">${qhead()}${qprompt(q.id)}<div class="qopts" role="group" aria-label="Answers">${q.opts.map((j,n)=>{const c=done?(j===q.id?' ok':j===q.pick?' bad':' dim'):'';
  return `<button type="button" class="qopt${c}" ${done?'disabled':''} onclick="qpick(${n})"><span class="qk" aria-hidden="true">${done&&j===q.id?'✓':done&&j===q.pick?'✗':n+1}</span>${qoptLabel(j)}${done&&j===q.id?'<span class="sr">(correct answer)</span>':done&&j===q.pick?'<span class="sr">(your answer)</span>':''}</button>`}).join('')}</div>
 <div id="qfb" class="qfb" aria-live="polite">${done?qfeedback(q):'<p class="small qhint">Tap an answer<span class="kbh">, or press 1–4</span>.</p>'}</div></div>`;
 if(done){$('#qnext')?.focus();qfull(q.id)}}
function qfeedback(q){const right=q.pick===q.id,last=QZ.k+1>=QZ.qs.length;
 return `<div class="card qres ${right?'ok':'bad'}"><b class="qv">${right?'✓ Correct!':'✗ Not quite.'}</b> ${right?'':'The answer is:'}<div class="qans">${wchip(q.id)}</div><div class="qfull small" id="qfull"></div></div>
 <button type="button" id="qnext" class="qbtn" onclick="qnext()">${last?'See results':'Next'} →</button> <span class="small qhint kbh">or press Enter</span>`}
async function qfull(id){const e=await getE(id),el=$('#qfull');if(!el||!e)return;const s=e.s.slice(0,3).map(x=>x[0]).filter(Boolean);if(s.length)el.innerHTML=`<b>Dictionary:</b> ${s.map((x,n)=>(s.length>1?(n+1)+'. ':'')+esc(x)).join(' ')} · <a href="#w/${id}">open entry</a>`}
function qpick(n){const z=QZ,q=z.qs[z.k];if(!q||q.pick!=null)return;q.pick=q.opts[n];const st=QST();
 if(q.pick===q.id)z.score++;else st.miss[q.id]=(st.miss[q.id]||0)+1;SQST(st);qshow()}
function qnext(){if(!QZ)return;QZ.k++;qshow();window.scrollTo(0,0)}
function qend(){const z=QZ,N=z.qs.length,pct=Math.round(100*z.score/N),st=QST(),bk=z.key+'|'+z.dir,prev=st.best[bk];let nb=false;
 if(!z.retry&&!z.saved){z.saved=1;if(!prev||pct>prev.pct||(pct===prev.pct&&z.score>prev.c)){st.best[bk]={c:z.score,n:N,pct,t:z.t,at:Date.now()};nb=true;SQST(st)}}
 const miss=z.qs.filter(q=>q.pick!==q.id),b=st.best[bk],m=st.miss;
 M.innerHTML=`<div class="quiz"><div class="crumbs"><a href="#">Home</a> › <a href="#quiz">Quiz</a> › ${esc(z.t)}</div><h2 class="pgtitle">Results</h2>
<div class="card qscore"><div class="qbig">${z.score} / ${N}</div><div>${pct}% · ${QDIR[z.dir]}${z.retry?' · retry of missed words':''}</div>
<div class="small">${pct===100?'Flawless. Wordhord unlocked! 🏆':pct>=80?'Great work, nearly there.':pct>=50?'Good going. Keep at it.':'A good start. Practice makes perfect.'}</div>
${z.retry?'':`<div class="small">${nb&&prev?'🎉 New best score for this list!':nb?'First score saved for this list.':b?`Best for this list: ${b.c}/${b.n} (${b.pct}%)`:''}</div>`}</div>
<div class="qacts">${miss.length?`<button type="button" class="qbtn" onclick="qretry()">Retry missed (${miss.length})</button>`:''}<button type="button" class="qbtn${miss.length?' sec':''}" onclick="qagain()">Quiz again</button><a class="btn qbtn2" href="#quiz/set/${esc(z.key)}">New quiz</a></div>
${miss.length?`<h3>Words you missed</h3><div class="wgrid qmiss">${miss.map(q=>wchip(q.id,'missed ×'+(m[q.id]||1)+' overall')).join('')}</div>`:'<p>No missed words this round.</p>'}
<p class="small">${z.key==='missed'?'':`<a href="#lists/${esc(z.key)}">Back to the list</a> · `}<a href="#cards/${z.key==='missed'?'':esc(z.key)}">Study with flashcards</a></p></div>`}
function qretry(){const z=QZ;qstart(z,z.qs.filter(q=>q.pick!==q.id).map(q=>q.id))}
function qagain(){const z=QZ;qstart(z)}
async function quizPicker(sel){await ready;await listsReady;const u=UL(),st=QST(),mi=qmissedIds();const lastDir=st.dir||'oe',lastN=st.n||'10';
 const opt=(v,l,c)=>`<option value="${esc(v)}"${v===sel?' selected':''}>${esc(l)} (${c})</option>`;
 if(!sel)sel=st.last&&(st.last.startsWith('my/')?ulist(st.last.slice(3)):clist(st.last))?st.last:'core-starter';
 const best=Object.entries(st.best).sort((a,b)=>b[1].at-a[1].at);
 M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › Quiz</div><h2 class="pgtitle">Word quiz</h2>
<p>Test yourself on any word list. Each question has four answers: the right one comes from the word's dictionary entry, and the wrong ones are other words' meanings from the same list, or from the wider dictionary.</p>
<form class="card qpick" onsubmit="qgo();return false"><label class="qfld"><span>List</span><select id="qzl">${mi.length?`<optgroup label="Review">${opt('missed','My trickiest words',mi.length)}</optgroup>`:''}<optgroup label="My lists">${u.map(l=>opt('my/'+l.id,l.name,l.words.length)).join('')}</optgroup><optgroup label="Curated lists">${LISTS.map(l=>opt(l.slug,l.title,l.words.length)).join('')}</optgroup></select></label>
<fieldset class="qseg"><legend>Direction</legend>${[['oe','Old English → English'],['en','English → Old English']].map(([v,l])=>`<label><input type="radio" name="qd" value="${v}"${v===lastDir?' checked':''}><span>${l}</span></label>`).join('')}</fieldset>
<fieldset class="qseg"><legend>Questions</legend>${['10','20','all'].map(v=>`<label><input type="radio" name="qn" value="${v}"${v===lastN?' checked':''}><span>${v==='all'?'All':v}</span></label>`).join('')}</fieldset>
<button class="qbtn qstart">Start quiz →</button></form>
${best.length?`<h3>Best scores</h3><div class="qbest">${best.map(([k,b])=>{const [key,d]=k.split('|');return `<a class="card qbl" href="#quiz/${d}/all/${esc(key)}"><b>${esc(b.t)}</b><span>${d==='en'?'EN → OE':'OE → EN'}</span><span class="qbp">${b.c}/${b.n} · ${b.pct}%</span></a>`}).join('')}</div>`:''}
${mi.length?`<h3>Your trickiest words</h3><p class="small">Words you've missed most often in quizzes. <a href="#quiz/${lastDir}/all/missed">Quiz these</a> · <button type="button" class="sec qclr" onclick="qclear()">Clear quiz history</button></p><div class="wgrid qmiss">${mi.slice(0,12).map(i=>wchip(i,'missed ×'+st.miss[i])).join('')}</div>`:''}`}
function qgo(){const key=$('#qzl').value,d=document.querySelector('input[name=qd]:checked').value,n=document.querySelector('input[name=qn]:checked').value,st=QST();st.dir=d;st.n=n;if(key!=='missed')st.last=key;SQST(st);location.hash=`quiz/${d}/${n}/${key}`}
function qclear(){if(!confirm('Clear your quiz best scores and missed-word counts?'))return;localStorage.removeItem('oeQuiz');quizPicker('')}
addEventListener('keydown',e=>{if(document.body.dataset.page!=='quiz'||!QZ||!$('.qopts')||e.ctrlKey||e.metaKey||e.altKey)return;const t=e.target.tagName;if(t==='INPUT'||t==='SELECT'||t==='TEXTAREA')return;
 const q=QZ.qs[QZ.k];if(!q)return;if(q.pick==null&&/^[1-4]$/.test(e.key)&&+e.key<=q.opts.length){e.preventDefault();qpick(+e.key-1)}else if(q.pick!=null&&(e.key==='Enter'||e.key==='ArrowRight')){e.preventDefault();qnext()}});
