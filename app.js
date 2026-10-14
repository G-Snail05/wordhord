const $=s=>document.querySelector(s),M=$('#main');
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
// Anglo-Saxon futhorc (simplified; digraphs first)
const FU=[['sc','ᛋᚳ','sigel+cēn','s+c (sh)'],['ng','ᛝ','ing','ng'],['ea','ᛠ','ēar','ea'],['th','ᚦ','þorn','th'],
['a','ᚪ','āc','a'],['æ','ᚫ','æsc','æ'],['b','ᛒ','beorc','b'],['c','ᚳ','cēn','c/ch'],['d','ᛞ','dæg','d'],['e','ᛖ','eh','e'],
['f','ᚠ','feoh','f'],['g','ᚷ','gyfu','g/y'],['h','ᚻ','hægl','h'],['i','ᛁ','īs','i'],['k','ᛣ','calc','k'],['l','ᛚ','lagu','l'],['m','ᛗ','mann','m'],
['n','ᚾ','nȳd','n'],['o','ᚩ','ōs','o'],['p','ᛈ','peorð','p'],['r','ᚱ','rād','r'],['s','ᛋ','sigel','s'],['t','ᛏ','tīr','t'],
['u','ᚢ','ūr','u'],['w','ᚹ','wynn','w'],['ƿ','ᚹ','wynn','w'],['x','ᛉ','eolh','x'],['y','ᚣ','ȳr','y'],['þ','ᚦ','þorn','th'],['ð','ᚦ','þorn','th'],
['œ','ᛟ','ēðel','oe'],['oe','ᛟ','ēðel','oe'],['q','ᚳᚹ','cēn+wynn','cw'],['z','ᛋ','sigel','s'],['j','ᛡ','gār','j']];
function runes(w){let s=norm(w.replace(/[ċ]/g,'c').replace(/[ġ]/g,'g')),out=[];
 for(let i=0;i<s.length;){const m=FU.find(f=>s.startsWith(f[0],i));if(m){out.push(m);i+=m[0].length}else{if(s[i]===' ')out.push([' ','᛫','word divider','']);i++}}return out}
