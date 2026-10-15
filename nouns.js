// Guide 2: Nouns, Cases & Gender. Paradigms checked against Wiktionary data (kaikki) and Wikipedia "Old English grammar".
// P(caption, [[lemma, gloss, gender, [Nsg,Asg,Gsg,Dsg], [Npl,Apl,Gpl,Dpl]], ...]); "stem|ending" bolds the ending.
function P(cap,cols){const b=f=>f.split('/').map(x=>x.includes('|')?x.replace(/\|(.*)$/,'<b>$1</b>'):x).join(', ');
 const R=['Nominative','Accusative','Genitive','Dative'],RC=['nom','acc','gen','dat'];
 return `<div class="tw"><table class="gt par"><caption>${cap}</caption><tr><th></th>${cols.map(c=>`<th colspan="2">{{${c[0]}|${c[1]}}}<div class="gd">${c[2]}</div></th>`).join('')}</tr>
 <tr><th></th>${cols.map(()=>'<th>Singular</th><th>Plural</th>').join('')}</tr>${R.map((r,i)=>`<tr class="r-${RC[i]}"><th class="c-${RC[i]}">${r}</th>${cols.map(c=>`<td>${b(c[3][i])}</td><td>${b(c[4][i])}</td>`).join('')}</tr>`).join('')}</table></div>`}
