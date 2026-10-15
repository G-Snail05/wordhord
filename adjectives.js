// Guide 5: Adjectives. Full declension tables are generated live from the dictionary data (div.ac);
// hand-written tables follow Wikipedia "Old English grammar" (Adjectives) and were checked against the data.
const AC=(w,p)=>`<div class="ac" data-w="${w}"${p?` data-p="${p}"`:''}>Loading declension of ${w}…</div>`;
const CMP=(rows,h)=>`<div class="tw"><table class="gt pp"><tr><th>${h||'Positive'}</th><th>Comparative (-ra)</th><th>Superlative (-ost/-est)</th><th>Modern English</th></tr>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]||''}</td></tr>`).join('')}</table></div>`;
const GA=()=>`
<p class="lead">An Old English adjective changes its ending to match the noun it describes in <b>case</b>, <b>number</b> and <b>gender</b>. Each adjective also has <b>two sets of endings</b>: the <b>strong</b> set is used when the adjective stands alone with its noun (<i>gōd cyning</i> “a good king”), and the <b>weak</b> set is used after “the”, “this” or “my” (<i>sē gōda cyning</i> “the good king”). Tables use the dictionary colours: rows for <span class="c-nom"><b>nominative</b></span>, <span class="c-acc"><b>accusative</b></span>, <span class="c-gen"><b>genitive</b></span>, <span class="c-dat"><b>dative</b></span> and <span class="c-ins"><b>instrumental</b></span>, and columns for <span style="color:var(--masc)"><b>masculine</b></span>, <span style="color:var(--fem)"><b>feminine</b></span> and <span style="color:var(--neut)"><b>neuter</b></span>.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/adjectives/agree">Agreement: one adjective, eleven forms</a></li><li><a href="#grammar/adjectives/sw">Strong or weak? When to use each</a></li><li><a href="#grammar/adjectives/glance">The endings at a glance</a></li><li><a href="#grammar/adjectives/god">Full tables: gōd</a></li><li><a href="#grammar/adjectives/short">Short stems and sound changes: til, glæd, lȳtel</a></li>
<li><a href="#grammar/adjectives/comp">Comparison: -ra and -ost</a></li><li><a href="#grammar/adjectives/irr">Irregular comparison: gōd, betera, betst</a></li><li><a href="#grammar/adjectives/adv">Adverbs: -e and -līċe</a></li><li><a href="#grammar/adjectives/num">Numerals: ān, twēġen, þrī…</a></li><li><a href="#grammar/adjectives/ord">Ordinals: forma, ōþer, þridda…</a></li><li><a href="#grammar/adjectives/ptc">Participles as adjectives</a></li>
<li><a href="#grammar/adjectives/practice">Practice passage</a></li><li><a href="#grammar/adjectives/quiz">Quick self-check</a></li><li><a href="#grammar/adjectives/sources">Sources</a></li></ol></div>

<h3 id="agree">1. Agreement: one adjective, eleven forms</h3>
<p>Adjectives agree with their noun in case, number and gender, just like the article {{sē@arti|the}}. Take {{cwic@adj|alive}}. Counting both sets of endings, it has eleven different forms: <i>cwic, cwic<b>u</b>, cwic<b>ne</b>, cwic<b>e</b>, cwic<b>es</b>, cwic<b>re</b>, cwic<b>um</b>, cwic<b>a</b>, cwic<b>ra</b>, cwic<b>an</b>, cwic<b>ena</b></i>.</p>
${IL([['gōd','gōd@adj','good','nom masc'],['cyning','cyning','king','nom masc']],'a good king (Beowulf line 11: þæt wæs gōd cyning!)')}
${IL([['gōdne','gōd@adj','good','acc masc'],['cyning','cyning','king','acc masc']],'a good king (as object)')}
${IL([['gōdre','gōd@adj','good','dat fem'],['cwēne','cwēn','queen','dat fem']],'to a good queen')}
${IL([['gōdum','gōd@adj','good','dat pl'],['mannum','mann','people','dat pl']],'to good people')}
<p class="note">Agreement is more important than position. An adjective can follow its noun, or even come after the verb (<i>sē cyning wæs gōd</i>), but its ending still tells you which noun it belongs to.</p>