const rs=w=>runes(w).map(r=>r[1]).join('');
const L=()=>JSON.parse(localStorage.oeLists||'{"My words":[]}'),SL=l=>localStorage.oeLists=JSON.stringify(l);
const CURATED={'Beowulf essentials':['cyning','eorl','þegn','sweord','mōd','heofon','land','wulf'],'Everyday nouns':['hūs','mann','wīf','cild','hlāf','wæter','fȳr','hund','hors','dæg','niht'],'Core strong verbs':['beran','singan','drincan','etan','sēon','cuman','faran','rīdan','wrītan','cweþan']};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let IDX=[],NK=[],NG=[],FORMS=null;const SH={},CH=250;
const ready=fetch('data/index.json').then(r=>r.json()).then(d=>{IDX=d;NK=d.map(e=>norm(e[0]));NG=d.map(e=>norm(e[2]))});
const formsReady=ready.then(()=>fetch('data/forms.json')).then(r=>r.json()).then(d=>FORMS=d);
async function getE(i){const k=String(Math.floor(i/CH)).padStart(3,'0');SH[k]=SH[k]||fetch(`data/e/${k}.json`).then(r=>r.json());return (await SH[k])[i%CH]}
const isFormOf=i=>/\b(inflection|singular|plural|form|participle|tense|spelling|comparative|superlative|imperative|subjunctive|indicative|dative|genitive|accusative|nominative|instrumental) of /i.test(IDX[i][2]);
function find(w){const k=norm(w);let best=-1;for(let i=0;i<NK.length;i++)if(NK[i]===k){if(best<0)best=i;if(IDX[i][0]===w&&!isFormOf(i))return i;if(best>=0&&isFormOf(best)&&!isFormOf(i))best=i}return best}
function row(i){const[w,p,g]=IDX[i];return `<div class="card" onclick="location.hash='w/${i}'"><span class="hw">${esc(w)}</span><span class="rune">${rs(w)}</span> <span class="pos">${esc(p)}</span><div>${esc(g)}</div></div>`}
const MAX=100;
async function search(q){await ready;const raw=q.trim();q=norm(raw);if(!q){M.innerHTML=`<p>${IDX.length.toLocaleString()} Old English entries. Search above, or try <a href="#" onclick="$('#q').value='cyning';search('cyning');return false">cyning</a>, <a href="#" onclick="$('#q').value='king';search('king');return false">king</a>, <a href="#" onclick="$('#q').value='sungon';search('sungon');return false">sungon</a>.</p>`;return}
 const sc=new Map,add=(i,s)=>{if(!sc.has(i)||sc.get(i)<s)sc.set(i,s)};
 const wre=new RegExp('(^|[^a-z])'+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'($|[^a-z])');
 for(let i=0;i<NK.length;i++){const k=NK[i];if(k===q)add(i,100);else if(k.startsWith(q))add(i,60-Math.min(k.length,40)/2);else if(k.includes(q))add(i,20);
  const g=NG[i];if(g.includes(q))add(i,wre.test(g)?(g===q||g.startsWith(q+' ')||g.startsWith('to '+q)?75:45):10)}
 if(FORMS===null)await formsReady;(FORMS[q]||[]).forEach(i=>add(i,90));
 if(raw!==$('#q').value.trim())return;
 const r=[...sc].map(([i,s])=>[i,s-(isFormOf(i)?15:0)]).sort((a,b)=>b[1]-a[1]||NK[a[0]].length-NK[b[0]].length).map(x=>x[0]);
 M.innerHTML=`<p>${r.length.toLocaleString()} result${r.length===1?'':'s'}${r.length>MAX?` (showing top ${MAX})`:''}</p>`+r.slice(0,MAX).map(row).join('')}
const ORD=['nominative','accusative','genitive','dative','instrumental'];
function formsTable(e){const fs=e.f.filter(f=>f[1]).map(f=>({f:f[0],t:f[1].split(' ')}));if(!fs.length)return'<p>No inflection data.</p>';
 if(e.p!=='verb'&&fs.some(f=>f.t.some(t=>ORD.includes(t)))){const g={};fs.forEach(f=>{const c=ORD.find(o=>f.t.includes(o));if(!c)return;const nm=f.t.includes('plural')?'pl':'sg';const k=c+f.t.filter(t=>!ORD.includes(t)&&t!=='singular'&&t!=='plural').map(t=>' '+t).join('');g[k]=g[k]||{sg:new Set,pl:new Set};g[k][nm].add(f.f)});
  return`<table><tr><th>Case</th><th>Singular</th><th>Plural</th></tr>${Object.entries(g).map(([k,v])=>`<tr><td>${esc(k)}</td><td>${esc([...v.sg].join(', '))}</td><td>${esc([...v.pl].join(', '))}</td></tr>`).join('')}</table>`}
 const seen=new Set;return`<table><tr><th>Form</th><th>Grammar</th></tr>${fs.filter(f=>{const k=f.f+f.t;if(seen.has(k))return 0;seen.add(k);return 1}).map(f=>`<tr><td>${esc(f.f)}</td><td>${esc(f.t.join(' '))}</td></tr>`).join('')}</table>`}
