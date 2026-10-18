// Guide 3: Pronouns. Forms checked against the Wiktionary/kaikki data (iċ, hē, sē, þēs, hwā, mīn...) and Wikipedia "Old English grammar".
const RW=(c,label,cells)=>`<tr class="r-${c}"><th class="c-${c}">${label}</th>${cells.map(x=>`<td>${x}</td>`).join('')}</tr>`;
const GP=()=>`
<p class="lead">Pronouns are the most common words in any Old English text, and they have changed less than most words. Many are still recognisable: <i>iċ, mē, wē, ūs, hē, him, his</i>. This guide covers every kind of pronoun with full tables. It uses the same case colours as the <a href="#grammar/nouns">Nouns guide</a> (<span class="c-nom">nominative</span>, <span class="c-acc">accusative</span>, <span class="c-gen">genitive</span>, <span class="c-dat">dative</span>, <span class="c-ins">instrumental</span>). If cases are new to you, read <a href="#grammar/nouns/case">Nouns §1–2</a> first.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/pronouns/personal">Personal pronouns: I, you, we</a></li><li><a href="#grammar/pronouns/dual">The dual: “we two”, “you two”</a></li><li><a href="#grammar/pronouns/third">Third person: hē, hēo, hit, hīe</a></li><li><a href="#grammar/pronouns/agree">“He” can mean “it”: gender agreement</a></li>
<li><a href="#grammar/pronouns/modern">What became of them (and where “they” came from)</a></li><li><a href="#grammar/pronouns/poss">Possessives: mīn, þīn, ūre, ēower, sīn</a></li><li><a href="#grammar/pronouns/dem">Demonstratives: sē “that/the”, þēs “this”</a></li>
<li><a href="#grammar/pronouns/inter">Questions: hwā, hwæt, hwȳ, hwelċ, hwæþer</a></li><li><a href="#grammar/pronouns/rel">Relative pronouns: þe, sē, sē þe</a></li><li><a href="#grammar/pronouns/self">Reflexives and self</a></li><li><a href="#grammar/pronouns/indef">Indefinites: man, ǣlċ, ǣniġ, nān, sum</a></li>
<li><a href="#grammar/pronouns/practice">Practice passage</a></li><li><a href="#grammar/pronouns/quiz">Quick self-check</a></li><li><a href="#grammar/pronouns/sources">Sources</a></li></ol></div>

<h3 id="personal">1. Personal pronouns: I, you, we</h3>
<p>First and second person pronouns are the same for every gender. In most texts the accusative and dative are identical (<b>mē</b> = “me” and “to me”).</p>
<div class="tw"><table class="gt par"><caption>1st and 2nd person (singular and plural)</caption><tr><th></th><th>I</th><th>we</th><th>you (one person)</th><th>you (plural)</th></tr>
${RW('nom','Nominative',['{{iċ@pron,det,arti|I}}','{{wē@pron,det,arti|we}}','{{þū@pron,det,arti|thou, you}}','{{ġē@pron,det,arti|ye, you}}'])}
${RW('acc','Accusative',['{{mē@pron,det,arti|me}} <small>(also {{mec}})</small>','{{ūs@pron,det,arti|us}} <small>(also {{ūsiċ}})</small>','{{þē@pron,det,arti|thee}} <small>(also {{þec}})</small>','{{ēow@pron,det,arti|you}} <small>(also {{ēowiċ}})</small>'])}
${RW('gen','Genitive',['{{mīn@pron,det,arti|of me}}','{{ūre@pron,det,arti|of us}}','{{þīn@pron,det,arti|of thee}}','{{ēower@pron,det,arti|of you}}'])}
${RW('dat','Dative',['mē','ūs','þē','ēow'])}</table></div>
<p>The longer accusatives <b>mec, þec, ūsiċ, ēowiċ</b> are older forms found mainly in Anglian texts and in poetry. Ordinary West Saxon prose uses the short forms. Note that <b>þū</b> is singular and <b>ġē</b> plural, like older English <i>thou</i> and <i>ye</i>.</p>

<h3 id="dual">2. The dual: “we two”, “you two”</h3>
<p>Old English has special pronouns for exactly <b>two</b> people. They are common, especially in poetry, but the ordinary plural can always be used instead.</p>
<div class="tw"><table class="gt par"><caption>Dual pronouns</caption><tr><th></th><th>we two</th><th>you two</th></tr>
${RW('nom','Nominative',['{{wit|we two}}','{{ġit|you two}}'])}
${RW('acc','Accusative',['{{unc|us two}} <small>(also {{uncit}})</small>','{{inc|you two}} <small>(also {{incit}})</small>'])}
${RW('gen','Genitive',['{{uncer@pron,det,arti|of us two}}','{{incer@pron,det,arti|of you two}}'])}
${RW('dat','Dative',['unc','inc'])}</table></div>
<p>Dual subjects take <b>plural verbs</b>: <i>wit sāwon</i>, “we two saw”.</p>

<h3 id="third">3. Third person: hē, hēo, hit, hīe</h3>
<p>In the singular, the third person has three genders. The plural <b>hīe</b> (“they”) is the same for all genders.</p>
<div class="tw"><table class="gt par"><caption>3rd person</caption><tr><th></th><th>he <span class="g m">masculine</span></th><th>it <span class="g n">neuter</span></th><th>she <span class="g f">feminine</span></th><th>they (all genders)</th></tr>
${RW('nom','Nominative',['{{hē@pron,det,arti|he}}','{{hit@pron,det,arti|it}}','{{hēo@pron,det,arti|she}}','{{hīe@pron,det,arti|they}}'])}
${RW('acc','Accusative',['{{hine|him}}','hit','hīe','hīe'])}
${RW('gen','Genitive',['{{his@pron,det,arti|his}}','his','{{hire@pron,det,arti|her}}','{{heora@pron,det,arti|their}}'])}
${RW('dat','Dative',['{{him@pron,det,arti|to him}}','him','hire','him'])}</table></div>
<div class="note"><b>Watch out for look-alikes.</b> <b>him</b> can be “to him”, “to it” or “to them”. <b>hīe</b> can be “her” (accusative) or “they/them”. <b>hire</b> can be “her” (dative) or “her/hers” (genitive). <b>his</b> is “his” or “its”. Context and verb endings sort these out. The plural genitive is spelled many ways: {{heora@pron,det,arti}}, {{hiera}}, {{hira}}.</div>

<h3 id="agree">4. “He” can mean “it”: grammatical-gender agreement</h3>
<p>Third-person pronouns follow the <a href="#grammar/nouns/gender">grammatical gender</a> of the noun they refer to, not natural sex. So a masculine noun like {{mōna|moon}} <span class="g m">masculine</span> is “he”, a feminine noun like {{sunne|sun}} <span class="g f">feminine</span> is “she”, and only neuter nouns like {{sċip|ship}} <span class="g n">neuter</span> are “it”:</p>
${IL([['Mē','iċ','me','dat'],['līcaþ','','pleases',''],['sē','sē','the','nom masc'],['snāw','snāw','snow','nom'],['for þon þe','','because',''],['hē','hē','he (= it)','nom masc'],['dēþ','','makes',''],['þā','sē','the','acc fem'],['burg','burg','town','acc'],['stille.','','quiet','']],'I like the snow because it makes the town quiet. (Wikipedia, “Old English grammar”)')}
<p>Compare <i>Mē līcaþ þæt {{fȳr|fire}} for þon þe <b>hit</b> dēþ þā burg hlūde</i>, “I like the fire because <b>it</b> makes the town loud”. {{fȳr}} is neuter, so it is <b>hit</b>. With nouns for people whose grammatical gender doesn’t match their sex, such as {{wīf}} and {{mæġden}} (both neuter), the pronoun often follows natural sex, so a girl is <i>hēo</i>.</p>

<h3 id="modern">5. What became of them (and where “they” came from)</h3>
<table class="gt"><tr><th>Old English</th><th>Modern English</th><th>Notes</th></tr>
<tr><td>{{iċ@pron,det,arti}}, {{mē@pron,det,arti}}, {{mīn@pron,det,arti}}</td><td>I, me, my/mine</td><td>Direct descendants.</td></tr>
<tr><td>{{wē@pron,det,arti}}, {{ūs@pron,det,arti}}, {{ūre@pron,det,arti}}</td><td>we, us, our</td><td>Direct descendants.</td></tr>
<tr><td>{{þū@pron,det,arti}}, {{þē@pron,det,arti}}, {{þīn@pron,det,arti}}</td><td>thou, thee, thy/thine</td><td>Survive in older English and some dialects.</td></tr>
<tr><td>{{ġē@pron,det,arti}}, {{ēow@pron,det,arti}}, {{ēower@pron,det,arti}}</td><td>ye, you, your</td><td><i>you</i> comes from the dative/accusative ēow and has replaced <i>ye</i> as the subject form too.</td></tr>
<tr><td>{{hē@pron,det,arti}}, {{him@pron,det,arti}}, {{his@pron,det,arti}}</td><td>he, him, his</td><td>Almost unchanged. <i>Him</i> was originally only dative. The accusative {{hine}} died out.</td></tr>
<tr><td>{{hit@pron,det,arti}}</td><td>it</td><td>Lost its h- (<i>hit</i> survives in some dialects).</td></tr>
<tr><td>{{hēo@pron,det,arti}}, {{hire@pron,det,arti}}</td><td>she, her</td><td><i>her</i> is from hire. <i>she</i> is <b>probably</b> from hēo through unusual sound changes, though a link to {{sēo@pron,det,arti}} has also been suggested.</td></tr>
<tr><td>{{hīe@pron,det,arti}}, {{him@pron,det,arti}}, {{heora@pron,det,arti}}</td><td><b>they, them, their</b></td><td><b>Borrowed from Old Norse</b> (þeir, þeim, þeira) in the Middle English period. The native forms had become easy to confuse with <i>he</i> and <i>him</i>. The unstressed native dative survives as colloquial <i>’em</i>.</td></tr></table>

<h3 id="poss">6. Possessives: mīn, þīn, ūre, ēower, sīn</h3>
<p>“My, your, our” are the <b>genitives</b> of the personal pronouns (<a href="#grammar/pronouns/personal">§1</a>). But when they come before a noun, <b>mīn, þīn, uncer, incer, ūre, ēower</b> and <b>sīn</b> behave like <b>strong adjectives</b>: they take endings that agree with the noun’s case, gender and number. By contrast, the third-person genitives <b>his, hire, heora</b> never change.</p>
<div class="tw"><table class="gt par"><caption>{{mīn@pron,det,arti|my}} declined like a strong adjective (singular)</caption><tr><th></th><th>with a masc. noun</th><th>with a neut. noun</th><th>with a fem. noun</th></tr>
${RW('nom','Nominative',['mīn','mīn','mīn'])}
${RW('acc','Accusative',['mīn<b>ne</b>','mīn','mīn<b>e</b>'])}
${RW('gen','Genitive',['mīn<b>es</b>','mīn<b>es</b>','mīn<b>re</b>'])}
${RW('dat','Dative',['mīn<b>um</b>','mīn<b>um</b>','mīn<b>re</b>'])}
${RW('ins','Instrumental',['mīn<b>e</b>','mīn<b>e</b>','mīn<b>re</b>'])}</table></div>
<div class="tw"><table class="gt par"><caption>mīn (plural)</caption><tr><th></th><th>masc.</th><th>neut.</th><th>fem.</th></tr>
${RW('nom','Nom. / Acc.',['mīn<b>e</b>','mīn','mīn<b>a</b>, mīn<b>e</b>'])}
${RW('gen','Genitive',['mīn<b>ra</b>','mīn<b>ra</b>','mīn<b>ra</b>'])}
${RW('dat','Dative',['mīn<b>um</b>','mīn<b>um</b>','mīn<b>um</b>'])}</table></div>
<p>{{þīn@pron,det,arti|your}} and {{sīn|his/her/their own}} go exactly the same way (þīnne, þīnre, þīnum…). {{ūre@pron,det,arti|our}} has forms like <i>ūrne</i>, <i>ūrre</i> and <i>ūrum</i>, and {{ēower@pron,det,arti|your}} has <i>ēowerne</i> and <i>ēowrum</i>. Examples: <i>iċ sēo <b>mīnne</b> {{fæder}}</i>, “I see my father” (masc. acc.), and <i>on <b>mīnum</b> hūse</i>, “in my house” ({{hūs}} is neuter, so neut. dat.). But it is always <i>on <b>his</b> hūse</i>, because <b>his</b> does not change.</p>
<div class="note"><b>sīn</b> is a reflexive possessive (“his/her/their own”). It is rare, mostly poetic and non-West Saxon, as in Beowulf’s <i>tō hofe <b>sīnum</b></i>, “to his court”. West Saxon prose uses his / hire / heora instead.</div>

<h3 id="dem">7. Demonstratives: sē “that/the”, þēs “this”</h3>
<p>{{sē@pron,det,arti|the, that}} means both “the” and “that”. Its full table is in the <a href="#grammar/nouns/article">Nouns guide §5</a>, repeated here for convenience. {{þēs|this}} is “this”.</p>
<div class="tw"><table class="gt art"><caption>sē, sēo, þæt: “the, that”</caption><tr><th></th><th>masc. <span class="g m">m</span></th><th>neut. <span class="g n">n</span></th><th>fem. <span class="g f">f</span></th><th>plural</th></tr>
${RW('nom','Nominative',['{{sē@pron,det,arti}}','{{þæt@pron,det,arti}}','{{sēo@pron,det,arti}}','{{þā@pron,det,arti}}'])}${RW('acc','Accusative',['{{þone@pron,det,arti}}','þæt','þā','þā'])}${RW('gen','Genitive',['{{þæs@pron,det,arti}}','þæs','{{þǣre@pron,det,arti}}','{{þāra@pron,det,arti}}'])}${RW('dat','Dative',['{{þām@pron,det,arti}}','þām','þǣre','þām'])}${RW('ins','Instrumental',['{{þȳ@pron,det,arti}}, {{þon@pron,det,arti}}','þȳ, þon','þǣre','þām'])}</table></div>
<div class="tw"><table class="gt art"><caption>þēs, þēos, þis: “this”</caption><tr><th></th><th>masc. <span class="g m">m</span></th><th>neut. <span class="g n">n</span></th><th>fem. <span class="g f">f</span></th><th>plural</th></tr>
${RW('nom','Nominative',['{{þēs|this}}','{{þis@pron,det,arti|this}}','{{þēos@pron,det,arti|this}}','{{þās@pron,det,arti|these}}'])}${RW('acc','Accusative',['{{þisne@pron,det,arti}}','þis','þās','þās'])}${RW('gen','Genitive',['{{þisses@pron,det,arti}}','þisses','þisse, þisre','þissa'])}${RW('dat','Dative',['{{þissum@pron,det,arti}}','þissum','þisse, þisre','þissum'])}${RW('ins','Instrumental',['{{þȳs@pron,det,arti}}','þȳs','þisse, þisre','þissum'])}</table></div>
<p>Spot the modern words: <i>þis</i> → this, <i>þæt</i> → that. Like modern “that”, <b>sē/sēo/þæt</b> can also stand alone as a pronoun meaning “that one” or “he/she/it”. There is also a rarer {{ġeon|yon}}, “that over there”, which declines like an adjective.</p>

<h3 id="inter">8. Questions: hwā, hwæt, hwȳ, hwelċ, hwæþer</h3>
<p>{{hwā|who}} is used for people and {{hwæt@pron,det,arti|what}} for things. They differ only in the nominative and accusative.</p>
<div class="tw"><table class="gt par"><caption>hwā / hwæt</caption><tr><th></th><th>who</th><th>what</th></tr>
${RW('nom','Nominative',['{{hwā}}','{{hwæt@pron,det,arti}}'])}${RW('acc','Accusative',['{{hwone|whom}}','hwæt'])}${RW('gen','Genitive',['{{hwæs@pron,det,arti|whose}}','hwæs'])}${RW('dat','Dative',['{{hwām|to whom}} (hwǣm)','hwām'])}${RW('ins','Instrumental',['{{hwȳ@pron,det,arti|why}} (also spelled {{hwī}}), {{hwon@pron,det,arti}}','hwȳ, hwon'])}</table></div>
<p>The instrumental <b>hwȳ / hwī</b> (“by what?”) is our word <b>why</b>, and dative <b>hwām</b> is <b>whom</b>. Two more question words decline like adjectives:</p>
<ul class="pit"><li>{{hwelċ@pron,det,arti|which}}: “which? what kind of?” (accusative masc. <i>hwelcne</i>, dative <i>hwelċum</i>…).</li>
<li>{{hwæþer@pron,det,arti|which of two}}: “which of two?”, as in <i>Hwæðer wēnst þū is māre, þē þīn sweord þē mīn?</i> “Which do you think is bigger, your sword or mine?” As a conjunction it means “whether”.</li></ul>

<h3 id="rel">9. Relative pronouns: þe, sē, sē þe</h3>
<p>Old English did <b>not</b> use <i>hwā</i> or <i>hwæt</i> for “who/which” in relative clauses like “the man who…”. Instead it used:</p>
<ol><li>the unchanging particle {{þe|that, who, which}}: <i>Ne fyrhteð þā <b>þe</b> on synnum lyfiað</i>, “Do not fear those <b>who</b> live in sin.”</li>
<li>the demonstrative {{sē@pron,det,arti}} / {{sēo@pron,det,arti}} / {{þæt@pron,det,arti}}, agreeing with the noun it refers to, e.g. <i>þæt mæġden <b>sēo</b>…</i> (“the girl who…”).</li>
<li>both together: <b>sē þe</b>, <b>sēo þe</b>, <b>þæt þe</b>.</li></ol>
<p>Example (written for this guide): <i>sē cyning <b>þe</b> wē sāwon</i>, “the king <b>that/whom</b> we saw”. Subordinate clauses tend to put the verb last (<i>wē sāwon</i>), while main clauses put it second.</p>

<h3 id="self">10. Reflexives and self</h3>
<p>Old English has no special reflexive pronoun. The ordinary personal pronoun does the job. For emphasis or clarity, the adjective {{self@pron,det,arti|self}} is added, and it agrees with the pronoun like a strong adjective:</p>
${IL([['Sē wer','','the man','nom'],['meahte','','could',''],['unēaðe','','barely',''],['þurh','','through',''],['hine','hē','him','acc masc'],['selfne','self','self','acc masc'],['ārīsan','','get up','']],'The man could barely get up by himself. (Old English Bede, quoted in Wiktionary)')}
<p>Modern <i>himself</i> comes from Old English <i>him selfum</i> (dative). Other forms: <i>iċ self</i> “I myself”, <i>hēo selfe</i>, <i>him {{selfum}}</i>, <i>hine {{selfne}}</i>.</p>

<h3 id="indef">11. Indefinites: man, ǣlċ, ǣniġ, nān, sum</h3>
<table class="gt"><tr><th>Word</th><th>Meaning</th><th>Example / note</th></tr>
<tr><td>{{man@pron,det,arti|one, people}}</td><td>“one, you, people, someone”</td><td>A pronoun use of {{mann|person}}, often where we would use the passive: <i>Hine <b>man</b> sċeal lǣdan tō þām lǣċe</i>, “He should be taken to the doctor” (lit. “one shall lead him…”). Compare German <i>man</i>.</td></tr>
<tr><td>{{ǣlċ|each, every}}</td><td>each, every</td><td><i><b>ǣlċe</b> morgen</i>, “each morning”. It declines like an adjective. See also {{ǣġhwelċ|each one}}.</td></tr>
<tr><td>{{ǣniġ|any}}</td><td>any</td><td>Strong adjective endings: ǣniġne, ǣniġum…</td></tr>
<tr><td>{{nān@pron,det,arti|none, no}}</td><td>no, none, no one</td><td>Accusative masc. nānne, dative nānum.</td></tr>
<tr><td>{{sum@pron,det,arti|some, a certain}}</td><td>some; a certain; one of</td><td><i><b>Sum</b> prēost</i>, “a certain priest”. <i><b>Sume</b> æpplas sindon rēade</i>, “some apples are red”. <i>þēofa <b>sum</b></i>, “one of the thieves” (with a genitive).</td></tr>
<tr><td>{{āwiht|anything}}</td><td>anything</td><td>Also spelled <i>āht</i>, <i>ōwiht</i>.</td></tr></table>

<h3 id="practice">12. Practice passage</h3>
<p>A short passage <b>written for this guide</b> (not a historical text). Identify each pronoun’s person, case and gender, then check.</p>
<div class="passage"><p>Hwā is þēs mann? Hē is mīn brōþor. Hē sealde mē his sweord. Wit sāwon þone mōnan; hē wæs beorht. Sēo sunne þe wē sāwon wæs ēac beorht; hēo sċān ofer ūs. Hwæt sæġde þīn mōdor? Man sæġde þæt ǣlċ mann his āgen hūs hæfde.</p></div>
<div class="quiz"><details><summary>Show word-by-word analysis</summary>
${IL([['Hwā','hwā','who','nom'],['is','','is',''],['þēs','þēs','this','nom masc'],['mann?','mann','man','nom']],'Who is this man?')}
${IL([['Hē','hē','he','nom masc'],['is','','is',''],['mīn','mīn','my','nom masc'],['brōþor.','brōþor','brother','nom']],'He is my brother.')}
${IL([['Hē','hē','he','nom masc'],['sealde','sellan','gave',''],['mē','iċ','to me','dat'],['his','hē','his','gen'],['sweord.','sweord','sword','acc']],'He gave me his sword.')}
${IL([['Wit','wit','we two','nom dual'],['sāwon','sēon','saw',''],['þone','þone','the','acc masc'],['mōnan;','mōna','moon','acc'],['hē','hē','he (= it)','nom masc'],['wæs','wesan','was',''],['beorht.','beorht','bright','']],'We two saw the moon; it was bright. (mōna is masculine, so “hē”)')}
${IL([['Sēo','sē','the','nom fem'],['sunne','sunne','sun','nom'],['þe','þe','that','rel'],['wē','wē','we','nom'],['sāwon','sēon','saw',''],['wæs ēac beorht;','','was also bright',''],['hēo','hēo','she (= it)','nom fem'],['sċān','sċīnan','shone',''],['ofer','ofer','over',''],['ūs.','wē','us','dat']],'The sun that we saw was also bright; it shone over us. (sunne is feminine, so “hēo”)')}
${IL([['Hwæt','hwæt','what','acc'],['sæġde','seċġan','said',''],['þīn','þīn','your','nom fem'],['mōdor?','mōdor','mother','nom']],'What did your mother say?')}
${IL([['Man','man','someone/people','nom'],['sæġde','seċġan','said',''],['þæt','','that',''],['ǣlċ','ǣlċ','each','nom masc'],['mann','mann','man','nom'],['his','hē','his','gen'],['āgen','āgen','own','acc neut'],['hūs','hūs','house','acc'],['hæfde.','habban','had','']],'People said that every man had his own house.')}
</details></div>

<h3 id="quiz">13. Quick self-check</h3>
<div class="quiz">
<details><summary>1. What is the difference between <b>wē</b> and <b>wit</b>?</summary><b>wit</b> is dual, “we two”. <b>wē</b> is plural, “we” (any number).</details>
<details><summary>2. Translate <b>Iċ seah hine</b>.</summary>“I saw him.” <b>hine</b> is the masculine accusative.</details>
<details><summary>3. Why would an Old English speaker call a stone “hē”?</summary>Because {{stān}} is grammatically masculine, and pronouns follow grammatical gender.</details>
<details><summary>4. Which modern pronouns came from Old Norse rather than Old English?</summary><i>they, them, their</i>.</details>
<details><summary>5. Which form of <b>mīn</b> fits: <i>iċ lufie ___ fæder</i> (“I love my father”)?</summary><b>mīnne</b>: masculine accusative singular, strong ending -ne.</details>
<details><summary>6. Does <b>his</b> change in <i>on his hūse</i> (dative)?</summary>No. <b>his, hire, heora</b> are genitives and never take endings.</details>
<details><summary>7. What modern words come from <b>hwȳ</b> and <b>hwām</b>?</summary><i>why</i> (instrumental) and <i>whom</i> (dative).</details>
<details><summary>8. How would Old English most simply say “the man who came”?</summary><i>sē mann <b>þe</b> cōm</i>, using the relative particle <b>þe</b> (not hwā).</details>
<details><summary>9. What does <i>Man sæġde…</i> mean?</summary>“People said… / It was said…”. <b>man</b> is the indefinite “one”.</details>
<details><summary>10. Give the nominative of “this” for a feminine noun.</summary><b>þēos</b> (masc. þēs, neut. þis).</details></div>

<div class="card gqtest"><b>Test yourself</b><p>Drill the pronoun and article tables from this guide:</p><p class="gqlinks"><a class="btn" href="#quiz/case/10/all/pron">Name that form</a> <a class="btn" href="#quiz/fill/all/all/pron">Fill the table</a></p></div>
<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_grammar">Old English grammar</a>”, sections Personal pronouns, Interrogative pronouns, Demonstratives, Articles, Adjectives (strong declension, used for the possessive endings), Gender (the <i>snāw/fȳr</i> sentences) and Relative and subordinate clauses. Consulted October 2026.</li>
<li>Wiktionary (English edition), the Old English entries for iċ, wit, ġit, wē, ġē, hē, hēo, hit, hīe, mīn, þīn, ūre, ēower, uncer, incer, sīn, sē, þēs, hwā, hwæt, hwȳ, hwī, hwelċ, hwæþer, þe, self, man, ǣlċ, ǣniġ, nān, sum and āwiht, including their declension tables, usage notes and quotations (via the Wiktextract/kaikki.org data, CC BY-SA 4.0). Every form in the tables here was checked against these.</li>
<li>Wiktionary etymologies of English “<a href="https://en.wiktionary.org/wiki/they">they</a>”, “<a href="https://en.wiktionary.org/wiki/them">them</a>”, “<a href="https://en.wiktionary.org/wiki/their">their</a>”, “<a href="https://en.wiktionary.org/wiki/she">she</a>”, “<a href="https://en.wiktionary.org/wiki/her">her</a>”, “<a href="https://en.wiktionary.org/wiki/it">it</a>”, “<a href="https://en.wiktionary.org/wiki/you">you</a>”, “<a href="https://en.wiktionary.org/wiki/whom">whom</a>” and “<a href="https://en.wiktionary.org/wiki/himself">himself</a>”.</li></ul>
<p class="note">Forms are standard late West Saxon as given in modern dictionaries. Manuscripts vary (e.g. hiera/hira/heora, þǣm/þām, sylf/self).</p>`;