<h3 id="sw">2. Strong or weak? When to use each</h3>
<ul class="pit"><li><b>Weak</b> after a word for “the/that” ({{sē@arti}}, {{sēo@arti}}, {{þæt@arti}}), “this” ({{þēs@pron,det}}) and possessives like {{mīn@det|my}}, {{þīn@det|your}} or {{his@pron|his}}: <i>sē cwic<b>a</b> þrōwend</i> “the live scorpion”.</li>
<li><b>Strong</b> everywhere else, i.e. with no determiner: <i>cwic þrōwend</i> “a live scorpion” ({{þrōwend|scorpion}}). Old English has no word for “a”.</li>
<li><b>Weak</b> when addressing someone: <i>Ēalā fæġer<b>e</b> mæġden</i> “Hey, beautiful girl” ({{fæġer@adj|beautiful}}, {{mæġden|girl}}).</li>
<li><b>Comparatives</b> and <b>ordinal numbers</b> are always weak, wherever they stand. The big exception is {{ōþer@adj|other, second}}, which is always strong. Of the words for “first”, {{forma@adj}} and {{ǣrra@adj}} are always weak, while {{ǣrest@adj}} and {{fyrest@adj}} can be either.</li>
<li>{{āgen@adj|own}} is usually strong in the phrase “one’s own”: <i>on hire <b>āgnum</b> horse</i> “on her own horse”.</li></ul>
${IL([['Sē','sē','the','nom masc'],['gōda','gōd@adj','good (weak)','nom masc'],['cyning','cyning','king','nom masc']],'the good king')}
${IL([['Mīn','mīn@det','my','nom masc'],['lēofa','lēof@adj','dear (weak)','nom masc'],['sunu','sunu','son','nom masc']],'my dear son')}
${IL([['þæs','sē','the','gen masc'],['gōdan','gōd@adj','good (weak)','gen masc'],['cyninges','cyning','king’s','gen masc']],'of the good king')}

<h3 id="glance">3. The endings at a glance</h3>
<p>By Old English times almost all adjectives take the same endings. Here they are on {{cwic@adj}}, following the Wikipedia tables (the endings are in bold):</p>
<div class="tw"><table class="gt par"><caption>Strong declension</caption><tr><th></th><th style="color:var(--masc)">masc. sg</th><th style="color:var(--fem)">fem. sg</th><th style="color:var(--neut)">neut. sg</th><th style="color:var(--masc)">masc. pl</th><th style="color:var(--fem)">fem. pl</th><th style="color:var(--neut)">neut. pl</th></tr>
${RW('nom','Nominative',['cwic','cwic<b>u</b>','cwic','cwic<b>e</b>','cwic<b>a</b>','cwic<b>u</b>'])}${RW('acc','Accusative',['cwic<b>ne</b>','cwic<b>e</b>','cwic','cwic<b>e</b>','cwic<b>a</b>, -<b>e</b>','cwic<b>u</b>'])}
${RW('gen','Genitive',['cwic<b>es</b>','cwic<b>re</b>','cwic<b>es</b>','cwic<b>ra</b>','cwic<b>ra</b>','cwic<b>ra</b>'])}${RW('dat','Dative',['cwic<b>um</b>','cwic<b>re</b>','cwic<b>um</b>','cwic<b>um</b>','cwic<b>um</b>','cwic<b>um</b>'])}${RW('ins','Instrumental',['cwic<b>e</b>','cwic<b>re</b>','cwic<b>e</b>','cwic<b>um</b>','cwic<b>um</b>','cwic<b>um</b>'])}</table></div>
<div class="tw"><table class="gt par"><caption>Weak declension</caption><tr><th></th><th style="color:var(--masc)">masc. sg</th><th style="color:var(--fem)">fem. sg</th><th style="color:var(--neut)">neut. sg</th><th>plural (all)</th></tr>
${RW('nom','Nominative',['cwic<b>a</b>','cwic<b>e</b>','cwic<b>e</b>','cwic<b>an</b>'])}${RW('acc','Accusative',['cwic<b>an</b>','cwic<b>an</b>','cwic<b>e</b>','cwic<b>an</b>'])}${RW('gen','Genitive',['cwic<b>an</b>','cwic<b>an</b>','cwic<b>an</b>','cwic<b>ena</b> (or -<b>ra</b>)'])}${RW('dat','Dative / instr.',['cwic<b>an</b>','cwic<b>an</b>','cwic<b>an</b>','cwic<b>um</b>'])}</table></div>
<p class="note"><b>Tip.</b> Several strong endings look like the endings of the article <i>sē</i>: <i>-ne</i> matches <i>þone</i>, <i>-re</i> matches <i>þǣre</i>, <i>-um</i> matches <i>þǣm</i> and <i>-ra</i> matches <i>þāra</i>. The weak endings are nearly all <b>-an</b>, like weak nouns such as {{nama|name}}.</p>