async function entry(i){await ready;if(!IDX[i]){M.innerHTML='<p>Entry not found.</p>';return}M.innerHTML='<p>Loading…</p>';const e=await getE(i),l=L();
 M.innerHTML=`<div class="card" style="cursor:default"><span class="hw" style="font-size:34px">${esc(e.w)}</span><span class="rune" style="font-size:30px">${rs(e.w)}</span>
<div class="pos">${esc(e.p)} ${e.i?'· '+esc(e.i):''}</div><ol>${e.s.map(s=>`<li>${esc(s[0])}${s[1].map(x=>`<div class="ex">${esc(x[0])}${x[1]?`<br><i>${esc(x[1])}</i>`:''}</div>`).join('')}</li>`).join('')}</ol>
<select id="ls">${Object.keys(l).map(k=>`<option>${esc(k)}</option>`)}</select><button onclick="addTo(${i})">+ Add to list</button>
<h3>Runes (Anglo-Saxon futhorc)</h3><div class="runes">${runes(e.w).map(r=>`<div class="rb"><b>${r[1]}</b>${r[2]}<small>${r[3]}</small></div>`).join('')}</div>
<h3>Etymology / components</h3><p>${esc(e.y)||'—'}</p>${e.d.length?`<p><b>Derived:</b> ${e.d.map(x=>`<a href="#" onclick="$('#q').value=this.textContent;location.hash='';search(this.textContent);return false">${esc(x)}</a>`).join(', ')}</p>`:''}
<h3>All forms</h3>${formsTable(e)}</div>`}
function addTo(i){const l=L(),k=$('#ls').value,w=IDX[i][0];if(!l[k].includes(w))l[k].push(w);SL(l);alert('Added to '+k)}
async function lists(){await ready;const l=L();const blk=(nm,ws,mine)=>`<div class="card" style="cursor:default"><b>${esc(nm)}</b> <span class="tag">${mine?'mine':'curated'}</span> ${ws.length} words
 <button onclick="location.hash='cards/'+encodeURIComponent(${esc(JSON.stringify(nm))})">Study</button>${mine?`<button class="sec" onclick="rmL(${esc(JSON.stringify(nm))})">Delete</button>`:''}
 <div>${ws.map(w=>`<a href="#w/${find(w)}">${esc(w)}</a>`).join(' · ')}</div></div>`;
 M.innerHTML=`<h3>My lists</h3><input id="nl" placeholder="New list name"><button onclick="newL()">Create</button>${Object.entries(l).map(([nm,w])=>blk(nm,w,1)).join('')}<h3>Curated lists</h3>${Object.entries(CURATED).map(([nm,w])=>blk(nm,w,0)).join('')}`}
function newL(){const nm=$('#nl').value.trim();if(!nm)return;const l=L();l[nm]=l[nm]||[];SL(l);lists()}
function rmL(nm){if(!confirm('Delete list '+nm+'?'))return;const l=L();delete l[nm];SL(l);lists()}
let deck=[],k=0,flip=0,deckName='';
function randomReal(){for(let t=0;t<50;t++){const i=Math.floor(Math.random()*IDX.length);if(IDX[i][2]&&!isFormOf(i))return i}return Math.floor(Math.random()*IDX.length)}
async function cards(name){await ready;deckName=name;const l=L(),ws=l[name]||CURATED[name];
 deck=ws?ws.map(find).filter(i=>i>=0).sort(()=>Math.random()-.5):null;k=0;flip=0;if(!ws)deck=[randomReal()];showCard()}
