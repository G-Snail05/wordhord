// Guide 6: Word Order & Verse. Beowulf text: Harrison & Sharp (1883, public domain) via Wikisource;
// Cædmon's Hymn (West Saxon): as printed in Wikipedia "Old English literature". Lemma links verified against the dictionary data.
// Verse line: [n, a-verse words, b-verse words, translation]; word: [form, lemma(@pos)|'', gloss, stave(1)]
function BL(lines){const SH=f=>{const k=/^(sc|st|sp)/i.test(f)?2:1;return`<span class="st">${f.slice(0,k)}</span>${f.slice(k)}`};const W=w=>{const [f,l,g,s]=w;const lem=l?l.split('@')[0]:'',lp=l&&l.includes('@')?l.split('@')[1]:'';
  const fx=s?SH(f):f;
  return`<div class="ilw${s?' stv':''}"><span class="oe"><span class="lt">${fx}</span><span class="rn">${rs(f.replace(/‐/g,''))}</span></span>${lem?`<a class="exw mini" data-w="${lem}" data-p="${lp}" href="#dict"><span class="rune">${rs(lem)}</span></a>`:''}<span class="ilg">${g}</span></div>`};
 return `<div class="bwrap"><div class="bwbar"><button class="rt">Show in runes</button></div><div class="bw">${lines.map(([n,a,b,t])=>`<div class="bl"><span class="ln">${n}</span><span class="hl">${a.map(w=>`<span class="lt">${w[3]?SH(w[0]):w[0]}</span><span class="rn">${rs(w[0].replace(/‐/g,''))}</span>`).join(' ')}</span><span class="cz">‖</span><span class="hl">${b.map(w=>`<span class="lt">${w[3]?SH(w[0]):w[0]}</span><span class="rn">${rs(w[0].replace(/‐/g,''))}</span>`).join(' ')}</span>
 <details class="blg"><summary>gloss</summary><div class="il">${a.map(W).join('')}<div class="ilw czw">‖</div>${b.map(W).join('')}</div><p class="ilx">“${t}”</p></details></div>`).join('')}</div></div>`}