<h3 id="god">4. Full tables: gōd</h3>
<p>The tables below are built straight from the dictionary data. The data lists the strong forms first and then the weak forms, and every adjective entry in Wordhord now shows them as two tables, as here.</p>
${AC('gōd')}
<p>Notice that <i>gōd</i> has no <i>-u</i> in the feminine nominative singular or neuter plural (<i>gōd cwēn, gōd wīf</i>). That is because its syllable is “heavy” (a long vowel). The next section explains.</p>

<h3 id="short">5. Short stems and sound changes: til, glæd, lȳtel</h3>
<ul class="pit"><li><b>-u after a light syllable.</b> “Light” adjectives (a short vowel followed by a single consonant) keep the ending <b>-u</b> in the feminine nominative singular and the neuter nominative/accusative plural. “Heavy” ones like <i>gōd</i> lost it. Compare {{til@adj|good, useful}}: <i>til<b>u</b></i>. Adjectives in <i>-iġ</i> and <i>-līċ</i> got the <i>-u</i> back (<i>broðorlīcu lufu</i> “brotherly love”), and adjectives in <i>-e</i> like {{blīþe@adj|happy}} always have it (<i>blīþu ċildru</i> “happy children”).</li>
<li><b>æ → a.</b> Short <i>æ</i> before a single consonant becomes <i>a</i> when the ending starts with a vowel: {{glæd@adj|glad}}, plural <i>glade</i>, but masculine accusative <i>glædne</i>.</li>
<li><b>Losing a middle vowel.</b> {{lȳtel@adj|little}} → feminine plural <i>lȳtla</i>, feminine singular <i>lȳtlu</i>.</li>
<li><b>-h disappears:</b> {{hēah@adj|high}} → <i>hēane</i> (acc. masc.), <i>hēam</i> (dat.), <i>hēa</i> (nom. pl.).</li>
<li><b>-u becomes -w- before a vowel:</b> {{ġearu@adj|ready}} → <i>ġearwe</i> (nom. pl. masc.), but <i>ġearone</i> (acc. masc.).</li>
<li><b>-e drops before endings:</b> {{blīþe@adj}} → <i>blīþne</i>.</li></ul>
${AC('til')}
${AC('glæd')}

<h3 id="comp">6. Comparison: -ra and -ost</h3>
<p>Old English never says “more beautiful”. It always uses endings, <b>-ra</b> for the comparative and <b>-ost</b> (sometimes <b>-est</b>) for the superlative, the ancestors of our <i>-er</i> and <i>-est</i>. Comparatives always take <b>weak</b> endings, so <i>-ra</i> is really the weak masculine nominative; you will also meet <i>-re</i> and <i>-ran</i>.</p>
${CMP([['{{fæġer@adj|beautiful}}','{{fæġerra@adj}}','{{fæġerost@adj}}','fairer, fairest'],['{{beorht@adj|bright}}','beorhtra','{{beorhtost@adj}}','brighter, brightest'],['{{dēop@adj|deep}}','dēopra','dēopost','deeper, deepest'],['{{heard@adj|hard}}','heardra','heardost, heardest','harder, hardest'],['{{wīs@adj|wise}}','wīsra','wīsest','wiser, wisest'],['{{lēof@adj|dear}}','lēofra','lēofost, lēofest','dearer, dearest'],['{{glæd@adj|glad}}','glædra','gladost','gladder, gladdest']])}
<p>A few adjectives also change their vowel (<b>i-mutation</b>) in the comparative and superlative. The modern <i>old/elder/eldest</i> keeps the pattern:</p>
${CMP([['{{eald@adj|old}}','{{ieldra@adj}}','{{ieldest@adj}}','elder, eldest'],['{{ġeong@adj|young}}','{{ġingra@adj}}','ġinġest','younger'],['{{strang@adj|strong}}','{{strengra@adj}}','{{strenġest@adj}}','stronger, strongest'],['{{lang@adj|long}}','lengra','{{lenġest@adj}}','longer, longest'],['{{sċort@adj|short}}','{{sċyrtra@adj}}','sċyrtest','shorter'],['{{hēah@adj|high}}','{{hīerra@adj}} (Wikipedia: hīera)','{{hīehst@adj}}','higher, highest']])}
<p>For participles, Old English could use “more” and “most”: {{swīþor@adv|more}} and {{swīþost@adv|most}} with <i>ġelufod</i> give <i>swīþor ġelufod</i> “more loved” and <i>swīþost ġelufod</i> “most loved”. {{mā@adv|more}} and {{mǣst@adj|most}} were used the same way.</p>