// interlinear gloss: [[oe, lemma or '', gloss, case-tag], ...]
function IL(words,tr){return `<div class="il">${words.map(([oe,lem,gl,tag])=>`<div class="ilw"><span class="oe">${oe}</span>${lem?`<a class="exw mini" data-w="${lem.split('@')[0]}" data-p="${/^(sē|sēo|þæt|þā|þone|þæs|þǣre|þām|þāra|þȳ|þon|ġē|ēow|man|hwæt|hwā|mīn|þīn|his|þēs|hē|hēo|wē|iċ|wit|þe)$/.test(lem)?'pron,det,arti,part':''}" href="#dict"><span class="rune">${rs(lem)}</span></a>`:''}<span class="ilg">${gl}</span>${tag?`<span class="ilt ${tag.split(' ')[0]}">${tag}</span>`:''}</div>`).join('')}</div><p class="ilx">“${tr}”</p>`}
const GN=()=>`
<p class="lead">In modern English, word order tells you who did what: <i>the dog bit the man</i> and <i>the man bit the dog</i> mean different things. Old English shows this mainly with the <b>endings</b> of words, and with the form of the word for “the”. Once you can read those endings, sentences that look jumbled start to make sense. This guide explains <b>case</b>, <b>gender</b> and the main noun patterns, all with real words from the dictionary.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/nouns/case">What is case?</a></li><li><a href="#grammar/nouns/four">The four cases (and the instrumental)</a></li><li><a href="#grammar/nouns/gender">Grammatical gender</a></li><li><a href="#grammar/nouns/guess">Guessing a noun’s gender</a></li>
<li><a href="#grammar/nouns/article">The word for “the”: sē, sēo, þæt</a></li><li><a href="#grammar/nouns/strongweak">Strong and weak nouns</a></li><li><a href="#grammar/nouns/masc">Strong masculine: stān</a></li><li><a href="#grammar/nouns/neut">Strong neuter: sċip, word, hūs</a></li>
<li><a href="#grammar/nouns/fem">Strong feminine: ġiefu, lār</a></li><li><a href="#grammar/nouns/weak">Weak nouns: guma, tunge, ēage</a></li><li><a href="#grammar/nouns/mutation">Vowel-change plurals: mann/menn, fōt/fēt</a></li><li><a href="#grammar/nouns/rstems">Family words: fæder, mōdor…</a></li>
<li><a href="#grammar/nouns/ustems">u-stems: sunu, duru</a></li><li><a href="#grammar/nouns/cheat">Ending cheat-sheet</a></li><li><a href="#grammar/nouns/order">Word order: reading by endings</a></li><li><a href="#grammar/nouns/practice">Practice passage</a></li><li><a href="#grammar/nouns/quiz">Quick self-check</a></li><li><a href="#grammar/nouns/sources">Sources</a></li></ol></div>

<h3 id="case">1. What is case?</h3>
<p><b>Case</b> means changing the form of a word to show its job in the sentence: whether it is doing the action, receiving it, owning something, or being given something. Modern English has almost lost case, but you already use its leftovers every day:</p>
<table class="gt"><tr><th>Modern English</th><th>Old English source</th><th>What survived</th></tr>
<tr><td><b>he</b> / <b>him</b> / <b>his</b></td><td>{{hē|he}} / {{him|to him}} / {{his|his}}</td><td>Subject <i>he</i>, object <i>him</i>, possessive <i>his</i>. This is a full case system in miniature.</td></tr>
<tr><td><b>who</b> / <b>whom</b> / <b>whose</b></td><td>{{hwā|who}} / {{hwām|to whom}} / {{hwæs|whose}}</td><td><i>whom</i> comes from the Old English <b>dative</b> hwām. The old accusative, {{hwone|whom (acc.)}}, has not survived.</td></tr>
<tr><td>the king<b>’s</b> son</td><td>cyning<b>es</b> sunu</td><td>The possessive <b>’s</b> is the Old English genitive ending <b>-es</b> (the apostrophe was added much later).</td></tr>
<tr><td><b>why</b>; “<b>the</b> more <b>the</b> merrier”</td><td>{{hwȳ|why}}, {{þȳ|by that}}</td><td>Fossils of the <b>instrumental</b> case of <i>who</i> and <i>that</i>.</td></tr></table>
<p>In Old English, every noun, adjective and pronoun, and the word for “the”, changes like <i>he/him/his</i>. (Full pronoun tables are in the <a href="#grammar/pronouns">Pronouns guide</a>.)</p>

<h3 id="four">2. The four cases (and the instrumental)</h3>
<table class="gt"><tr><th>Case</th><th>Job</th><th>Modern clue</th><th>Example</th></tr>
<tr><td><b class="c-nom">Nominative</b></td><td>The <b>subject</b>: who does the action. Also the word after “to be”, and the form you look up in a dictionary.</td><td><i>He</i> sees…</td><td><b>Sē {{cyning|king}}</b> rīdeþ. “<b>The king</b> rides.”</td></tr>
<tr><td><b class="c-acc">Accusative</b></td><td>The <b>direct object</b>: who or what the action is done to. Also used after some prepositions of motion.</td><td>…sees <i>him</i></td><td>Iċ sēo <b>þone {{cyning}}</b>. “I see <b>the king</b>.”</td></tr>
<tr><td><b class="c-gen">Genitive</b></td><td><b>Possession</b>, “of”: whose something is, or a part of what.</td><td><i>his</i>, <i>the king’s</i>, <i>of the king</i></td><td><b>þæs cyning<u>es</u></b> {{sweord|sword}}. “<b>the king’s</b> sword”</td></tr>
<tr><td><b class="c-dat">Dative</b></td><td>The <b>indirect object</b>: “to/for” someone. Used after most prepositions (on, tō, mid, of, fram…).</td><td><i>to him</i>, <i>for him</i></td><td>Iċ sealde <b>þām cyning<u>e</u></b> {{gold}}. “I gave gold <b>to the king</b>.”</td></tr>
<tr><td><b class="c-ins">Instrumental</b></td><td>“By means of / with”. In nouns it looks the same as the dative. A separate form survives mainly in the word for “the” and in pronouns (þȳ, þon, hwȳ).</td><td><i>why</i> = “by what”</td><td>{{hwȳ|why}} = “for what reason”</td></tr></table>
<div class="note"><b>How to spot them.</b> 1) Look at the word for “the” (<a href="#grammar/nouns/article">section 5</a>). It is the most reliable signal. 2) Look at the noun’s ending: <b>-um</b> is always dative plural, <b>-a</b> is often genitive plural, and <b>-es</b> is genitive singular (masculine or neuter). 3) Look for a preposition: a noun right after {{tō|to}}, {{mid|with}} or {{on|on, in}} is usually dative (on and in take the accusative when they mean motion “into”).</div>

<h3 id="gender">3. Grammatical gender</h3>
<p>Every Old English noun is <b>masculine</b>, <b>feminine</b> or <b>neuter</b>. This is <b>grammatical gender</b>: a label that controls which endings the noun takes and which forms of “the” and of adjectives go with it. It is <i>not</i> the same as natural sex. Most words for things have a gender too: a stone is masculine, the sun is feminine, a ship is neuter.</p>
<table class="gt"><tr><th>Word</th><th>Meaning</th><th>Gender</th><th>Why surprising</th></tr>
<tr><td>{{wīf}}</td><td>woman, wife</td><td><span class="g n">neuter</span></td><td>a woman, but the word is neuter</td></tr>
<tr><td>{{mæġden}}</td><td>girl, maiden</td><td><span class="g n">neuter</span></td><td>a girl, but the word is neuter</td></tr>
<tr><td>{{wīfmann}}</td><td>woman</td><td><span class="g m">masculine</span></td><td>a compound takes the gender of its last part, {{mann|person}}, which is masculine</td></tr>
<tr><td>{{sunne}}</td><td>sun</td><td><span class="g f">feminine</span></td><td>the sun is “she”</td></tr>
<tr><td>{{mōna}}</td><td>moon</td><td><span class="g m">masculine</span></td><td>the moon is “he”</td></tr>
<tr><td>{{stān}}</td><td>stone</td><td><span class="g m">masculine</span></td><td>an object, but masculine</td></tr>
<tr><td>{{sċip}}</td><td>ship</td><td><span class="g n">neuter</span></td><td>neuter (not “she” as in later English)</td></tr></table>
<p>Most words for people and animals do match their natural sex: {{fæder|father}} and {{cyning|king}} are masculine, while {{mōdor|mother}} and {{cwēn|queen}} are feminine. Words for males only are masculine ({{hana|rooster}}) and words for females only are feminine ({{henn|hen}}). Words that cover both sexes are usually masculine ({{frēond|friend}}, {{fēond|enemy}}).</p>
<p>The pronouns <i>hē</i> and <i>hēo</i> follow grammatical gender, so a masculine thing is “he”: <i>Mē līcaþ sē {{snāw|snow}} for þon þe <b>hē</b> dēþ þā burg stille</i>, “I like the snow because <b>it</b> (lit. <b>he</b>) makes the town quiet.”</p>

<h3 id="guess">4. Guessing a noun’s gender</h3>
<p>The dictionary is the only sure guide, but these patterns help a lot:</p>
<ul class="pit"><li><b>Ends in -a</b> → almost always <span class="g m">masculine</span> (weak): {{guma|man}}, {{mōna|moon}}, {{nama|name}}, {{boga|bow}}.</li>
<li><b>Compounds take the gender of their last element</b>: {{wīfmann}} is masculine like {{mann}}, and {{ealdormann|ealdorman}} is masculine too.</li>
<li><b>Masculine suffixes</b>: -dōm, -hād, -end, -ere, -ling, -sċipe. Examples: {{frēond|friend}} (-end), {{sangere|singer}} (-ere).</li>
<li><b>Feminine suffixes</b>: -ung, -nes, -þu, -estre. Old English {{lār|teaching}} and many abstract nouns are feminine.</li>
<li><b>Ends in -u</b> in the dictionary form → usually a <span class="g f">feminine</span> ({{ġiefu|gift}}) or a u-stem ({{sunu|son}} m., {{duru|door}} f.).</li>
<li><b>Ends in -e</b>: it could be any gender ({{sunne}} f., {{ēage}} n., {{ċiriċe|church}} f.). Look it up.</li>
<li><b>Look at “the”</b>: sē = masculine, sēo = feminine, þæt = neuter (nominative singular).</li></ul>

<h3 id="article">5. The word for “the”: sē, sēo, þæt</h3>
<p>{{sē|the, that}} is both “the” and “that”. Its forms are the best clue to a noun’s case and gender, so learning this table pays off more than anything else in this guide.</p>
<div class="tw"><table class="gt art"><tr><th></th><th>Masculine</th><th>Neuter</th><th>Feminine</th><th>Plural (all)</th></tr>
<tr><th class="c-nom">Nominative</th><td>{{sē}}</td><td>{{þæt}}</td><td>{{sēo}}</td><td>{{þā}}</td></tr>
<tr><th class="c-acc">Accusative</th><td>{{þone}}</td><td>þæt</td><td>þā</td><td>þā</td></tr>
<tr><th class="c-gen">Genitive</th><td>{{þæs}}</td><td>þæs</td><td>{{þǣre}}</td><td>{{þāra}}</td></tr>
<tr><th class="c-dat">Dative</th><td>{{þām}}</td><td>þām</td><td>þǣre</td><td>þām</td></tr>
<tr><th class="c-ins">Instrumental</th><td>{{þȳ}}, {{þon}}</td><td>þȳ, þon</td><td>þǣre</td><td>þām</td></tr></table></div>
<p>Spelling variants are common: <i>þǣm</i> for þām, <i>þǣra</i> for þāra, and <i>se</i> without a macron. Some forms work hard and are ambiguous: <b>þā</b> can be feminine accusative or any plural, and <b>þǣre</b> is feminine genitive or dative. The forms that tell you exactly where you are are <b>sē</b> (masc. nom.), <b>sēo</b> (fem. nom.), <b>þone</b> (masc. acc.) and <b>þāra</b> (gen. pl.).</p>
<div class="note">Old English has no word for “a/an”. <i>cyning</i> on its own can mean “a king” or just “king”. The word {{ān|one}} sometimes means “a certain…”.</div>

<h3 id="strongweak">6. Strong and weak nouns</h3>
<p>Nouns fall into families (“declensions”) that share a set of endings. The two big families are:</p>
<ul><li><b>Strong nouns</b> (a-stems, ō-stems and others) have varied endings: -es, -e, -as, -u, -a, -um.</li>
<li><b>Weak nouns</b> (n-stems) have <b>-an</b> almost everywhere outside the nominative. Think of English <i>ox → oxen</i>, which is a weak plural that survived.</li></ul>
<p>Almost every family has the same <b>dative plural -um</b> and <b>genitive plural -a</b>. Learn those two endings and you will recognise a lot.</p>

<h3 id="masc">7. Strong masculine (a-stem): stān</h3>
<p>The biggest family of all. Most masculine nouns that don’t end in -a go like {{stān|stone}}. The plural <b>-as</b> is the ancestor of our English plural <b>-s</b>.</p>
${P('Strong masculine',[['stān','stone','masculine',['stān','stān','stān|es','stān|e'],['stān|as','stān|as','stān|a','stān|um']],['cyning','king','masculine',['cyning','cyning','cyning|es','cyning|e'],['cyning|as','cyning|as','cyning|a','cyning|um']]])}
<p>Others like this: {{hund|dog}}, {{wulf|wolf}}, {{hring|ring}}, {{eorl|nobleman}}, {{dæġ|day}}. Note that dæġ has the plural {{dagas|days}}: the vowel changes from æ to a before a back vowel in the ending.</p>

<h3 id="neut">8. Strong neuter (a-stem): sċip, word, hūs</h3>
<p>Neuters take the same endings as masculines, except in the <b>nominative and accusative plural</b>. Here a “light” word (a short vowel plus one consonant, like sċip) adds <b>-u</b>, while a “heavy” word (a long vowel or two final consonants, like hūs and word) adds <b>nothing</b>. That is why modern <i>sheep</i> and <i>deer</i> still have no plural ending: they come from heavy neuters {{sċēap|sheep}} and {{dēor|animal}}.</p>
${P('Strong neuter',[['sċip','ship','neuter, light',['sċip','sċip','sċip|es','sċip|e'],['sċip|u','sċip|u','sċip|a','sċip|um']],['word','word','neuter, heavy',['word','word','word|es','word|e'],['word','word','word|a','word|um']],['hūs','house','neuter, heavy',['hūs','hūs','hūs|es','hūs|e'],['hūs','hūs','hūs|a','hūs|um']]])}
<p>Others like this: {{land|land}}, {{wīf|woman}}, {{gold|gold}}, {{swīn|pig}} (heavy), and {{mæġden|girl}}, which has the plural mæġden<b>u</b>.</p>

<h3 id="fem">9. Strong feminine (ō-stem): ġiefu, lār</h3>
<p>Most feminine nouns that don’t end in -e go like these. A light noun ends in <b>-u</b> in the nominative singular ({{ġiefu|gift}}), while a heavy one has no ending ({{lār|teaching}}). Almost everything else in the singular is <b>-e</b>.</p>
${P('Strong feminine',[['ġiefu','gift','feminine, light',['ġief|u','ġief|e','ġief|e','ġief|e'],['ġief|a/ġief|e','ġief|a/ġief|e','ġief|a/ġief|ena','ġief|um']],['lār','teaching','feminine, heavy',['lār','lār|e','lār|e','lār|e'],['lār|a/lār|e','lār|a/lār|e','lār|a/lār|ena','lār|um']]])}
<p>The plural endings <b>-a</b> and <b>-e</b> are both found, and <b>-ena</b> is a later genitive plural borrowed from the weak nouns. Others like this: {{rād|ride, journey}}, {{dūn|hill}}.</p>

<h3 id="weak">10. Weak nouns (n-stem): guma, tunge, ēage</h3>
<p>These are the easiest nouns: apart from the nominative (and the neuter accusative) singular, nearly every form ends in <b>-an</b>. Masculines end in <b>-a</b>, feminines in <b>-e</b>, and there are only a handful of neuters (ēage “eye”, ēare “ear”).</p>
${P('Weak nouns',[['guma','man','masculine',['gum|a','gum|an','gum|an','gum|an'],['gum|an','gum|an','gum|ena','gum|um']],['tunge','tongue','feminine',['tung|e','tung|an','tung|an','tung|an'],['tung|an','tung|an','tung|ena','tung|um']],['ēage','eye','neuter',['ēag|e','ēag|e','ēag|an','ēag|an'],['ēag|an','ēag|an','ēag|ena','ēag|um']]])}
<p>Others like this: {{mōna|moon}}, {{nama|name}}, {{boga|bow}} (masc.); {{sunne|sun}}, {{heorte|heart}}, {{ċiriċe|church}} (fem.); {{ēare|ear}} (neut.). The “-an” plural survives in <i>oxen</i>.</p>

<h3 id="mutation">11. Vowel-change plurals: mann/menn, fōt/fēt</h3>
<p>A small but very common group of “root nouns” changes its <b>vowel</b> instead of (or as well as) adding an ending, in the <b>nominative/accusative plural and the dative singular</b>. This change is called <b>i-mutation</b> (or i-umlaut). It is exactly why we still say <i>men, feet, teeth, geese, mice</i>.</p>
${P('Root nouns with i-mutation',[['mann','person','masculine',['mann','mann','mann|es','menn'],['menn','menn','mann|a','mann|um']],['fōt','foot','masculine',['fōt','fōt','fōt|es','fēt'],['fēt','fēt','fōt|a','fōt|um']],['gōs','goose','feminine',['gōs','gōs','gēs/gōs|e','gēs'],['gēs','gēs','gōs|a','gōs|um']]])}
<table class="gt"><tr><th>Singular</th><th>Plural</th><th>Modern</th></tr>
<tr><td>{{mann|person}}</td><td>menn</td><td>man → men</td></tr><tr><td>{{fōt|foot}}</td><td>fēt</td><td>foot → feet</td></tr>
<tr><td>{{tōþ|tooth}}</td><td>tēþ</td><td>tooth → teeth</td></tr><tr><td>{{gōs|goose}}</td><td>gēs</td><td>goose → geese</td></tr>
<tr><td>{{mūs|mouse}}</td><td>mȳs</td><td>mouse → mice</td></tr><tr><td>{{bōc|book}}</td><td>bēċ</td><td>book → books (the old plural was lost)</td></tr></table>

<h3 id="rstems">12. Family words (r-stems): fæder, mōdor, brōþor, sweostor, dohtor</h3>
<p>Five relationship words form their own little group. Their singular hardly changes at all, except that mōdor, brōþor and dohtor change their vowel in the <b>dative singular</b>.</p>
<div class="tw"><table class="gt par"><caption>r-stems: singular</caption><tr><th></th><th>{{fæder|father}}</th><th>{{mōdor|mother}}</th><th>{{brōþor|brother}}</th><th>{{sweostor|sister}}</th><th>{{dohtor|daughter}}</th></tr>
<tr><th>Nom./Acc.</th><td>fæder</td><td>mōdor</td><td>brōþor</td><td>sweostor</td><td>dohtor</td></tr>
<tr><th>Genitive</th><td>fæder (also fæder<b>es</b>)</td><td>mōdor (also mēder)</td><td>brōþor</td><td>sweostor</td><td>dohtor</td></tr>
<tr><th>Dative</th><td>fæder</td><td><b>mēder</b></td><td><b>brēþer</b></td><td>sweostor</td><td><b>dehter</b></td></tr>
<tr><th>Nom./Acc. plural</th><td>fæder<b>as</b></td><td>mōdr<b>u</b>, -<b>a</b></td><td>(ġe)brōþor, -r<b>u</b>, -r<b>a</b></td><td>(ġe)sweostor, -r<b>u</b>, -r<b>a</b></td><td>dohtor, -r<b>u</b>, -r<b>a</b></td></tr>
<tr><th>Gen. / Dat. plural</th><td>fæder<b>a</b> / fæder<b>um</b></td><td>mōdr<b>a</b> / mōdr<b>um</b></td><td>brōþr<b>a</b> / brōþr<b>um</b></td><td>sweostr<b>a</b> / sweostr<b>um</b></td><td>dohtr<b>a</b> / dohtr<b>um</b></td></tr></table></div>
<p>The plurals of brōþor and sweostor often carry the prefix <i>ġe-</i> (“brothers/sisters together”).</p>

<h3 id="ustems">13. u-stems: sunu, duru</h3>
<p>A small group with <b>-a</b> almost everywhere outside the nominative/accusative singular. Only a few words belong to it, but they are common: {{sunu|son}} (m.), {{duru|door}} (f.), {{wudu|wood}}, {{medu|mead}}, and heavy {{hand|hand}} (f., with no -u).</p>
${P('u-stems',[['sunu','son','masculine',['sun|u','sun|u','sun|a','sun|a'],['sun|a','sun|a','sun|a','sun|um']],['duru','door','feminine',['dur|u','dur|u','dur|a','dur|a'],['dur|a','dur|a','dur|a','dur|um']],['hand','hand','feminine',['hand','hand','hand|a','hand|a'],['hand|a','hand|a','hand|a','hand|um']]])}

<h3 id="cheat">14. Ending cheat-sheet</h3>
<table class="gt"><tr><th>If you see…</th><th>It is probably…</th></tr>
<tr><td><b>-um</b></td><td><span class="c-dat">dative plural</span> (every declension)</td></tr>
<tr><td><b>-a</b> on a noun that doesn’t usually end in -a</td><td><span class="c-gen">genitive plural</span> (or a feminine/u-stem plural)</td></tr>
<tr><td><b>-ena</b></td><td><span class="c-gen">genitive plural</span> of a weak noun</td></tr>
<tr><td><b>-es</b></td><td><span class="c-gen">genitive singular</span>, masculine or neuter (“’s”)</td></tr>
<tr><td><b>-as</b></td><td><span class="c-nom">nom.</span>/<span class="c-acc">acc. plural</span>, strong masculine</td></tr>
<tr><td><b>-e</b> on a strong masc./neut. noun</td><td><span class="c-dat">dative singular</span></td></tr>
<tr><td><b>-an</b></td><td>a weak noun, in any case except the nominative singular</td></tr>
<tr><td>a changed vowel (menn, fēt, bēċ)</td><td>plural, or dative singular, of a root noun</td></tr></table>

<h3 id="order">15. Word order: reading by endings</h3>
<p>Because the endings carry the meaning, Old English can move words around for emphasis. Compare (verbs link to their dictionary form):</p>
${IL([['Sē','sē','the','nom masc'],['cyning','cyning','king','nom'],['lufode','lufian','loved',''],['þone','þone','the','acc masc'],['ealdormann.','ealdormann','ealdorman','acc']],'The king loved the ealdorman.')}
${IL([['Þone','þone','the','acc masc'],['ealdormann','ealdormann','ealdorman','acc'],['lufode','lufian','loved',''],['sē','sē','the','nom masc'],['cyning.','cyning','king','nom']],'The king loved the ealdorman. (Same meaning, with the ealdorman put first for emphasis.)')}
${IL([['Sē','sē','the','nom masc'],['ealdormann','ealdormann','ealdorman','nom'],['lufode','lufian','loved',''],['þone','þone','the','acc masc'],['cyning.','cyning','king','acc']],'The ealdorman loved the king. (Now the meaning has flipped, because sē and þone have swapped.)')}
<p>The nouns <i>cyning</i> and <i>ealdormann</i> look the same in the nominative and accusative singular, so here <b>only “the” tells you</b> who loved whom. Two more examples:</p>
${IL([['Iċ','iċ','I','nom'],['sealde','sellan','gave',''],['þām','þām','the','dat'],['cyninge','cyning','king','dat'],['þæt','þæt','the','acc neut'],['sweord.','sweord','sword','acc']],'I gave the king the sword. / I gave the sword to the king.')}
${IL([['Þæs','þæs','the','gen'],['cyninges','cyning','king’s','gen'],['sunu','sunu','son','nom'],['sæt','sittan','sat',''],['on','on','in','prep'],['þām','þām','the','dat'],['hūse.','hūs','house','dat']],'The king’s son sat in the house.')}
<p>Main clauses usually put the verb <b>second</b>, as in modern German. In subordinate clauses and in poetry the verb often comes last, and poets move words much more freely.</p>

<h3 id="practice">16. Practice passage</h3>
<p>A short passage written for this guide, using only the patterns above. Try to identify the case of every noun before revealing the translation.</p>
<div class="passage"><p>Sē cyning sæt on his hūse. Þæs cyninges sunu brōhte his fæder þā bōc. Sē cyning sealde þām suna gold. Þæt mæġden seah þone mōnan and þā sunnan. Þā menn ēodon tō þǣre ċiriċan.</p></div>
<div class="quiz"><details><summary>Show word-by-word analysis</summary>
${IL([['Sē cyning','cyning','the king','nom'],['sæt','sittan','sat',''],['on his hūse.','hūs','in his house','dat']],'The king sat in his house.')}
${IL([['Þæs cyninges','cyning','the king’s','gen'],['sunu','sunu','son','nom'],['brōhte','bringan','brought',''],['his fæder','fæder','his father','dat'],['þā bōc.','bōc','the book','acc fem']],'The king’s son brought his father the book.')}
${IL([['Sē cyning','cyning','the king','nom'],['sealde','sellan','gave',''],['þām suna','sunu','to the son','dat'],['gold.','gold','gold','acc']],'The king gave the son gold.')}
${IL([['Þæt mæġden','mæġden','the girl','nom neut'],['seah','sēon','saw',''],['þone mōnan','mōna','the moon','acc masc'],['and','and','and',''],['þā sunnan.','sunne','the sun','acc fem']],'The girl saw the moon and the sun.')}
${IL([['Þā menn','mann','the people','nom pl'],['ēodon','gān','went',''],['tō þǣre ċiriċan.','ċiriċe','to the church','dat fem']],'The people went to the church.')}
<p>Notes: <i>suna</i> is the dative of the u-stem sunu. <i>mōnan</i> and <i>sunnan</i> are weak accusatives. <i>menn</i> is a mutated plural. <i>ċiriċan</i> is a weak feminine dative after <i>tō</i>. And <i>þæt mæġden</i> is neuter, even though the girl is female.</p></details></div>

<h3 id="quiz">17. Quick self-check</h3>
<div class="quiz">
<details><summary>1. In <i>Þone hund seah sē wulf</i>, who saw whom?</summary>The wolf saw the dog. <b>sē</b> marks the subject (nominative), and <b>þone</b> marks the object (accusative), whatever the word order.</details>
<details><summary>2. What gender is <b>wīf</b>, and which word for “the” goes with it in the nominative?</summary>Neuter, so <b>þæt wīf</b>.</details>
<details><summary>3. What case and number is <b>stānum</b>?</summary>Dative plural (“to/with/on the stones”). <b>-um</b> is always dative plural.</details>
<details><summary>4. What is the plural of <b>hūs</b>? And of <b>sċip</b>?</summary><b>hūs</b> (no ending, heavy neuter) and <b>sċipu</b> (light neuter, -u).</details>
<details><summary>5. Which modern English word comes from the Old English dative <b>hwām</b>?</summary><i>whom</i>.</details>
<details><summary>6. Give the dative singular of <b>fōt</b> and of <b>mōdor</b>.</summary><b>fēt</b> and <b>mēder</b>. Both change their vowel in the dative singular.</details>
<details><summary>7. Why is <b>wīfmann</b> masculine?</summary>A compound takes the gender of its last element, and <b>mann</b> is masculine.</details>
<details><summary>8. What case is <b>guman</b>?</summary>Ambiguous: it could be accusative, genitive or dative singular, or nominative/accusative plural, because weak nouns use -an almost everywhere. Look at “the” or the sentence to decide.</details>
<details><summary>9. In <i>Iċ sealde þǣre cwēne þone hring</i>, what is the case of <b>þǣre cwēne</b>?</summary>Dative feminine singular: “I gave <b>the queen</b> the ring.” (þone hring is the accusative object.)</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_grammar">Old English grammar</a>”, sections Gender, Gender assignment, Case, Noun classes (a-, ō-, n-, u-stems, root nouns, r-stems), Articles and Word order. Consulted October 2026. The paradigm tables, gender rules, the <i>snāw</i> example and the sē table follow this article.</li>
<li>Wiktionary (English edition), the Old English entries for each linked noun, including their declension tables and gender, via the Wiktextract/kaikki.org data used by this dictionary (CC BY-SA 4.0). Every paradigm here was checked against those tables.</li>
<li>Wiktionary, etymologies of English “<a href="https://en.wiktionary.org/wiki/whom">whom</a>” (from Old English dative hwām), “<a href="https://en.wiktionary.org/wiki/-%27s">-’s</a>” (from the genitive ending -es) and “<a href="https://en.wiktionary.org/wiki/the">the</a>” (the adverb in “the more…”, from an instrumental of sē).</li></ul>
<p class="note">Paradigms show standard late West Saxon forms as printed in modern dictionaries. Manuscripts show many spelling variants (e.g. þǣm/þām, -on for -an), and some nouns move between declensions.</p>`;