const BEO=[
[1,[['Hwæt!','hwæt@adv','listen!'],['Wē','wē@pron','we'],['Gār‐Dena','Gārdene@name','of the Spear-Danes',1]],[['in','in@prep','in'],['geār‐dagum','ġeārdagas@noun','days of yore',1]],'Listen! We have heard of the glory of the Spear-Danes in days of old,'],
[2,[['þēod‐cyninga','þēodcyning','of the people-kings',1]],[['þrym','þrymm@noun','might, glory',1],['gefrūnon,','ġefriġnan@verb','(have) heard of']],'of the kings of the people,'],
[3,[['hū','hū@adv','how'],['þā','sē@arti','the'],['æðelingas','æþeling','princes',1]],[['ellen','ellen@noun','courage, deeds of valour',1],['fremedon.','fremman@verb','performed']],'how the princes did deeds of courage.'],
[4,[['Oft','oft@adv','often'],['Scyld','Sċyld@name','Scyld',1],['Scēfing','Sċēfing@name','Scefing',1]],[['sceaðena','sċeaþa','of enemies',1],['þrēatum,','þrēat','from troops']],'Often Scyld Scefing took from troops of enemies,'],
[5,[['monegum','maniġ@adj','from many',1],['mǣgðum','mǣġþ','peoples',1]],[['meodo‐setla','medusetl','mead-benches',1],['oftēah.','oftēon@verb','took away']],'from many peoples, their mead-benches.'],
[6,[['Egsode','eġesian@verb','terrified',1],['eorl,','eorl','warrior(s)',1]],[['syððan','siþþan@conj','since'],['ǣrest','ǣrest@adv','first',1],['wearð','weorþan@verb','(he) was']],'He terrified warriors, after he was first'],
[7,[['fēa‐sceaft','fēasċeaft@adj','destitute',1],['funden:','findan@verb','found',1]],[['hē','hē@pron','he'],['þæs','sē@pron','for that'],['frōfre','frōfor','comfort',1],['gebād,','ġebīdan@verb','lived to see']],'found destitute: he lived to see comfort for that,'],
[8,[['wēox','weaxan@verb','grew',1],['under','under@prep','under'],['wolcnum,','wolcn','the clouds',1]],[['weorð‐myndum','weorþmynd','in honours',1],['þāh,','þēon@verb','prospered']],'grew under the skies, prospered in honours,'],
[9,[['oð','','until'],['þæt','þæt@conj','that'],['him','him@pron','to him'],['ǣghwylc','ǣġhwelċ@pron','each one',1]],[['þāra','sē@pron','of those'],['ymb‐sittendra','ymbsittend','neighbouring peoples',1]],'until each of the neighbouring peoples'],
[10,[['ofer','ofer@prep','over'],['hron‐rāde','hronrād','whale-road (the sea)',1]],[['hȳran','hīeran@verb','obey',1],['scolde,','sċulan@verb','had to']],'over the whale-road had to obey him'],
[11,[['gomban','gombe','tribute',1],['gyldan:','ġieldan@verb','pay',1]],[['þæt','sē@pron','that'],['wæs','wesan@verb','was'],['gōd','gōd@adj','good',1],['cyning!','cyning','king']],'and pay tribute: that was a good king!']];
const GO=()=>`
<p class="lead">Old English word order is freer than ours, because the endings show who does what to whom. It is not random, though. Prose follows a few clear patterns, centred on the position of the <b>finite verb</b>. Poetry adds its own rules: the <b>alliterative long line</b>. This guide covers both, then reads the opening of <i>Beowulf</i> and Cædmon’s Hymn.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/word-order/v2">Main clauses: the verb comes second</a></li><li><a href="#grammar/word-order/inv">Inversion after þā, ne and question words</a></li><li><a href="#grammar/word-order/sub">Subordinate clauses: verb last</a></li><li><a href="#grammar/word-order/q">Questions and commands: verb first</a></li><li><a href="#grammar/word-order/neg">Negation and double negatives</a></li><li><a href="#grammar/word-order/corr">Correlatives: þā … þā, þǣr … þǣr</a></li>
<li><a href="#grammar/word-order/line">Verse: the long line, half-lines and caesura</a></li><li><a href="#grammar/word-order/allit">Alliteration rules</a></li><li><a href="#grammar/word-order/sievers">Sievers’ five types</a></li><li><a href="#grammar/word-order/kenning">Kennings</a></li><li><a href="#grammar/word-order/variation">Variation and litotes</a></li>
<li><a href="#grammar/word-order/beowulf">Reading Beowulf, lines 1–11</a></li><li><a href="#grammar/word-order/caedmon">Cædmon’s Hymn</a></li><li><a href="#grammar/word-order/practice">Practice passage</a></li><li><a href="#grammar/word-order/quiz">Quick self-check</a></li><li><a href="#grammar/word-order/next">Where next</a></li><li><a href="#grammar/word-order/sources">Sources</a></li></ol></div>

<h3 id="v2">1. Main clauses: the verb comes second</h3>
<p>The default order in a main clause is <b>verb-second (V2)</b>, as in modern German or Dutch. The <span class="vfin">finite verb</span> (the one with a person ending) is the second element, whatever comes first. When the subject comes first this looks like English SVO. When something else comes first, the subject moves after the verb:</p>
<div class="tw"><table class="gt wo"><tr><th>First element</th><th>Example</th><th>Literal</th><th>Meaning</th></tr>
<tr><td>Subject</td><td><i><span class="sbj">Se mæssepreost</span> <span class="vfin">sceal</span> manum bodian þone soþan geleafan</i></td><td>the mass-priest shall people preach the true faith</td><td>The mass priest must preach the true faith to the people.</td></tr>
<tr><td>Topic phrase</td><td><i>on twam þingum <span class="vfin">hæfde</span> <span class="sbj">God</span> þæs mannes sawle geododod</i></td><td>in two things has God the man’s soul endowed</td><td>With two things God had endowed man’s soul.</td></tr>
<tr><td>Object</td><td><i>Ðas ðreo ðing <span class="vfin">forgifð</span> <span class="sbj">God</span> his gecorenum</i></td><td>these three things gives God his chosen</td><td>God gives these three things to his chosen.</td></tr></table></div>
<p class="note">Key: <span class="vfin">finite verb</span> · <span class="sbj">subject</span>. Notice that the infinitive or participle (<i>bodian, geododod</i>) often goes to the <b>end</b>, as in German. Linguists describe Old English as sitting between SOV and SVO languages. Spellings in this table are as quoted in Wikipedia’s “V2 word order” article, without length marks.</p>
<p>When the subject is a <b>pronoun</b>, V2 does not always apply: <i>forðon <span class="sbj">we</span> <span class="vfin">sceolan</span> … to Gode gecyrran</i> “therefore we must turn to God”.</p>

<h3 id="inv">2. Inversion after þā, ne and question words</h3>
<p>After {{þā@adv|then}}, the negative {{ne@adv|not}} and question words, the verb comes before the subject, nearly always, even when the subject is a pronoun:</p>
<div class="tw"><table class="gt wo"><tr><th>Trigger</th><th>Example</th><th>Meaning</th></tr>
<tr><td>þā “then”</td><td><i>þa <span class="vfin">foron</span> <span class="sbj">hie</span> mid þrim scipum ut</i></td><td>Then they sailed out with three ships.</td></tr>
<tr><td>þā “then”</td><td><i>þa <span class="vfin">wæs</span> <span class="sbj">þæt folc</span> þæs micclan welan ungemetlice brucende</i></td><td>Then the people were enjoying the great prosperity to excess.</td></tr>
<tr><td>ne “not”</td><td><i>Ne <span class="vfin">sceal</span> <span class="sbj">he</span> naht unaliefedes don</i></td><td>He must not do anything unlawful.</td></tr>
<tr><td>question word</td><td><i>Hwi <span class="vfin">wolde</span> <span class="sbj">God</span> swa lytles þinges him forwyrnan</i></td><td>Why would God deny him such a small thing?</td></tr>
<tr><td>after a quotation</td><td><i>“Me is,” <span class="vfin">cwæð</span> <span class="sbj">hēo</span>, “Þīn cyme on miclum ðonce”</i></td><td>“Your coming,” she said, “is very welcome to me.”</td></tr></table></div>
<p class="note">Wikipedia flags the claim that inversion after <i>ne</i> was “without exception” as disputed. Treat it as the strong tendency.</p>
<p>Modern English still has a little of this: “<i>Rarely <b>have</b> I seen …</i>”. And this is why <b>þā</b> clauses matter: <i>þā</i> can mean “then” or “when”, and the word order tells you which.</p>

<h3 id="sub">3. Subordinate clauses: verb last</h3>
<p>In subordinate clauses (after {{þæt@conj|that}}, {{þā@conj|when}}, {{þe@part,pron,conj|who, which}} etc.) the verb usually goes to the <b>end</b>, and V2 inversion does not happen, even with noun subjects:</p>
${IL([['þā ðā','þā@conj','when',''],['his','his@pron','his',''],['leorningcnihtas','','disciples','nom pl'],['hine','hē@pron','him','acc'],['axodon','','asked','verb']],'…when his disciples asked him… (verb last)')}
<p>Relative clauses (“the man who…”) use the particle {{þe@part,pron,conj}}, the demonstrative {{sē@pron}}/{{sēo@pron}}/{{þæt@pron}}, or both together (<i>sē þe</i>), never <i>hwā</i> “who”, which only asks questions.</p>

<h3 id="q">4. Questions and commands: verb first</h3>
<p><b>Questions</b> invert the subject and verb, with no “do” needed: <i>hīe libbaþ</i> “they live” → <i><b>libbaþ</b> hīe?</i> “do they live?” A yes/no question puts the verb <b>first</b>; a question word takes first place and the verb comes second. Examples from the dictionary:</p>
${IL([['Hwǣr','hwǣr@adv','where',''],['eart','wesan@verb','are','2sg'],['þū','þū@pron','you','nom']],'Where are you?')}
${IL([['Hwǣr','hwǣr@adv','where',''],['wunast','wunian@verb','live','2sg'],['þū','þū@pron','you','nom']],'Where do you live?')}
<p><b>Commands</b>: in the dictionary’s example sentences the imperative verb comes first:</p>
${IL([['Cum','cuman@verb','come!','imp'],['hider','hider@adv','here','']],'Come here!')}
${IL([['Gā','gān@verb','go!','imp'],['and','and@conj','and',''],['dō','dōn@verb','put','imp'],['on','on@prep','on',''],['clǣne','clǣne@adj','clean','acc fem'],['hemeþe','','shirt','acc']],'Go and put on a clean shirt.')}

<h3 id="neg">5. Negation and double negatives</h3>
<p>The negative particle {{ne@adv|not}} goes directly before the verb (and contracts with some verbs, as in <i>nis, nolde</i>; see the <a href="#grammar/verbs/neg">verbs guide</a>). Negatives <b>stack up and reinforce each other</b> (negative concord). Nobody reads two negatives as a positive:</p>
${IL([['Hit','hit@pron','it','nom'],['nǣfre','nǣfre@adv','never',''],['ne','ne@adv','not',''],['ācwilð','ācwelan@verb','dies','3sg']],'It never dies.')}
${IL([['Þā','þā@adv','then',''],['ne','ne@adv','not',''],['mihton','magan@verb','could','pl'],['hīe','hīe@pron','they','nom'],['him','him@pron','him','dat'],['nān','nān@det','no','acc'],['word','word@noun','word','acc'],['andswarian','andswarian@verb','answer','inf']],'They could not answer him one word. (ne + nān; note V2 after þā: ne mihton hīe)')}
<p>Other negative words: {{nā@adv|not}}, {{nāwiht@pron|nothing}}, {{nǣfre@adv|never}}, {{nān@det|no, none}}.</p>

<h3 id="corr">6. Correlatives: þā … þā, þǣr … þǣr</h3>
<p>Old English does not use <i>hwā/hwǣr</i> words for “when X, Y”. Instead it repeats a <i>þ-</i> word in both clauses. The <b>word order</b> shows which clause is which: the subordinate clause has the verb late, and the main clause has the verb second.</p>
${IL([['Þā','þā@conj','when',''],['ic','iċ@pron','I','nom'],['hām','hām@adv','home',''],['ēode,','gān@verb','went','late'],['þā','þā@adv','then',''],['slēp','slǣpan@verb','slept','V2'],['ic','iċ@pron','I','nom']],'When I went home, I slept. (lit. “Then I home went, then slept I.”)')}
${IL([['Þā','þā@conj','when',''],['sē','sē@arti','the','nom masc'],['ridda','','rider','nom'],['cōm','cuman@verb','came',''],['…, þā','þā@adv','then',''],['hnǣġde','hnǣġan@verb','neighed','V2'],['hit','hit@pron','it','nom']],'When the rider came to saddle his horse, it neighed happily.')}
${IL([['Þǣr','þǣr@adv','where',''],['iċ','iċ@pron','I','nom'],['sittan','sittan@verb','sit',''],['mōt','mōtan@verb','must',''],['…, þǣr','þǣr@adv','there',''],['iċ','iċ@pron','I','nom'],['wēpan','wēpan@verb','weep',''],['mæġ','magan@verb','can','']],'Where I must sit the summer-long day, there I can weep for my exile-journeys. (<i>The Wife’s Lament</i>, quoted in the dictionary’s entry for sumorlang, which prints <i>sittam</i>)')}
<div class="tw"><table class="gt"><tr><th>Pair</th><th>Meaning</th></tr><tr><td>þā X, þā Y</td><td>when X, Y</td></tr><tr><td>þǣr X, þǣr Y</td><td>where X, Y</td></tr><tr><td>{{þanon@adv}} X, þanon Y</td><td>whence (from where) X, Y</td></tr><tr><td>{{þider@adv}} X, þider Y</td><td>whither (to where) X, Y</td></tr><tr><td>{{þēah@conj}} (þe) X, þēah Y</td><td>although X, Y</td></tr><tr><td>{{þenden@conj}} X, þenden Y</td><td>while X, Y</td></tr><tr><td>{{þonne@adv}} X, þonne Y</td><td>whenever X, Y</td></tr><tr><td>{{þȳ@adv}} X, þȳ Y</td><td>the more X, the more Y</td></tr></table></div>

<h3 id="line">7. Verse: the long line, half-lines and caesura</h3>
<p>Old English poetry does not rhyme or count syllables. It is built from the <b>alliterative long line</b>:</p>
<ul class="pit"><li>Each line has two <b>half-lines</b>: the <b>a-verse</b> (on-verse) and the <b>b-verse</b> (off-verse).</li>
<li>A heavy pause, the <b>caesura</b> (shown here as ‖), separates them.</li>
<li>Each half-line usually has two strongly stressed syllables, the <b>lifts</b>. The weaker syllables between them are <b>dips</b>.</li>
<li>The first and/or second lift of the a-verse <b>alliterates</b> with the first lift of the b-verse. The second lift of the b-verse does <b>not</b> alliterate.</li>
<li>The b-verse is usually more regular in rhythm, which helps listeners hear where the line ends.</li></ul>
<p>Which syllables carry the lifts? The root syllables of <b>nouns, adjectives, participles and infinitives</b> are most stressed. <b>Finite verbs and adverbs</b> come next. <b>Pronouns, prepositions, conjunctions, parts of “to be” and endings</b> are weakest.</p>

<h3 id="allit">8. Alliteration rules</h3>
<ul class="pit"><li>Alliteration matches the <b>beginnings of stressed syllables</b>. Stress falls on the root, normally the first syllable, so unstressed prefixes like {{ġe-@pref}} don’t count: <i>ġefrūnon</i> alliterates on <i>f</i>.</li>
<li><b>All vowels alliterate with each other</b>: <i>æðelingas</i> with <i>ellen</i> (line 3); <i>Egsode</i>, <i>eorl</i> and <i>ǣrest</i> (line 6).</li>
<li><b>st-, sp- and sc-</b> count as single units: <i>sc-</i> alliterates only with <i>sc-</i>, as with <i>Scyld Scēfing … sceaðena</i> (line 4).</li>
<li>Alliteration goes by <b>sound, not letter</b>.</li></ul>

<h3 id="sievers">9. Sievers’ five types</h3>
<p>In 1893 Eduard Sievers sorted Old English half-lines into five basic rhythm types (/ = lift, x = dip, x́ = half-stress):</p>
<div class="tw"><table class="gt"><tr><th>Type</th><th>Shape</th><th>Pattern</th></tr>
<tr><td><b>A</b></td><td>falling</td><td>/ x / x</td></tr><tr><td><b>B</b></td><td>rising</td><td>x / x /</td></tr><tr><td><b>C</b></td><td>clashing (rising-falling)</td><td>x / / x</td></tr>
<tr><td><b>D</b></td><td>two lifts first</td><td>/ / x́ x or / / x x́</td></tr><tr><td><b>E</b></td><td>falling-rising</td><td>/ x́ x / or / x x́ /</td></tr></table></div>
<p>The dips can contain several syllables (e.g. type A as / x x x / x). Sievers’ system sorts half-lines into categories and is not a full theory of metre. Later scholars, notably A. J. Bliss, extended it.</p>

<h3 id="kenning">10. Kennings</h3>
<p>A <b>kenning</b> is a short figurative compound used in place of a plain noun. Old English kennings have just two parts:</p>
<div class="tw"><table class="gt"><tr><th>Kenning</th><th>Literally</th><th>Means</th><th>Where</th></tr>
<tr><td>{{hronrād|whale-road}}</td><td>whale-road</td><td>the sea</td><td>Beowulf 10</td></tr>
<tr><td>{{swanrād}}</td><td>swan-road</td><td>the sea</td><td>Beowulf 200</td></tr>
<tr><td>seġl-rād</td><td>sail-road</td><td>the sea</td><td>Beowulf 1429</td></tr>
<tr><td>{{hwælweġ}}</td><td>whale-way</td><td>the sea</td><td>The Seafarer 63</td></tr>
<tr><td>bæð-weġ</td><td>bath-way</td><td>the sea</td><td>Andreas 513</td></tr>
<tr><td>heofon-candel</td><td>sky-candle</td><td>the sun</td><td>Exodus 115</td></tr>
<tr><td>heofones ġim</td><td>heaven’s gem</td><td>the sun (a rare genitive kenning)</td><td>The Phoenix 183</td></tr>
<tr><td>{{bānhūs}}</td><td>bone-house</td><td>the body (“body, torso” in the dictionary)</td><td></td></tr>
<tr><td>{{hildelēoma}}</td><td>battle-light</td><td>a sword (dictionary gloss)</td><td></td></tr></table></div>
<p>Kennings, along with a stock of poetic synonyms rarely used in prose, gave poets many ways to find a word with the right first sound for the alliteration.</p>

<h3 id="variation">11. Variation and litotes</h3>
<p><b>Variation</b>: poets liked to name the same person or thing several times in a row with different phrases, each showing a different quality. The <i>Beowulf</i> poet calls one Danish king “lord of the Danes”, “king of the Scyldings”, “giver of rings” and “famous chief” within three and a half lines. You can see the same thing in Cædmon’s Hymn below, where God is <i>heofonrīces Weard</i>, <i>Metod</i>, <i>Wuldorfæder</i>, <i>ēce Dryhten</i>, <i>hālig Scyppend</i>, <i>monncynnes Weard</i> and <i>Frēa ælmihtig</i>.</p>
<p><b>Litotes</b> is ironic understatement, often saying “not un-X” to mean “very X”. It is a feature of Old English poetry. Wikipedia’s example from <i>Beowulf</i>: a sword’s edge was “not useless” to the hero in battle.</p>

<h3 id="beowulf">12. Reading Beowulf, lines 1–11</h3>
<p>The opening of <i>Beowulf</i>, from the 1883 edition of Harrison &amp; Sharp (public domain). <b>Alliterating staves are highlighted</b>, the caesura is marked ‖, and each line has a <b>gloss</b> button with word-by-word glosses and dictionary links. The rune button shows the text letter by letter in futhorc (a modern transliteration: the poem was written in the Latin alphabet).</p>
${BL(BEO)}
<p class="note">Spellings are the editors’ (e.g. <i>scolde</i> for dictionary <i>sċeolde</i>, <i>gyldan</i> for <i>ġieldan</i>); each link goes to the dictionary headword. The translation is ours, kept close to the Old English. The highlighting marks the alliteration as we read it.</p>

<h3 id="caedmon">13. Cædmon’s Hymn</h3>
<p>According to Bede, Cædmon was an illiterate herdsman who received the gift of song in a vision and then became a monk at Whitby under Abbess Hild, in the 7th century. He is considered the first Old English poet whose work survives. The nine-line hymn survives in Northumbrian, West Saxon and Latin versions in 19 manuscripts. This is the West Saxon text, with half-lines:</p>
<div class="passage verse"><p>Nū wē sculan herian ‖ heofonrīces Weard,<br>Metodes mihte ‖ and his mōdgeþonc,<br>weorc Wuldorfæder; ‖ swā hē wundra gehwæs,<br>ēce Dryhten, ‖ ord onstealde.<br>Hē ǣrest gesceōp ‖ eorðan bearnum<br>heofon tō hrōfe, ‖ hālig Scyppend;<br>ða middangeard, ‖ monncynnes Weard,<br>ēce Dryhten, ‖ æfter tēode<br>fīrum foldan, ‖ Frēa Ælmihtig.</p></div>
<div class="quiz"><details><summary>Show translation and key words</summary><p>“Now we must praise the Guardian of the heavenly kingdom, the might of the Creator and his purpose, the work of the Father of glory, as he, the eternal Lord, established the beginning of every wonder. He first created heaven as a roof for the children of men, the holy Creator; then the Guardian of mankind, the eternal Lord, afterwards made the middle-earth, the land for men, the Lord almighty.” (our close translation)</p>
<p>{{herian@verb|to praise}} · {{heofonrīċe|kingdom of heaven}} · {{weard@noun|guardian}} · {{metod|maker, creator; God}} · {{miht@noun|might}} · {{mōdġeþanc|thought, purpose}} · {{weorc|work}} · {{wuldorfæder|Father of glory}} · {{wundor|wonder}} · {{ēċe@adj|eternal}} · {{dryhten|lord}} · {{ord|beginning, point}} · {{onstellan@verb|establish}} · {{ġesċieppan@verb|create}} · {{eorþe|earth}} · {{bearn@noun|child}} · {{heofon|heaven}} · {{hrōf|roof}} · {{hāliġ@adj|holy}} · {{sċieppend|creator}} · {{middanġeard|the world}} · {{mancynn|mankind}} · {{fīras|men}} · {{folde|earth}} · {{frēa|lord}} · {{ælmihtiġ@adj|almighty}}</p>
<p>Try it: line 1 alliterates on <b>h</b> (<i>herian / heofonrīces</i>), line 2 on <b>m</b> (<i>Metodes mihte / mōdgeþonc</i>), and line 3 on <b>w</b>. Find the staves in lines 4–9.</p></details></div>

<h3 id="practice">14. Practice passage</h3>
<p>A short prose passage <b>written for this guide</b> (not a historical text). Find the V2 clauses, the verb-final clause, the question, the command and the double negative.</p>
<div class="passage"><p>Þā sē cyning hām cōm, þā ēode hē tō his healle. Þǣr sǣton his menn. Hē cwæþ: “Hwǣr is mīn sunu?” Ne andswarode him nān mann. Þā cwæþ hē eft: “Saga mē hwǣr hē sīe!” Sē ealda þeġn cwæþ þæt sē sunu tō þǣre sǣ fōr.</p></div>
<div class="quiz"><details><summary>Show analysis</summary>
${IL([['Þā','þā@conj','when',''],['sē','sē@arti','the','nom masc'],['cyning','cyning','king','nom masc'],['hām','hām@adv','home',''],['cōm,','cuman@verb','came','late'],['þā','þā@adv','then',''],['ēode','gān@verb','went','V2'],['hē','hē@pron','he','nom'],['healle','heall','hall','dat']],'When the king came home, he went to his hall. (þā…þā correlative: verb late in the “when” clause, then V2 with inversion: ēode hē)')}
${IL([['Þǣr','þǣr@adv','there',''],['sǣton','sittan@verb','sat','V2'],['menn','mann','men','nom pl']],'There sat his men. (adverb first → verb second → subject)')}
${IL([['Hwǣr','hwǣr@adv','where',''],['is','wesan@verb','is',''],['mīn','mīn@det','my',''],['sunu','sunu','son','nom']],'Where is my son? (question word, then verb)')}
${IL([['Ne','ne@adv','not',''],['andswarode','andswarian@verb','answered','V2'],['him','him@pron','him','dat'],['nān','nān@det','no','nom masc'],['mann','mann','man','nom']],'No man answered him. (ne first → verb before subject; ne + nān double negative)')}
${IL([['Saga','seċġan@verb','tell!','imp'],['mē','mē@pron','me','dat'],['sīe','wesan@verb','is','subj']],'Tell me where he is! (command: imperative first; sīe is subjunctive in reported speech)')}
${IL([['þeġn','þeġn','thane','nom'],['þæt','þæt@conj','that',''],['sǣ','sǣ@noun','sea','dat'],['fōr','faran@verb','went','late']],'The old thane said that the son had gone to the sea. (þæt-clause: verb last)')}
</details></div>

<h3 id="quiz">15. Quick self-check</h3>
<div class="quiz">
<details><summary>1. What is the default position of the finite verb in a main clause?</summary>Second (V2), whatever comes first.</details>
<details><summary>2. Translate the order: <i>þa foron hie mid þrim scipum ut</i>. Why is it “foron hie”?</summary>“Then they sailed out with three ships.” After <i>þā</i>, the verb comes before even a pronoun subject.</details>
<details><summary>3. Where does the verb usually go in a subordinate clause?</summary>At the end (verb-final).</details>
<details><summary>4. How would you make <i>hīe libbaþ</i> into a question?</summary><i>Libbaþ hīe?</i> Invert the verb and subject; there is no “do”.</details>
<details><summary>5. Does <i>ne … nān</i> make a positive?</summary>No. Negatives reinforce each other (negative concord).</details>
<details><summary>6. What does <i>Þā ic hām ēode, þā slēp ic</i> mean, and how can you tell which þā means “when”?</summary>“When I went home, I slept.” The first clause has the verb late (subordinate, “when”); the second has verb-second inversion (main clause, “then”).</details>
<details><summary>7. In a long line, which lift of the b-verse alliterates?</summary>The first. The second lift of the b-verse does not alliterate.</details>
<details><summary>8. Do <i>æðelingas</i> and <i>ellen</i> alliterate? Do <i>sc-</i> and <i>s-</i>?</summary>Yes, all vowels alliterate with each other. No, <i>sc-</i> alliterates only with <i>sc-</i>.</details>
<details><summary>9. What is Sievers’ type A?</summary>Falling: / x / x.</details>
<details><summary>10. What is a <i>hronrād</i>, and what is the device called?</summary>The “whale-road”, i.e. the sea. It is a kenning.</details></div>

<h3 id="next">16. Where next</h3>
<ul class="pit"><li><b>In Wordhord:</b> look up every word of a text in the <a href="#dict">dictionary</a> (inflected forms are found too), write names in the <a href="#runes">rune converter</a>, save words to <a href="#lists">lists</a> and drill them with <a href="#cards/My%20words">flashcards</a>. Re-read the guides: <a href="#grammar/letters">letters</a>, <a href="#grammar/nouns">nouns</a>, <a href="#grammar/pronouns">pronouns</a>, <a href="#grammar/verbs">verbs</a>, <a href="#grammar/adjectives">adjectives</a>.</li>
<li><b>Read the poem:</b> <a href="https://en.wikisource.org/wiki/Beowulf_(Harrison_and_Sharp)">Beowulf, ed. Harrison &amp; Sharp, on Wikisource</a>, with length marks and half-lines, or the <a href="https://sourcebooks.fordham.edu/basis/beowulf-oe.asp">Fordham Medieval Sourcebook text</a>.</li>
<li><b>Grammar reference:</b> <a href="https://en.wikipedia.org/wiki/Old_English_grammar">Wikipedia: Old English grammar</a> and <a href="https://en.wikipedia.org/wiki/V2_word_order">V2 word order</a>.</li>
<li><b>Verse:</b> <a href="https://en.wikipedia.org/wiki/Alliterative_verse">Alliterative verse</a>, <a href="https://en.wikipedia.org/wiki/Old_English_literature">Old English literature</a>, <a href="https://en.wikipedia.org/wiki/Kenning">Kenning</a>.</li>
<li><b>The data behind Wordhord:</b> <a href="https://en.wiktionary.org/wiki/Category:Old_English_lemmas">Wiktionary’s Old English lemmas</a> and <a href="https://kaikki.org/dictionary/Old%20English/">kaikki.org</a>.</li></ul>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_grammar">Old English grammar</a>”, section Syntax: V2 order, verb-final subordinate clauses, questions by inversion (<i>libbaþ hīe</i>), negative concord, relative clauses, and the correlatives list with <i>Þā ic hām ēode, þā slēp ic</i>.</li>
<li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/V2_word_order">V2 word order</a>”, section Old English: all the prose examples in sections 1–3, the pronoun-subject exception, and the note that inversion after <i>ne</i> is disputed.</li>
<li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Alliterative_verse">Alliterative verse</a>” (formal features, metre, rules for alliteration, diction), “<a href="https://en.wikipedia.org/wiki/Sievers%27s_theory_of_Anglo-Saxon_meter">Sievers’s theory of Anglo-Saxon meter</a>”, “<a href="https://en.wikipedia.org/wiki/Kenning">Kenning</a>” (Old English examples and line references), and “<a href="https://en.wikipedia.org/wiki/Old_English_literature">Old English literature</a>” (alliteration, caesura, variation, litotes, Cædmon, and the West Saxon text of the Hymn). “<a href="https://en.wikipedia.org/wiki/Litotes">Litotes</a>” for the <i>Beowulf</i> “not useless” example.</li>
<li><i>Beowulf</i>, ed. J. A. Harrison and R. Sharp (1883), on <a href="https://en.wikisource.org/wiki/Beowulf_(Harrison_and_Sharp)">Wikisource</a>, lines 1–11, checked against the <a href="https://sourcebooks.fordham.edu/basis/beowulf-oe.asp">Fordham Medieval Sourcebook</a> text.</li>
<li>Wiktionary via Wiktextract/kaikki.org (CC BY-SA 4.0): every linked word, and the example sentences quoted in sections 4–6 (<i>Hwǣr eart þū?</i>, <i>Cum hider!</i>, <i>Gā and dō on clǣne hemeþe</i>, <i>Hit nǣfre ne ācwilð</i>, <i>Þā ne mihton hīe him nān word andswarian</i>, <i>Þā sē ridda cōm…</i>, <i>Þǣr iċ sittan mōt…</i>).</li></ul>`;