<h3 id="irr">7. Irregular comparison: gōd, betera, betst</h3>
<p>Four very common adjectives use a completely different word for the comparative and superlative (<b>suppletion</b>), just as English still does:</p>
${CMP([['{{gōd@adj|good}}','{{betera@adj}} (also {{sēlra@adj}})','{{betest@adj}}, {{betst@adj}} (also sēlest)','better, best'],['{{yfel@adj|bad}}','{{wiersa@adj}}','{{wierrest@adj}}','worse, worst'],['{{miċel@adj|big, much}}','{{māra@adj}}','{{mǣst@adj}}','more, most'],['{{lȳtel@adj|little}}','{{lǣssa@adj}}','{{lǣst@adj}}, {{lǣsest@adj}}','less, least']],'Positive')}
<p class="note">The superlative of <i>yfel</i> is <b>wierrest</b> (the form <i>wierst</i> in this dictionary is a verb form of <i>weorþan</i>). Wiktionary also gives <i>sēlra/sēlest</i> as comparative and superlative of <i>gōd</i>. <i>Betera</i> is weak only, like every comparative; its table is in its {{betera@adj|entry}}.</p>

<h3 id="adv">8. Adverbs: -e and -līċe</h3>
<p>Most adverbs are made from adjectives with the suffix {{-e@suff|forming adverbs from adjectives}}. This is not the same <i>-e</i> as the case ending, although the two look alike. A second suffix, {{-līċe@suff|-ly}}, became our <i>-ly</i>:</p>
<div class="tw"><table class="gt"><tr><th>Adjective</th><th>Adverb</th><th>Meaning</th></tr>
<tr><td>{{heard@adj|hard}}</td><td>{{hearde@adv}}</td><td>severely, very much</td></tr>
<tr><td>{{wīd@adj|wide}}</td><td>{{wīde@adv}}</td><td>widely, far and wide</td></tr>
<tr><td>{{lang@adj|long}}</td><td>{{lange@adv}}</td><td>for a long time</td></tr>
<tr><td>{{sōþ@adj|true}}</td><td>{{sōþlīċe@adv}}</td><td>truly</td></tr>
<tr><td>{{wīs@adj|wise}}</td><td>{{wīslīċe@adv}}</td><td>wisely</td></tr>
<tr><td>{{glæd@adj|glad}}</td><td>{{glædlīċe@adv}}</td><td>gladly</td></tr>
<tr><td>{{hræd@adj|quick}}</td><td>{{hrædlīċe@adv}}</td><td>quickly</td></tr>
<tr><td>{{gōd@adj|good}}</td><td>{{wel@adv}}</td><td>well (a different word, as in English)</td></tr></table></div>
<p>Adverbs compare with <b>-or</b> and <b>-ost</b>, again with a few irregular ones:</p>
${CMP([['{{hearde@adv}}','heardor','heardost'],['{{swīþe@adv|very}}','{{swīþor@adv}}','{{swīþost@adv}}','(rather, especially)'],['{{lange@adv}}','lenġ','{{lenġest@adv}}','longer, longest'],['{{wel@adv}}','{{bet@adv}}','betest','better, best'],['{{yfele@adv|badly}}','{{wiers@adv}}','{{wierrest@adv}}','worse, worst']],'Adverb')}

