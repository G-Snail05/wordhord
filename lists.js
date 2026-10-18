// Word lists: curated (data/lists.json, built by build.py) and the user's own (localStorage, oeLists2)
let LISTS=[];const listsReady=fetch('data/lists.json').then(r=>r.json()).then(d=>LISTS=d);
// user lists: [{id,name,words:[[headword,pos,idHint]]}]; migrates the old {name:[headwords]} format once
function UL(){if(!localStorage.oeLists2){let o={};try{o=JSON.parse(localStorage.oeLists||'{}')}catch(e){}if(!Object.keys(o).length)o={'My words':[]};
 SUL(Object.entries(o).map(([n,ws],j)=>({id:'u'+Date.now().toString(36)+j,name:n,words:ws.map(w=>{const i=find(w);return i>=0?[IDX[i][0],IDX[i][1],i]:null}).filter(Boolean)})))}
 return JSON.parse(localStorage.oeLists2)}
const SUL=l=>localStorage.oeLists2=JSON.stringify(l);
function uid([w,p,h]){if(IDX[h]&&IDX[h][0]===w&&IDX[h][1]===p)return h;for(let i=0;i<IDX.length;i++)if(IDX[i][0]===w&&IDX[i][1]===p)return i;return find(w)}
const ulist=id=>UL().find(x=>x.id===id),clist=s=>LISTS.find(x=>x.slug===s||x.title===s);
// one word chip, same .exw component as the guides, with gender/POS badges
function wchip(i,note,rm){const [w,p,g,gd]=IDX[i],rn=p==='rune';
 return `<span class="wcell"><a class="exw wc" href="#w/${i}"><b${rn?' class="rune"':''}>${esc(w)}</b>${rn?'':`<span class="rune">${rs(w)}</span>`}<span class="gl">${esc(g)}</span><span class="wb">${posb(p)}${gbadge(gd)}</span>${note?`<span class="wn">${esc(note)}</span>`:''}</a>${rm?`<button class="sec rmw" aria-label="Remove ${esc(w)}" onclick="rmW('${rm}',${i})">×</button>`:''}</span>`}
async function listsHub(){await ready;await listsReady;const u=UL();
 const samp=l=>l.words.slice(0,4).map(([i])=>`<span class="ls1"><b>${esc(IDX[i][0])}</b> <span class="rune">${IDX[i][1]==='rune'?'':rs(IDX[i][0])}</span></span>`).join('');
 M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › Lists</div><h2 class="pgtitle">Word lists</h2><p>Themed vocabulary to browse and study with flashcards. Curated lists are our selection; each list says what it is based on.</p><p class="lbar"><a class="btn" href="#cards">🃏 Flashcards</a> <a class="btn" href="#quiz">❓ Quiz yourself on a list</a></p>
<h3>My lists</h3><div class="mine"><form onsubmit="newL();return false"><input id="nl" placeholder="New list name" aria-label="New list name"> <button>Create</button></form>
${u.map(l=>`<div class="card myl"><a href="#lists/my/${l.id}"><b>${esc(l.name)}</b></a> <span class="cnt">${l.words.length} word${l.words.length==1?'':'s'}</span><span class="acts"><a class="btn" href="#cards/my/${l.id}">Study</a> <a class="btn" href="#quiz/oe/10/my/${l.id}">Quiz</a> <button class="sec" onclick="renL('${l.id}')">Rename</button> <button class="sec" onclick="rmL('${l.id}')">Delete</button></span></div>`).join('')||'<p>No lists yet.</p>'}
<p><small>Add words from any dictionary entry with “+ Add to list”. Your lists are saved in this browser only.</small></p></div>
<h3>Curated lists <small>(${LISTS.length})</small></h3><div class="quick lhub">${LISTS.map(l=>`<a class="card q" href="#lists/${l.slug}"><span class="tag">${l.level}</span><b>${esc(l.title)}</b><span>${esc(l.desc)}</span><span class="cnt">${l.words.length} words</span><span class="samp">${samp(l)}</span></a>`).join('')}</div>`}
function newL(){const n=$('#nl').value.trim();if(!n)return;const u=UL();u.push({id:'u'+Date.now().toString(36),name:n,words:[]});SUL(u);listsHub()}
function renL(id){const u=UL(),l=u.find(x=>x.id===id),n=prompt('Rename list',l.name);if(n&&n.trim()){l.name=n.trim();SUL(u);route()}}
function rmL(id){const u=UL(),l=u.find(x=>x.id===id);if(!confirm('Delete list “'+l.name+'”?'))return;SUL(u.filter(x=>x!==l));location.hash='lists';listsHub()}
function rmW(id,i){const u=UL(),l=u.find(x=>x.id===id);l.words=l.words.filter(x=>uid(x)!==i);SUL(u);listPage('my/'+id,1)}
let LSORT='list',LPOS='';
async function listPage(s,keep){await ready;await listsReady;if(!keep){LSORT='list';LPOS=''}
 const my=s.startsWith('my/'),l=my?ulist(s.slice(3)):clist(s);if(!l){M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#lists">Lists</a></div><p>List not found.</p>`;return}
 let ws=my?l.words.map(x=>[uid(x)]).filter(x=>x[0]>=0):l.words;const pos=[...new Set(ws.map(([i])=>IDX[i][1]))].sort();
 let v=ws.filter(([i])=>!LPOS||IDX[i][1]===LPOS);if(LSORT==='az')v=[...v].sort((a,b)=>norm(IDX[a[0]][0]).localeCompare(norm(IDX[b[0]][0])));
 const t=my?l.name:l.title,ck=my?'my/'+l.id:l.slug;
 M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#lists">Lists</a>${my?' › My lists':''} › ${esc(t)}</div><h2 class="pgtitle">${esc(t)}</h2>