async function next(){flip=0;k++;if(!(l=>l[deckName]||CURATED[deckName])(L()))deck.push(randomReal());showCard()}
async function showCard(){if(!deck.length){M.innerHTML='<p>List is empty.</p>';return}const i=deck[k%deck.length],e=await getE(i),all=!(L()[deckName]||CURATED[deckName]);
 M.innerHTML=`<h3>Flashcards: ${esc(deckName||'All words (random)')} ${all?`(#${k+1})`:`(${k%deck.length+1}/${deck.length})`}</h3><div class="card fc" onclick="flip=!flip;showCard()">${flip?`<div class="back"><div class="def">${esc(e.s[0]?.[0])}</div><div class="pos">${esc(e.p)}${e.i?' · '+esc(e.i):''}</div>${e.s[0]?.[1][0]?`<div class="more">${esc(e.s[0][1][0][0])}${e.s[0][1][0][1]?'<br><i>'+esc(e.s[0][1][0][1])+'</i>':''}</div>`:''}${e.s.length>1?`<div class="more">${e.s.slice(1,4).map((s,j)=>(j+2)+'. '+esc(s[0])).join('<br>')}</div>`:''}</div>`:`${esc(e.w)}<div class="rune">${rs(e.w)}</div>`}</div>
 <button onclick="next()">Next →</button> <a href="#w/${i}">open entry</a> <small>click card to flip</small><p>Study: ${['All words',...Object.keys(L()),...Object.keys(CURATED)].map(nm=>`<a href="#cards/${encodeURIComponent(nm==='All words'?'':nm)}">${esc(nm)}</a>`).join(' · ')}</p>`}
function about(){M.innerHTML=`<div class="card" style="cursor:default"><h2>About Wordhord</h2><p>An Old English → Modern English dictionary with runes, inflection tables, word lists and flashcards. ${IDX.length?IDX.length.toLocaleString()+' entries.':''}</p>
<h3>Dictionary data</h3><p>Entries come from <a href="https://en.wiktionary.org/">Wiktionary</a> (English edition), extracted with <a href="https://github.com/tatuylonen/wiktextract">Wiktextract</a> and distributed by <a href="https://kaikki.org/dictionary/Old%20English/">kaikki.org</a>. Wiktionary content is licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0</a> license (and the GFDL). The data has been reformatted (shortened and re-indexed) for this site; the derived data under <code>data/</code> is shared under CC BY-SA 4.0. Authors: the <a href="https://en.wiktionary.org/wiki/Special:ListUsers">Wiktionary contributors</a>.</p>
<p>Ylonen, T. (2022). Wiktextract: Wiktionary as Machine-Readable Structured Data. <i>Proceedings of LREC 2022</i>, 1317–1325.</p>
<h3>Font</h3><p>Runes are set in <a href="https://notofonts.github.io/">Noto Sans Runic</a> © Google / The Noto Project Authors, licensed under the <a href="fonts/OFL.txt">SIL Open Font License 1.1</a>.</p>
<h3>Runes</h3><p>Rune transliterations are generated automatically with a simplified Anglo-Saxon futhorc mapping and are not historical attestations.</p></div>`}
const WOTD=['cyning','hūs','mann','wīf','cild','stān','eorþe','heofon','sunne','mōna','wæter','fȳr','hlāf','hund','hors','cwēn','dæg','niht','ġēar','burg','scip','sweord','land','lufu','mōd','heorte','hand','fōt','ēage','eald','beran','singan','drincan','etan','sēon','cuman','faran','rīdan','wrītan','bōc','frēond','fēond','wulf','bēam','trēow','sǣ','eorl','þegn','word','wesan','habban','sprecan','lēoht','wind','mete','ēa','wudu','bearn','sāwol','gold'];
function wotdIndex(d=new Date()){const day=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5);return WOTD[((day*7919)%WOTD.length+WOTD.length)%WOTD.length]}
async function home(){M.innerHTML=`<section class="hero"><h1><span class="rune">ᚹᚩᚱᛞᚻᚩᚱᛞ</span> Wordhord</h1><p class="pitch">Unlock the word-hoard of Old English: a free dictionary with runes, word forms, lists and flashcards.</p>
<input id="hq" class="bigq" placeholder="Search Old English or modern English, e.g. cyning, king, sungon" autocomplete="off" enterkeyhint="search"></section>
<div class="grid2"><div class="card wotd" id="wotd" style="cursor:default"><div class="lbl">Word of the day</div><p>Loading…</p></div>
<div class="card" style="cursor:default"><div class="lbl">What is Old English?</div><p>Old English (Anglo-Saxon) is the earliest recorded form of English, spoken in England and southern Scotland from about 450 to 1150 AD. It came with Germanic settlers (Angles, Saxons and Jutes), and is the language of <i>Beowulf</i>, the <i>Anglo-Saxon Chronicle</i> and King Alfred's translations. It was mostly written in the Latin alphabet, with letters like þ, ð, æ and ƿ, and sometimes in futhorc runes. Old English had grammatical gender and full case endings, and it changed into Middle English after the Norman Conquest of 1066.</p></div></div>
<div class="quick"><a class="card q" href="#dict"><b>📖 Dictionary</b><span>Search <span id="nstat">68,489</span> entries by Old English, meaning or any inflected form</span></a>
<a class="card q" href="#lists"><b>📝 Lists</b><span>Your own word lists and curated sets</span></a>
<a class="card q" href="#cards"><b>🃏 Flashcards</b><span>Study a list or random words</span></a>
<a class="card q" href="#runes"><b><span class="rune">ᚱ</span> Rune converter</b><span>Write Old English in Anglo-Saxon futhorc</span></a>
<a class="card q" href="#grammar"><b>📜 Grammar guides</b><span>Start with Letters &amp; Pronunciation: þ, ð, æ and every sound</span></a></div>
<p class="stats"><b id="nstat2">68,489</b> dictionary entries · <b>113,769</b> searchable inflected forms · data from Wiktionary (CC BY-SA 4.0)</p>`;
 const hq=$('#hq');hq.oninput=()=>{const v=hq.value;$('#q').value=v;history.replaceState(null,'','#dict');search(v);$('#q').focus()};
 await ready;const n=IDX.length.toLocaleString();$('#nstat')&&($('#nstat').textContent=n);$('#nstat2')&&($('#nstat2').textContent=n);
 const w=wotdIndex(),i=find(w),box=$('#wotd');if(i<0||!box)return;const e=await getE(i);if(!$('#wotd'))return;const x=e.s[0]?.[1][0];
 box.innerHTML=`<div class="lbl">Word of the day · ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long'})}</div><a class="hw" href="#w/${i}" style="font-size:34px;text-decoration:none">${esc(e.w)}</a> <span class="rune" style="font-size:28px">${rs(e.w)}</span>
 <div class="pos">${esc(e.p)}${e.i?' · '+esc(e.i):''}</div><p class="def">${esc(e.s[0]?.[0])}</p>${x?`<div class="ex">${esc(x[0])}${x[1]?`<br><i>${esc(x[1])}</i>`:''}</div>`:''}<a href="#w/${i}">Open entry →</a>`}
function runePage(){M.innerHTML=`<div class="card" style="cursor:default"><h2>Rune converter</h2><p>Type Old English (or modern) text to see it in the Anglo-Saxon futhorc.</p>
<textarea id="rt" rows="3" placeholder="Hwæt! Wē Gār-Dena in ġēardagum">Hwæt wē Gārdena in ġēardagum</textarea><div id="ro" class="rune runeout"></div><h3>Rune by rune</h3><div id="rbk" class="runes"></div>
<p><small>The rune spellings are generated by a simplified letter-to-rune mapping (digraphs sc, ng, ea and th become one rune each). They are not historical inscriptions.</small></p></div>`;
 const up=()=>{const v=$('#rt').value,r=runes(v);$('#ro').textContent=r.map(x=>x[1]).join('');$('#rbk').innerHTML=r.map(x=>`<div class="rb"><b>${x[1]}</b>${esc(x[2])}<small>${esc(x[3]||'·')}</small></div>`).join('')};$('#rt').oninput=up;up()}
function route(){const h=decodeURIComponent(location.hash.slice(1));document.body.dataset.page=h.split('/')[0]||'home';if(h.startsWith('w/'))entry(+h.slice(2));else if(h==='lists')lists();else if(h==='about')about();else if(h==='runes')runePage();else if(h.startsWith('grammar'))grammarRoute(h);else if(h.startsWith('cards'))cards(h.slice(6));else if(h==='dict'||$('#q').value.trim())search($('#q').value);else home()}
let tmr;$('#q').oninput=()=>{clearTimeout(tmr);tmr=setTimeout(()=>{if(location.hash!=='#dict')history.replaceState(null,'','#dict');document.body.dataset.page='dict';search($('#q').value)},150)};onhashchange=route;route();