<h3 id="num">9. Numerals: ān, twēġen, þrī…</h3>
<p>The numbers <b>one to three</b> decline. {{ān@num|one}} takes strong adjective endings:</p>
${AC('ān','num')}
<p>{{twēġen@num|two}} and {{bēġen@det|both}} share the same pattern. Note the separate masculine, feminine and neuter forms (<i>twēġen</i> / <i>twā</i> / <i>tū, twā</i>):</p>
${AC('twēġen','num')}${AC('bēġen','det')}
${AC('þrī','num')}
<p>From four upwards the cardinal numbers are listed below. Numbers from 13 to 19 add <b>-tīene</b>, and the tens add <b>-tiġ</b>. From 70 to 120 the tens take an extra <b>hund-</b> at the front. In compound numbers the units come first, joined with <i>and</i>: {{ān and twēntiġ@num|twenty-one}}.</p>
<div class="tw"><table class="gt"><tr><th>1–12</th><th>13–19</th><th>Tens</th><th>70–120</th></tr>
<tr><td>{{ān@num}} 1, {{twēġen@num}} 2, {{þrī@num}} 3, {{fēower@num}} 4, {{fīf@num}} 5, {{six@num}} 6, {{seofon@num}} 7, {{eahta@num}} 8, {{nigon@num}} 9, {{tīen@num}} 10, {{endleofan@num}} 11, {{twelf@num}} 12</td>
<td>{{þrēotīene@num}} 13, {{fēowertīene@num}} 14, {{fīftīene@num}} 15 …</td>
<td>{{twēntiġ@num}} 20, {{þrītiġ@num}} 30, {{fēowertiġ@num}} 40, {{fīftiġ@num}} 50, {{sixtiġ@num}} 60</td>
<td>{{hundseofontiġ@num}} 70, {{hundeahtatiġ@num}} 80, {{hundnigontiġ@num}} 90, {{hundtēontiġ@num}} 100 (also {{hund@noun|hundred}}, {{hundred@num}}), {{hundtwelftiġ@num}} 120</td></tr></table></div>

<h3 id="ord">10. Ordinals: forma, ōþer, þridda…</h3>
<p>Ordinals are adjectives that take <b>weak</b> endings, except <i>ōþer</i>, which is always strong:</p>
<div class="tw"><table class="gt"><tr><th>1st–6th</th><th>7th–12th</th></tr>
<tr><td>{{forma@adj|first}} (also {{ǣrest@adj}}, {{fyrest@adj}}), {{ōþer@adj|second, other}}, {{þridda@adj|third}}, {{fēorþa@adj|fourth}}, {{fīfta@adj|fifth}}, {{sixta@adj|sixth}}</td><td>{{seofoþa@adj|seventh}}, {{eahtoþa@adj|eighth}}, {{nigoþa@adj|ninth}}, {{tēoþa@adj|tenth}}, {{endlefta@adj|eleventh}}, {{twelfta@adj|twelfth}}</td></tr></table></div>
${AC('tēoþa')}

<h3 id="ptc">11. Participles as adjectives</h3>
<p>Both participles can be used like adjectives, and they sometimes agree with their noun in case, number and gender:</p>
<ul class="pit"><li><b>Present participle -ende</b> ({{-ende@suff|-ing}}): <i>{{singende@verb}}</i> “singing”, <i>{{lufiende@verb}}</i> “loving”.</li>
<li><b>Past participle</b> (ġe-)…-en / -ed: <i>{{ġebunden@verb}}</i> “bound”, <i>{{ġecoren@verb}}</i> “chosen”, <i>{{ġelufod@verb}}</i> “loved”.</li>
<li>Participles compare with <i>swīþor/swīþost</i>, as above.</li></ul>
<p>Some old present participles became nouns ending in <b>-end</b>, meaning “one who does”. They still take some adjective endings in the plural, e.g. genitive plural <b>-ra</b>: {{wealdend|ruler}}, {{sċieppend|creator}}, {{frēond|friend}} (originally “one who loves”), {{fēond|enemy}} (“one who hates”), {{ymbsittend|neighbour}}. In <i>Beowulf</i> line 9, <i>ymb-sittend<b>ra</b></i> means “of the neighbouring peoples”.</p>