${my?'':`<p><span class="tag">${l.level}</span> ${esc(l.desc)}</p><p class="lsrc"><small><b>Source:</b> ${l.src}</small></p>`}
<div class="lbar"><a class="btn" href="#cards/${ck}">Study with flashcards</a> <a class="btn" href="#quiz/oe/10/${ck}">Quiz this list</a>${qbestTxt(ck)} <span>${ws.length} words</span>
<label>Sort <select onchange="LSORT=this.value;listPage('${ck}',1)"><option value="list">List order</option><option value="az"${LSORT==='az'?' selected':''}>A–Z</option></select></label>
${pos.length>1?`<label>Part of speech <select onchange="LPOS=this.value;listPage('${ck}',1)"><option value="">All</option>${pos.map(p=>`<option${p===LPOS?' selected':''}>${esc(p)}</option>`).join('')}</select></label>`:''}
${my?`<button class="sec" onclick="renL('${l.id}')">Rename</button> <button class="sec" onclick="rmL('${l.id}')">Delete list</button>`:''}</div>
<div class="wgrid">${v.map(([i,n])=>wchip(i,n,my?l.id:0)).join('')||'<p>No words yet. Open any dictionary entry and use “+ Add to list”.</p>'}</div>`}
function listsRoute(h){const r=h.slice(6);if(!r)listsHub();else listPage(r)}
// flashcard decks: '' = all words; slug / old curated title; my/<id>; old user-list name
async function deckFor(name){await listsReady;if(!name)return null;if(name.startsWith('my/')){const l=ulist(name.slice(3));return l&&{t:l.name,ids:l.words.map(uid).filter(i=>i>=0)}}
 const c=clist(name)||clist({'Beowulf essentials':'beowulf-essentials','Everyday nouns':'everyday-nouns','Core strong verbs':'strong-verbs'}[name]||'');if(c)return{t:c.title,ids:c.words.map(x=>x[0])};
 const u=UL().find(x=>x.name===name);return u&&{t:u.name,ids:u.words.map(uid).filter(i=>i>=0)}}

function qbestTxt(k){const b=(typeof QST==='function')&&QST().best;if(!b)return'';const r=['oe','en'].map(d=>b[k+'|'+d]&&`${d==='en'?'EN→OE':'OE→EN'} ${b[k+'|'+d].pct}%`).filter(Boolean);return r.length?` <span class="small">Best quiz: ${r.join(', ')} · <a href="#quiz/set/${k}">options</a></span>`:` <a class="small" href="#quiz/set/${k}">quiz options</a>`}
