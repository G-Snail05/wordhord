// Guide 4: Strong & Weak Verbs. Conjugation tables are rendered live from the dictionary data (div.vc);
// hand-written tables (principal parts etc.) are checked against the data by the test script.
const VC=w=>`<div class="vc" data-w="${w}">Loading conjugation of ${w}…</div>`;
// principal parts row: [class/example note, inf, past sg, past pl, past ptc, modern]
const PPT=(rows,head)=>`<div class="tw"><table class="gt pp"><tr><th>${head||'Class'}</th><th class="t-pres">Infinitive</th><th class="t-past">Past sg. (1st/3rd)</th><th class="t-past">Past pl.</th><th>Past participle</th><th>Modern English</th></tr>${rows.map(r=>`<tr><th>${r[0]}</th><td>{{${r[1]}@verb}}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]||''}</td></tr>`).join('')}</table></div>`;
const GV=()=>`
<p class="lead">Old English verbs look complicated, but they follow a few big patterns. <b>Weak verbs</b> add a <i>-d-</i> ending for the past (our <i>-ed</i>). <b>Strong verbs</b> change their vowel instead (our <i>sing, sang, sung</i>). A handful of very common verbs are irregular. The conjugation tables in this guide are generated from the dictionary data, using the same colours as dictionary entries: <span class="c-pres"><b>present</b></span> and <span class="c-past"><b>past</b></span> columns, with person rows marked <span style="color:var(--p1)">1st</span>, <span style="color:var(--p2)">2nd</span>, <span style="color:var(--p3)">3rd</span> and <span style="color:var(--ppl)">plural</span>.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/verbs/basics">Verb basics: person, tense, mood</a></li><li><a href="#grammar/verbs/nonfinite">Infinitives, participles and ġe-</a></li><li><a href="#grammar/verbs/weak">Weak verbs: the -de past</a></li><li><a href="#grammar/verbs/w1">Weak class 1: dēman, fremman, nerian</a></li><li><a href="#grammar/verbs/w2">Weak class 2: lufian</a></li><li><a href="#grammar/verbs/w3">Weak class 3: habban, libban, seċġan</a></li>
<li><a href="#grammar/verbs/strong">Strong verbs and ablaut</a></li><li><a href="#grammar/verbs/pp">Reading principal parts</a></li><li><a href="#grammar/verbs/classes">The seven strong classes</a></li><li><a href="#grammar/verbs/singan">A full strong verb: singan</a></li><li><a href="#grammar/verbs/verner">Verner’s law: ċēosan/curon, wæs/wǣron</a></li>
<li><a href="#grammar/verbs/pretpres">Preterite-presents: cunnan, magan, sċulan…</a></li><li><a href="#grammar/verbs/irr">Irregular: bēon/wesan, dōn, gān, willan</a></li><li><a href="#grammar/verbs/neg">Negative contractions: nis, næs, nolde, nāt</a></li><li><a href="#grammar/verbs/practice">Practice passage</a></li><li><a href="#grammar/verbs/quiz">Quick self-check</a></li><li><a href="#grammar/verbs/sources">Sources</a></li></ol></div>

<h3 id="basics">1. Verb basics: person, tense, mood</h3>
<ul class="pit"><li><b>Person and number.</b> There are separate endings for <span style="color:var(--p1)">iċ</span> (1st sg), <span style="color:var(--p2)">þū</span> (2nd sg) and <span style="color:var(--p3)">hē/hēo/hit</span> (3rd sg). In the <span style="color:var(--ppl)">plural</span>, one form serves for all persons: <i>wē/ġē/hīe lufiaþ</i>. Typical present endings are <b>-e, -st, -þ, -aþ</b>, which is the origin of older English <i>thou lovest, he loveth</i>.</li>
<li><b>Only two tenses:</b> <span class="c-pres"><b>present</b></span> and <span class="c-past"><b>past</b></span> (also called “preterite”). There is no future ending.</li>
<li><b>The future</b> is expressed by (1) the present tense, as in English <i>I leave tomorrow</i>; (2) {{bēon@verb|to be}}, which was used “for the future and for certain kinds of general statements”; or (3) {{willan@verb|to want, will}}, one of whose meanings is future, e.g. <i>Hwæt lā <b>wilt</b> þū dōn?</i> “What are you going to do?” {{sċulan@verb|shall, must}} mostly means “must, ought to, have to”.</li>
<li><b>Three moods.</b> The <b>indicative</b> states facts. The <b>subjunctive</b> is for wishes, commands in the third person, reported speech, conditions and doubt; it has only a singular and a plural form in each tense (<i>-e / -en</i>). The <b>imperative</b> gives orders: {{singan@verb}} → <i>sing!</i> (one person), <i>singaþ!</i> (several).</li></ul>

<h3 id="nonfinite">2. Infinitives, participles and ġe-</h3>
<table class="gt"><tr><th>Form</th><th>Ending</th><th>Example</th><th>Use</th></tr>
<tr><td>Infinitive</td><td><b>-an</b> (class 2 <b>-ian</b>)</td><td>{{singan@verb|to sing}}, {{lufian@verb|to love}}</td><td>the dictionary form; used after verbs like <i>wille, mæġ, sċeal</i></td></tr>
<tr><td>Inflected infinitive</td><td><b>tō … -enne</b></td><td><i>tō singenne</i>, <i>tō lufienne</i></td><td>purpose or obligation, “in order to / is to be …”, after {{tō|to}}</td></tr>
<tr><td>Present participle</td><td><b>-ende</b></td><td><i>singende</i> “singing”</td><td>an adjective: “the singing man”</td></tr>
<tr><td>Past participle</td><td>(ġe-) … <b>-en</b> (strong), <b>-ed/-od/-d</b> (weak)</td><td><i>ġesungen</i>, <i>ġelufod</i></td><td>with {{habban@verb}} or {{bēon@verb}}/{{wesan@verb}} to make perfect and passive forms</td></tr></table>
<p>The prefix {{ġe-@pref}} is common on past participles (<i>ġesungen, ġelufod</i>) but is not compulsory. On other verbs it often adds a sense of completeness or result, e.g. {{sēon@verb|to see}} vs {{ġesēon@verb|to see, perceive}}.</p>

<h3 id="weak">3. Weak verbs: the -de past</h3>
<p>Weak verbs make their past tense with a <b>dental</b> suffix: <b>-de</b>, <b>-ede</b> or <b>-ode</b> (sometimes <b>-te</b>). This is the ancestor of our <i>-ed</i>: <i>love → loved</i> goes back to <i>lufian → lufode</i>. There are three classes.</p>

<h3 id="w1">4. Weak class 1: dēman, fremman, nerian</h3>
<p>Class 1 verbs often have an i-mutated vowel (compare {{dōm|judgement}} → {{dēman@verb|to judge}}). The past is <b>-de</b> after a long stem, and <b>-ede</b> after a short stem with a doubled consonant or <i>-r-</i>.</p>
${VC('dēman')}
${VC('fremman')}
<p>Notice how fremman loses its double <i>mm</i> in the 2nd and 3rd singular (<i>fremest, fremeþ</i>), in the past (<i>fremede</i>) and in the singular imperative (<i>freme</i>). Verbs in <i>-rian</i>, like {{nerian@verb|to save}}, go the same way: <i>nereþ, nerede</i>. Other class 1 verbs: {{hīeran@verb|to hear, obey}}, {{fēran@verb|to travel}}, {{dǣlan@verb|to share}}, {{styrian@verb|to move}}.</p>

<h3 id="w2">5. Weak class 2: lufian</h3>
<p>The biggest and most regular class. Almost all its verbs end in <b>-ian</b> and take the past <b>-ode</b>, and every verb in it has the same endings.</p>
${VC('lufian')}
<p>Others: {{hopian@verb|to hope}}, {{wunian@verb|to dwell}}.</p>

<h3 id="w3">6. Weak class 3: habban, libban, seċġan</h3>
<p>Only four verbs remain in this class: {{habban@verb|to have}}, {{libban@verb|to live}}, {{seċġan@verb|to say}} and {{hyċġan@verb|to think}}. All are irregular, so learn them as you meet them:</p>
<div class="tw"><table class="gt vt"><tr><th></th><th>habban “have”</th><th>libban “live”</th><th>seċġan “say”</th></tr>
<tr class="p1"><th class="c-pres">pres. 1sg</th><td>hæbbe</td><td>libbe</td><td>seċġe</td></tr><tr class="p2"><th class="c-pres">pres. 2sg</th><td>hæfst</td><td>leofast</td><td>sæġst</td></tr>
<tr class="p3"><th class="c-pres">pres. 3sg</th><td>hæfþ</td><td>leofaþ</td><td>sæġþ</td></tr><tr class="ppl"><th class="c-pres">pres. pl.</th><td>habbaþ</td><td>libbaþ</td><td>seċġaþ</td></tr>
<tr class="p3"><th class="c-past">past 1/3sg</th><td>hæfde</td><td>lifde</td><td>sæġde</td></tr><tr class="ppl"><th class="c-past">past pl.</th><td>hæfdon</td><td>lifdon</td><td>sæġdon</td></tr>
<tr><th>imperative sg.</th><td>hafa</td><td>leofa</td><td>saga, sæġe</td></tr><tr><th>past participle</th><td>(ġe)hæfd</td><td>(ġe)lifd</td><td>(ġe)sæġd</td></tr></table></div>
${VC('habban')}

<h3 id="strong">7. Strong verbs and ablaut</h3>
<p>Strong verbs form their past by <b>changing the root vowel</b>, a pattern called <b>ablaut</b>, with no -d- ending. Modern English still has dozens: <i>sing–sang–sung, ride–rode–ridden, give–gave–given</i>. In Old English these were regular patterns in seven classes, not “irregular verbs”. The past participle ends in <b>-en</b> (often with ġe-): {{ġesungen}}.</p>
<p>Strong verbs have <b>two past stems</b>. The first is used only for the 1st and 3rd person singular (<i>iċ/hē <b>sang</b></i>). The second is used for the 2nd singular, the whole plural and the past subjunctive (<i>þū <b>sunge</b>, wē <b>sungon</b></i>).</p>

<h3 id="pp">8. Reading principal parts</h3>
<p>Dictionaries and grammars give four <b>principal parts</b> for a strong verb. From these four forms you can build every other form:</p>
${PPT([['example','singan','sang','sungon','sungen','sing – sang – sung']],'')}
<ol><li><b>Infinitive</b> (singan) → the whole present tense, present subjunctive, imperative and present participle.</li><li><b>Past singular</b> (sang) → iċ sang, hē sang.</li><li><b>Past plural</b> (sungon) → wē sungon, þū sunge, and the past subjunctive sunge/sungen.</li><li><b>Past participle</b> (sungen) → (ġe)sungen.</li></ol>
<p>One more wrinkle: in the present 2nd and 3rd singular, many strong verbs change their vowel too, e.g. {{helpan@verb}} → <i>hilpst, hilpþ</i>, {{beran@verb}} → <i>birst, birþ</i>, {{faran@verb}} → <i>færst, færþ</i>, {{crēopan@verb}} → <i>crīepst, crīepþ</i>. The tables show these forms.</p>

<h3 id="classes">9. The seven strong classes</h3>
<p>Each class has its own vowel pattern. The class is usually guessable from the vowel of the infinitive:</p>
${PPT([['1 · ī','rīdan','rād','ridon','riden','ride – rode – ridden'],['2 · ēo','crēopan','crēap','crupon','cropen','creep (now weak)'],['2 · ēo','bēodan','bēad','budon','boden','bid (archaic “bade”)'],['3 · i+nC','singan','sang','sungon','sungen','sing – sang – sung'],['3 · i+nC','drincan','dranc','druncon','druncen','drink – drank – drunk'],['3 · e+lC','helpan','healp','hulpon','holpen','help (archaic “holpen”)'],['4 · e+r/l','beran','bær','bǣron','boren','bear – bore – born(e)'],['5 · e+other','sprecan','spræc','sprǣcon','sprecen','speak – spoke – spoken'],['5 · ie (after ġ)','ġiefan','ġeaf','ġēafon','ġiefen','give – gave – given'],['6 · a','faran','fōr','fōron','faren','fare (now weak)'],['7 · various','feallan','fēoll','fēollon','feallen','fall – fell – fallen'],['7 · various','hātan','hēt','hēton','hāten','hight (archaic)'],['7 · various','cnāwan','cnēow','cnēowon','cnāwen','know – knew – known']])}
<p>Summary of the vowel patterns (from the Wikipedia table): 1 <b>ī – ā – i – i</b>; 2 <b>ēo/ū – ēa – u – o</b>; 3 <b>e/eo/i + two consonants – æ/ea/a – u – o/u</b>; 4 <b>e – æ – ǣ – o</b>; 5 <b>e – æ – ǣ – e</b>; 6 <b>a – ō – ō – a</b>; 7 <b>various – ē/ēo – ē/ēo – same as infinitive</b>. In class 3, sound changes split the pattern into sub-types: <i>singan</i> (i before a nasal), <i>helpan</i> (e before l), and <i>weorþan</i> (eo before r).</p>

<h3 id="singan">10. A full strong verb: singan</h3>
${VC('singan')}
<p>Compare the class 4 verb {{beran@verb|to carry}}:</p>${VC('beran')}

<h3 id="verner">11. Verner’s law: ċēosan/curon, wæs/wǣron</h3>
<p>In some strong verbs the consonant changes as well as the vowel, between the singular past and the plural past and participle. This goes back to a prehistoric sound change known as <b>Verner’s law</b>: in Proto-Germanic, depending on the position of the accent, <i>s</i> became <i>z</i>, which then became <i>r</i> in West Germanic.</p>
<table class="gt"><tr><th>Verb</th><th>Past sg.</th><th>Past pl.</th><th>Participle</th><th>Modern trace</th></tr>
<tr><td>{{ċēosan@verb|to choose}}</td><td>ċēas</td><td><b>cur</b>on</td><td><b>cor</b>en</td><td>modern <i>chose, chosen</i> no longer show the r</td></tr>
<tr><td>{{wesan@verb|to be}}</td><td>wæs</td><td>wǣ<b>r</b>on</td><td>-</td><td><b>was</b> / <b>were</b>: the same alternation, still alive today</td></tr></table>

<h3 id="pretpres">12. Preterite-presents: cunnan, magan, sċulan…</h3>
<p>About a dozen very common verbs have a <b>present tense that looks like a strong past</b> (iċ/hē <i>cann</i>, no -þ in the 3rd person), and a new <b>weak past</b> with -d-/-t-. Many became the English modal verbs.</p>
<div class="tw"><table class="gt pp"><tr><th>Verb</th><th class="t-pres">pres. 1/3sg</th><th class="t-pres">pres. pl.</th><th class="t-past">past 1/3sg</th><th>Meaning</th></tr>
<tr><td>{{cunnan@verb}}</td><td>cann</td><td>cunnon</td><td>cūþe</td><td>know (how to), can</td></tr>
<tr><td>{{magan@verb}}</td><td>mæġ</td><td>magon</td><td>meahte, mehte</td><td>be able, can (→ may, might)</td></tr>
<tr><td>{{mōtan@verb}}</td><td>mōt</td><td>mōton</td><td>mōste</td><td>may, be allowed to (→ must)</td></tr>
<tr><td>{{sċulan@verb}}</td><td>sċeal</td><td>sċulon</td><td>sċeolde</td><td>must, ought to, owe (→ shall, should)</td></tr>
<tr><td>{{witan@verb}}</td><td>wāt</td><td>witon</td><td>wisse, wiste</td><td>know (a fact)</td></tr>
<tr><td>{{durran@verb}}</td><td>dearr</td><td>durron</td><td>dorste</td><td>dare</td></tr>
<tr><td>{{āgan@verb}}</td><td>āh</td><td>āgon</td><td>āhte</td><td>own, possess</td></tr>
<tr><td>{{þurfan@verb}}</td><td>þearf</td><td>þurfon</td><td>þorfte</td><td>need</td></tr></table></div>
<p>Note the 2nd singular: <i>þū canst, meaht, mōst, sċealt, wāst, dearst, āhst, þearft</i>, which is the origin of <i>thou canst, thou shalt</i>.</p>

<h3 id="irr">13. Irregular: bēon/wesan, dōn, gān, willan</h3>
<p>“To be” has two sets of present-tense forms. <b>wesan</b> (eom, eart, is, sind) is the everyday form, while <b>bēon</b> (bēo, bist, biþ, bēoþ) is used for the future and for general truths (“winter <i>biþ</i> cold”). They share one past tense: wæs, wǣre, wǣron.</p>
${VC('wesan')}
${VC('bēon')}
<p>{{dōn@verb|to do}} and {{gān@verb|to go}} are conjugated alike. Note the past of gān, <b>ēode</b>, which comes from a completely different root. {{willan@verb|to want}} has no proper imperative.</p>
${VC('dōn')}${VC('gān')}${VC('willan')}

<h3 id="neg">14. Negative contractions: nis, næs, nolde, nāt</h3>
<p>The negative particle <b>ne</b> (“not”) merges with a following verb that starts with a vowel, <i>h</i> or <i>w</i>:</p>
<table class="gt"><tr><th>Contraction</th><th>= ne + …</th><th>Meaning</th></tr>
<tr><td>{{nis@verb}}</td><td>ne + is</td><td>is not</td></tr>
<tr><td>{{næs@verb}}</td><td>ne + wæs (past of {{nesan@verb}} = ne + wesan)</td><td>was not</td></tr>
<tr><td>{{nolde@verb}}</td><td>ne + wolde (past of {{nyllan@verb}} = ne + willan)</td><td>did not want, would not</td></tr>
<tr><td>{{nāt@verb}}</td><td>ne + wāt (present of {{nytan@verb}} = ne + witan)</td><td>does not know</td></tr>
<tr><td>{{nyste@verb}}</td><td>ne + wiste</td><td>did not know</td></tr></table>


<h3 id="practice">15. Practice passage</h3>
<p>A short passage <b>written for this guide</b> (not a historical text). For each verb, decide: strong or weak? Which tense, person and mood?</p>
<div class="passage"><p>Sē cyning rād tō þǣre burg. Hē hæfde mid him his sweord. Þā menn sungon and druncon. Hē cwæþ: “Iċ wāt þæt ġē mē lufiaþ.” Hīe ne cūþon nān andswaru; hīe nyston hwæt hīe seċġan sċeoldon. Sē cyning nolde leng wunian; hē fōr hām.</p></div>
<div class="quiz"><details><summary>Show verb-by-verb analysis</summary>
${IL([['rād','rīdan@verb','rode','past 3sg'],['hæfde','habban@verb','had','past 3sg'],['sungon','singan@verb','sang','past pl'],['druncon','drincan@verb','drank','past pl'],['cwæþ','cweþan@verb','said','past 3sg']],'rād: strong class 1 (rīdan, rād, ridon, riden). hæfde: weak class 3. sungon, druncon: strong class 3, plural uses the 2nd past stem. cwæþ: strong class 5.')}
${IL([['wāt','witan@verb','know','pres 1sg'],['lufiaþ','lufian@verb','love','pres pl'],['cūþon','cunnan@verb','knew','past pl'],['nyston','nytan@verb','did not know','past pl']],'wāt, cūþon: preterite-presents. lufiaþ: weak class 2 plural. nyston: ne + wiston.')}
${IL([['seċġan','seċġan@verb','say','inf'],['sċeoldon','sċulan@verb','should','past pl'],['nolde','nyllan@verb','did not want','past 3sg'],['wunian','wunian@verb','stay','inf'],['fōr','faran@verb','went','past 3sg']],'seċġan, wunian: infinitives after a modal. nolde: ne + wolde. fōr: strong class 6.')}
<p>Translation: “The king rode to the town. He had his sword with him. The people sang and drank. He said: ‘I know that you love me.’ They knew no answer; they did not know what they should say. The king did not want to stay longer; he went home.”</p></details></div>

<h3 id="quiz">16. Quick self-check</h3>
<div class="quiz">
<details><summary>1. How many tenses does an Old English verb have, and how is the future expressed?</summary>Two (present and past). The future uses the present tense, bēon, or willan (“will, intend”).</details>
<details><summary>2. Is <b>lufode</b> strong or weak? What class?</summary>Weak: past in <b>-ode</b>, class 2 (lufian).</details>
<details><summary>3. Give the four principal parts of <b>rīdan</b>.</summary>rīdan – rād – ridon – riden (class 1).</details>
<details><summary>4. Why is it <i>hē sang</i> but <i>wē sungon</i>?</summary>Strong verbs have two past stems: the first for 1st/3rd singular, the second for 2nd singular and all plurals.</details>
<details><summary>5. Which class: <b>beran – bær – bǣron – boren</b>?</summary>Class 4 (e + r/l).</details>
<details><summary>6. What does <b>tō singenne</b> mean, and what form is it?</summary>“To sing / for singing”, the inflected infinitive (tō + -enne).</details>
<details><summary>7. Why does <b>wesan</b> have past plural <b>wǣron</b> with an r?</summary>Verner’s law: s and r alternate (the same pattern as was/were). Similarly ċēosan – ċēas – curon – coren.</details>
<details><summary>8. What is odd about <b>iċ cann</b> / <b>hē cann</b>?</summary>It is a preterite-present. The present looks like a strong past, and there is no -þ in the 3rd person.</details>
<details><summary>9. Expand <b>nis</b>, <b>næs</b> and <b>nolde</b>.</summary>ne is (“is not”), ne wæs (“was not”), ne wolde (“did not want”).</details>
<details><summary>10. Which “be” would you use for a general truth or the future?</summary><b>bēon</b>: biþ, bēoþ.</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_grammar">Old English grammar</a>”, section Verbs: strong verbs (class descriptions, stem-vowel table, the <i>stelan</i> paradigm and the two past stems), weak verbs classes I–III (dǣlan, temman, styrian, lufian, and the habban/libban/seċġan/hyċġan table), preterite-present verbs and anomalous verbs (bēon/wesan, dōn, gān, willan, and the wesan vs bēon difference). Consulted October 2026.</li>
<li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Verner%27s_law">Verner’s law</a>”, on Proto-Germanic <i>z</i> becoming <i>r</i> in West Germanic.</li>
<li>Wiktionary (English edition), the Old English entries and conjugation tables for every linked verb (via the Wiktextract/kaikki.org data, CC BY-SA 4.0). This includes the senses of willan (future use) and sċulan, the prefix ġe-, and the contractions nis, næs/nesan, nolde/nyllan and nāt/nytan. All conjugation tables on this page are generated from these data, and the hand-written tables were checked against them.</li></ul>
<p class="note">Forms are standard late West Saxon as given in modern dictionaries; manuscripts vary. The data tables come from Wiktionary’s conjugation templates. For a few verbs Wiktionary lists alternatives (e.g. hātan: hēt/hēht), so check the full entry.</p>`;