<h3 id="practice">12. Practice passage</h3>
<p>A short passage <b>written for this guide</b> (not a historical text). For each adjective, decide: strong or weak? Which case, number and gender? Is it a comparative?</p>
<div class="passage"><p>Sum eald cyning hæfde twēġen suna. Sē ieldra sunu wæs strang and hēah; sē ġingra wæs lȳtel, ac hē wæs wīsra þonne his brōþor. Þā cwæþ sē ealda cyning: “Mīn lēofa sunu, sē strengra mann nis ā sē betera.” Sē ġingra sunu hēold þæt rīċe wīslīċe and lange, and þā gōdan menn lufodon hine swīþe.</p></div>
<div class="quiz"><details><summary>Show word-by-word analysis</summary>
${IL([['Sum','sum@pron','a certain','nom masc'],['eald','eald@adj','old (strong)','nom masc'],['cyning','cyning','king','nom masc'],['hæfde','habban@verb','had',''],['twēġen','twēġen@num','two','acc masc'],['suna','sunu','sons','acc pl']],'A certain old king had two sons. (eald is strong: there is no sē/þes/possessive before it.)')}
${IL([['Sē','sē','the','nom masc'],['ieldra','eald@adj','older (comparative)','nom masc'],['sunu','sunu','son','nom masc'],['wæs','wesan@verb','was',''],['strang','strang@adj','strong','nom masc'],['hēah','hēah@adj','tall','nom masc']],'The elder son was strong and tall. (ieldra: comparative with i-mutation, weak. strang, hēah: strong, after the verb.)')}
${IL([['sē','sē','the','nom masc'],['ġingra','ġeong@adj','younger','nom masc'],['wæs','wesan@verb','was',''],['lȳtel','lȳtel@adj','small','nom masc'],['wīsra','wīs@adj','wiser','nom masc'],['þonne','þonne@conj','than',''],['brōþor','brōþor','brother','nom masc']],'the younger was small, but he was wiser than his brother.')}
${IL([['sē','sē','the','nom masc'],['ealda','eald@adj','old (weak)','nom masc'],['Mīn','mīn@det','my',''],['lēofa','lēof@adj','dear (weak)','nom masc'],['strengra','strang@adj','stronger','nom masc'],['betera','gōd@adj','better','nom masc']],'the old king: “My dear son, the stronger man is not always the better.” (ealda, lēofa: weak after sē / mīn. strengra, betera: comparatives, always weak.)')}
${IL([['wīslīċe','wīslīċe@adv','wisely',''],['lange','lange@adv','for a long time',''],['þā','sē','the','nom pl'],['gōdan','gōd@adj','good (weak)','nom pl'],['menn','mann','men','nom pl'],['swīþe','swīþe@adv','very much','']],'The younger son held the kingdom wisely and long, and the good people loved him greatly.')}
</details></div>

<h3 id="quiz">13. Quick self-check</h3>
<div class="quiz">
<details><summary>1. Strong or weak: <i>sē gōda cyning</i>? Why?</summary>Weak, because it comes after the article <i>sē</i>.</details>
<details><summary>2. Give the strong masculine accusative singular of <b>gōd</b>.</summary><b>gōdne</b> (compare þone): <i>iċ seah gōdne cyning</i>.</details>
<details><summary>3. Which declension do comparatives and ordinals use?</summary>Always the weak one. The exception is <i>ōþer</i>, which is always strong.</details>
<details><summary>4. Why is it <i>tilu</i> but not <i>*gōdu</i>?</summary><i>til</i> has a light syllable (short vowel and one consonant), so it keeps the <i>-u</i>. <i>gōd</i> is heavy and lost it.</details>
<details><summary>5. Give the comparative and superlative of <b>eald</b>, and say what changed.</summary><b>ieldra, ieldest</b>. The vowel changed through i-mutation (compare <i>elder, eldest</i>).</details>
<details><summary>6. Match: betera, wiersa, māra, lǣssa → positive?</summary>gōd, yfel, miċel, lȳtel.</details>
<details><summary>7. What is the superlative of <b>yfel</b>?</summary><b>wierrest</b> “worst”.</details>
<details><summary>8. Make adverbs from <b>sōþ</b> and <b>heard</b>.</summary><b>sōþlīċe</b> “truly” and <b>hearde</b> “severely”.</details>
<details><summary>9. What are the nominative forms of “two” for each gender?</summary><b>twēġen</b> (masc.), <b>twā</b> (fem.), <b>tū</b> or <b>twā</b> (neut.).</details>
<details><summary>10. How do you say 21?</summary><b>ān and twēntiġ</b>, “one and twenty”.</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_grammar">Old English grammar</a>”, sections Adjectives (strong and weak declension of <i>cwic</i>, when each is used, irregularities, degree) and nd-stems (on the <i>-end</i> nouns). The lead section notes that participles “sometimes” agree. Consulted October 2026.</li>
<li>Wiktionary (English edition), via the Wiktextract/kaikki.org data (CC BY-SA 4.0): the declension tables, comparatives and superlatives of every linked adjective, the numerals and ordinals, and the suffixes <i>-e</i> (“forming adverbs from adjectives”), <i>-līċe</i> and <i>-ende</i>. All live tables on this page come from these data, and the forms in the hand-written tables and the passage were checked against them.</li></ul>
<p class="note">The data does not label strong and weak forms. Wordhord splits them by the order of the Wiktionary declension table (strong first, then weak). Where Wiktionary and Wikipedia differ (<i>hīerra</i>/<i>hīera</i>; <i>lǣst</i>/<i>lǣsest</i>), both are shown.</p>`;
