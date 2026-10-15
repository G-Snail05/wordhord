// Grammar section: hub + guides. Example words written as {{word|gloss|ipa}} link to dictionary entries.
const GUIDES=[{id:'letters',title:'Letters & Pronunciation',level:'Beginner',blurb:'The alphabet, the special letters þ ð æ ƿ, and how every sound is pronounced. Start here.',live:true},
{id:'nouns',title:'Nouns, Cases & Gender',level:'Beginner',blurb:'Why words change their endings: the four cases, three genders, and the word for “the”.',live:true},
{id:'pronouns',title:'Pronouns',level:'Beginner',blurb:'iċ, þū, wit, hē, hēo, hit: personal, possessive, demonstrative, question and relative pronouns.',live:true},
{id:'verbs',title:'Strong & Weak Verbs',level:'Intermediate',blurb:'singan, sang, sungon: vowel-changing verbs and the regular -ode verbs.'},
{id:'adjectives',title:'Adjectives: Strong & Weak',level:'Intermediate',blurb:'Two sets of endings, and when to use each.'},
{id:'syntax',title:'Word Order & Reading Verse',level:'Intermediate',blurb:'Verb-second order, alliteration and half-lines.'}];
function grammarHub(){M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › Grammar</div><h2 class="pgtitle">Grammar guides</h2><p>Short, practical guides to reading Old English, written for people who only know modern English. Example words link to their dictionary entries.</p>
<div class="quick">${GUIDES.map((g,i)=>g.live?`<a class="card q" href="#grammar/${g.id}"><span class="tag">${g.level}</span><b>${i+1}. ${g.title}</b><span>${g.blurb}</span></a>`:`<div class="card q soon"><span class="tag" style="background:#999">Coming soon</span><b>${i+1}. ${g.title}</b><span>${g.blurb}</span></div>`).join('')}</div>`}
function exw(w,g,ipa){let p='';[w,p='']=w.split('@');return `<a class="exw" data-w="${esc(w)}" data-p="${esc(p)}" href="#dict"><b>${esc(w)}</b><span class="rune">${rs(w)}</span>${ipa?`<span class="ipa">${esc(ipa)}</span>`:''}${g?`<span class="gl">${esc(g)}</span>`:''}</a>`}
const fill=s=>s.replace(/\{\{([^|}]+)\|?([^|}]*)\|?([^}]*)\}\}/g,(_,w,g,i)=>exw(w,g,i));
const GL=()=>`
<p class="lead">Old English (also called Anglo-Saxon) looks strange at first, but it is spelled much more consistently than modern English. Once you learn a few extra letters and a handful of rules, you can read any word aloud. This guide follows the conventions of modern student editions and dictionaries such as Wiktionary: macrons (ā) mark long vowels and dots (ċ, ġ) mark “soft” consonants. Medieval scribes wrote neither.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#grammar/letters/alphabet">The alphabet</a></li><li><a href="#grammar/letters/special">The special letters þ ð æ ƿ</a></li><li><a href="#grammar/letters/dots">Dotted ċ and ġ, and missing letters</a></li><li><a href="#grammar/letters/typing">Typing þ, ð and æ</a></li>
<li><a href="#grammar/letters/silent">Rule 1: every letter is pronounced</a></li><li><a href="#grammar/letters/vowels">Vowels, short and long</a></li><li><a href="#grammar/letters/diphthongs">Diphthongs: ea, eo, ie</a></li>
<li><a href="#grammar/letters/consonants">Consonants</a></li><li><a href="#grammar/letters/stress">Stress</a></li><li><a href="#grammar/letters/pitfalls">Common pitfalls</a></li><li><a href="#grammar/letters/practice">Practice: Beowulf, line 1</a></li><li><a href="#grammar/letters/quiz">Quick self-check</a></li><li><a href="#grammar/letters/sources">Sources</a></li></ol></div>

<h3 id="alphabet">1. The alphabet</h3>
<p>Old English was written in the Latin alphabet, which Christian missionaries brought in the 600s, plus a few extra letters. A typical modern edition uses these:</p>
<p class="alpha">a æ b c d e f g h i (k) l m n o p r s t þ ð u (ƿ) w x y</p>
<p>Before that the Anglo-Saxons used runes (the <a href="#runes">futhorc</a>), mainly for short inscriptions. Two runes, þ and ƿ, were borrowed into the Latin alphabet. Scribes also used the shorthand sign <b>⁊</b> (the “Tironian note”) for <i>and</i>, a bit like our &amp;.</p>

<h3 id="special">2. The special letters</h3>
<table class="gt"><tr><th>Letter</th><th>Name</th><th>Origin</th><th>Sound</th><th>Examples</th></tr>
<tr><td class="big">Þ þ</td><td>thorn</td><td>Borrowed from the rune ᚦ <i>þorn</i></td><td>/θ/ as in <i>thin</i>, or /ð/ as in <i>this</i> (see below)</td><td>{{þing|thing}} {{þū|you}}</td></tr>
<tr><td class="big">Ð ð</td><td>eth (a modern name)</td><td>A Latin <i>d</i> with a stroke through it, taken from Irish writing</td><td>Exactly the same as þ</td><td>{{ōþer|other}} {{brōþor|brother}}</td></tr>
<tr><td class="big">Æ æ</td><td>æsc (“ash”)</td><td>A Latin ligature of <i>a</i> + <i>e</i>, named after the rune ᚫ <i>æsc</i></td><td>/æ/ as in <i>cat</i>; long ǣ /æː/ is the same sound held longer</td><td>{{æsċ|ash tree}} {{wæter|water}} {{dǣd|deed}}</td></tr>
<tr><td class="big">Ƿ ƿ</td><td>wynn (“joy”)</td><td>Borrowed from the rune ᚹ <i>wynn</i></td><td>/w/ as in <i>win</i></td><td>{{wīf|woman}} {{wulf|wolf}}</td></tr></table>
<div class="note"><b>þ and ð are interchangeable.</b> Scribes used both letters for both sounds, sometimes in the same word: {{þæt}} and {{ðæt}} are the same word. Neither letter tells you whether the sound is voiceless (<i>thin</i>) or voiced (<i>this</i>). That depends on its position: voiceless at the start or end of a word, voiced between voiced sounds (see <a href="#grammar/letters/consonants">consonants</a>).</div>
<div class="note"><b>Wynn is printed as w.</b> Manuscripts use ƿ, but most modern editions and dictionaries (this one included) print <b>w</b> because ƿ is easily mistaken for þ or p. If you see ƿ, read it as w.</div>
<div class="note"><b>Ash (æ) is one letter, not two.</b> It is a single vowel, so <i>æ</i> is never “a then e”. Capital Æ appears in names like Ælfrēd. In alphabetical order æ is usually filed as if it were <i>ae</i>, between <i>ad</i> and <i>af</i>.</div>

<h3 id="dots">3. Dotted ċ and ġ, and missing letters</h3>
<p>Plain <b>c</b> and <b>g</b> each spell two different sounds. Many modern textbooks and dictionaries (including the Wiktionary data used here) add a dot to the “soft” palatal forms: <b>ċ</b> = /tʃ/ (<i>church</i>) and <b>ġ</b> = /j/ (<i>yes</i>). These dots are an editorial aid that scribes never wrote. Many editions leave them out, and then you have to know the word.</p>
<ul><li><b>j, v</b>: not separate letters. <i>i</i> and <i>u</i> were only vowels, and the /v/ sound was spelled <i>f</i> (see below).</li>
<li><b>q</b>: very rare. Old English writes <i>cw</i>, as in {{cwēn|queen}}.</li>
<li><b>z</b>: found only in a few foreign names and loanwords.</li>
<li><b>k</b>: occasional. The /k/ sound is normally written <i>c</i>, as in {{cyning|king}}.</li></ul>
<p>Manuscripts also used older letter shapes, such as long ſ for s and the insular ᵹ for g. Modern editions print the ordinary letters.</p>

<h3 id="typing">4. Typing þ, ð and æ</h3>
<table class="gt"><tr><th></th><th>þ / Þ</th><th>ð / Ð</th><th>æ / Æ</th><th>ƿ</th></tr>
<tr><td>Copy</td><td><button class="cp">þ</button><button class="cp">Þ</button></td><td><button class="cp">ð</button><button class="cp">Ð</button></td><td><button class="cp">æ</button><button class="cp">Æ</button></td><td><button class="cp">ƿ</button></td></tr>
<tr><td>Windows (Alt + numpad)</td><td>Alt 0254 / 0222</td><td>Alt 0240 / 0208</td><td>Alt 0230 / 0198</td><td>-</td></tr>
<tr><td>HTML</td><td>&amp;thorn; / &amp;THORN;</td><td>&amp;eth; / &amp;ETH;</td><td>&amp;aelig; / &amp;AElig;</td><td>&amp;#447;</td></tr>
<tr><td>Linux (Compose key)</td><td>Compose t h</td><td>Compose d h</td><td>Compose a e</td><td>-</td></tr>
<tr><td>Phones</td><td colspan="4">Long-press <i>t</i>, <i>d</i> or <i>a</i> on many keyboards, or add an Icelandic keyboard (it has þ, ð and æ).</td></tr></table>
<p><b>Tip:</b> the Wordhord search box ignores macrons and dots. Typing <i>cild</i> finds ċild, and <i>hus</i> finds hūs. You do need to type þ/ð and æ, though.</p>

<h3 id="silent">5. Rule 1: every letter is pronounced</h3>
<p>Old English has <b>no silent letters</b>. The silent <i>k</i> in <i>knight</i>, <i>w</i> in <i>write</i> and <i>g</i> in <i>gnaw</i> are fossils of sounds that Old English really said. Final <b>-e</b> is pronounced too, as a short “eh”.</p>
<div class="ws">{{cniht|boy, servant (→ knight)|kniçt}} {{wrītan|to write|ˈwriːtɑn}} {{gnagan|to gnaw|ˈɡnɑɣɑn}} {{hlāf|bread, loaf|hlɑːf}} {{hring|ring|hriŋɡ}} {{hnutu|nut|ˈhnutu}} {{sunne|sun|ˈsunne}} {{heorte|heart|ˈheorte}}</div>
<p>Pronounce the <b>h</b> before <i>l, r, n, w</i>: <i>hl</i> sounds like breathing out through an <i>l</i>, and <i>hw</i> like a breathy <i>wh</i> ({{hwæt|what}}). In <b>ng</b>, both letters are said, as in <i>finger</i> (not <i>singer</i>).</p>

<h3 id="vowels">6. Vowels, short and long</h3>
<p>Each vowel letter comes in a short and a long version. Long vowels are the same sound held about twice as long, and textbooks mark them with a macron (ā). The difference can change meaning: {{god|God}} vs {{gōd|good}}. Old English vowels are “pure”, like Italian or German vowels. They do not slide into a second sound the way the vowels of English <i>go</i> or <i>day</i> do.</p>
<table class="gt"><tr><th>Letter</th><th>IPA</th><th>Sounds like…</th><th>Examples</th></tr>
<tr><td class="big">a</td><td>/ɑ/</td><td>a short version of the vowel in <i>father</i></td><td>{{nama|name}} {{land|land}}</td></tr>
<tr><td class="big">ā</td><td>/ɑː/</td><td><i>father</i></td><td>{{stān|stone}} {{hām|home}}</td></tr>
<tr><td class="big">æ</td><td>/æ/</td><td><i>cat</i></td><td>{{fæder|father}} {{æppel|apple}}</td></tr>
<tr><td class="big">ǣ</td><td>/æː/</td><td><i>cat</i>, held longer</td><td>{{sǣ|sea}} {{dǣd|deed}}</td></tr>
<tr><td class="big">e</td><td>/e/</td><td><i>bet</i> (a little closer)</td><td>{{weġ|way}} {{helm|helmet}}</td></tr>
<tr><td class="big">ē</td><td>/eː/</td><td>like <i>day</i> without the glide, German <i>See</i></td><td>{{wē|we}} {{cwēn|queen}}</td></tr>
<tr><td class="big">i</td><td>/i/</td><td><i>bit</i>, tending towards <i>beat</i></td><td>{{sittan|to sit}} {{iċ|I}}</td></tr>
<tr><td class="big">ī</td><td>/iː/</td><td><i>machine</i>, <i>see</i></td><td>{{wīf|woman}} {{rīdan|to ride}}</td></tr>
<tr><td class="big">o</td><td>/o/</td><td>a short, rounded <i>o</i>, between <i>pot</i> and <i>go</i></td><td>{{god|God}} {{gold|gold}}</td></tr>
<tr><td class="big">ō</td><td>/oː/</td><td>like <i>go</i> without the glide, German <i>so</i></td><td>{{gōd|good}} {{bōc|book}}</td></tr>
<tr><td class="big">u</td><td>/u/</td><td><i>put</i>, <i>full</i></td><td>{{sunne|sun}} {{lufu|love}}</td></tr>
<tr><td class="big">ū</td><td>/uː/</td><td><i>food</i></td><td>{{hūs|house}} {{mūþ|mouth}}</td></tr>
<tr><td class="big">y</td><td>/y/</td><td>say <i>i</i> (as in <i>bit</i>) with rounded lips, like German ü</td><td>{{cyning|king}} {{fyllan|to fill}}</td></tr>
<tr><td class="big">ȳ</td><td>/yː/</td><td>say <i>ee</i> with rounded lips, like German <i>früh</i> or French <i>lune</i></td><td>{{fȳr|fire}} {{hȳdan|to hide}}</td></tr></table>
<p>In unstressed endings the vowels are short and less distinct, but you should still give each one its own value: <i>-an</i>, <i>-um</i>, <i>-as</i>.</p>

<h3 id="diphthongs">7. Diphthongs: ea, eo, ie</h3>
<p>These two-letter vowels glide from the first vowel into the second within one syllable, and the first part is stressed. Like single vowels, they come short and long.</p>
<table class="gt"><tr><th>Spelling</th><th>IPA</th><th>How to say it</th><th>Examples</th></tr>
<tr><td class="big">ea / ēa</td><td>/æɑ/, /æːɑ/</td><td>start at <i>cat</i> and glide to <i>father</i>: “a-uh”</td><td>{{eald|old}} {{ēage|eye}} {{ēast|east}}</td></tr>
<tr><td class="big">eo / ēo</td><td>/eo/, /eːo/</td><td>start at <i>bet</i> and glide to <i>o</i>: “e-o”</td><td>{{heorte|heart}} {{dēop|deep}} {{frēond|friend}}</td></tr>
<tr><td class="big">ie / īe</td><td>/iy/?, /iːy/?</td><td>uncertain. Found mainly in early West Saxon, and later spelled <i>i</i> or <i>y</i>. Most teachers say it simply as <i>i</i>.</td><td>{{ġiefan|to give}} {{ġieldan|to pay}}</td></tr></table>
<div class="note">Not every <i>e</i> next to a vowel is a diphthong. After ċ, ġ and sċ, an <i>e</i> was often written only to show the consonant is soft, as in {{sċēap|sheep}} (said roughly “shahp”, /ʃɑːp/). Scholars disagree on the details, and saying the diphthong will not stop anyone understanding you.</div>

<h3 id="consonants">8. Consonants</h3>
<p>Most consonants sound as they do in modern English. These are the ones that differ:</p>
<table class="gt"><tr><th>Spelling</th><th>Sound</th><th>When</th><th>Examples</th></tr>
<tr><td class="big">c</td><td>/k/ <i>kit</i></td><td>the normal “hard” c, always before a, o, u and consonants</td><td>{{cyning|king}} {{cniht|boy}} {{cwēn|queen}}</td></tr>
<tr><td class="big">ċ</td><td>/tʃ/ <i>church</i></td><td>usually next to front vowels (i, e, æ)</td><td>{{ċild|child}} {{iċ|I}} {{ċiriċe|church}}</td></tr>
<tr><td class="big">g</td><td>/ɡ/ <i>go</i></td><td>at the start of a word before back vowels and consonants, and after n (also when doubled, gg)</td><td>{{gōd|good}} {{gold|gold}} {{gnagan|to gnaw}}</td></tr>
<tr><td class="big">g</td><td>/ɣ/</td><td>between back vowels and after l or r: a soft “gargled” g, like Spanish <i>agua</i> or Dutch <i>g</i></td><td>{{dagas|days}} {{fugol|bird}} {{boga|bow}}</td></tr>
<tr><td class="big">ġ</td><td>/j/ <i>yes</i></td><td>usually next to front vowels</td><td>{{ġēar|year}} {{dæġ|day}} {{weġ|way}}</td></tr>
<tr><td class="big">sc / sċ</td><td>/ʃ/ <i>ship</i></td><td>almost always (rarely /sk/ in loanwords and before back vowels in endings)</td><td>{{sċip|ship}} {{fisċ|fish}} {{æsċ|ash}}</td></tr>
<tr><td class="big">cg / ċġ</td><td>/dʒ/ <i>edge</i> (said long)</td><td>-</td><td>{{eċġ|edge}} {{bryċġ|bridge}}</td></tr>
<tr><td class="big">h</td><td>/h/ <i>hat</i></td><td>at the start of a syllable</td><td>{{hūs|house}} {{hund|dog}}</td></tr>
<tr><td class="big">h</td><td>/x/ <i>loch</i></td><td>after back vowels (a, o, u) and elsewhere not before a vowel</td><td>{{dohtor|daughter}} {{feorh|life}}</td></tr>
<tr><td class="big">h</td><td>/ç/ <i>German ich</i></td><td>after front vowels (i, e, æ, y)</td><td>{{niht|night}} {{cniht|boy}}</td></tr>
<tr><td class="big">x</td><td>/ks/ (often /xs/)</td><td>-</td><td>{{fox|fox}} {{seax|knife}} {{æx|axe}}</td></tr>
<tr><td class="big">f, s, þ/ð</td><td>/f s θ/ → /v z ð/</td><td><b>voiced between voiced sounds</b> (vowels, l, r, m, n, etc.), otherwise voiceless. This is why there was no need for letters v and z.</td><td>{{ofer|over}} [v] {{wulfas|wolves}} [v] {{rīsan|to rise}} [z] {{brōþor|brother}} [ð] - but {{wulf|wolf}} [f], {{hūs|house}} [s], {{þing|thing}} [θ]</td></tr>
<tr><td class="big">r</td><td>/r/</td><td>probably rolled or tapped, as in Scottish English, and pronounced everywhere (also after vowels)</td><td>{{heorte|heart}} {{fæder|father}}</td></tr></table>
<div class="note"><b>Double consonants are held long</b>, as in Italian, or as in English <i>book-case</i> or <i>un-named</i>: {{sunne|sun}}, {{mann|person}}, {{sittan|to sit}}, {{biddan|to ask}}. Doubled ff, ss, þþ stay voiceless.</div>

<h3 id="stress">9. Stress</h3>
<p>Stress the <b>first syllable</b> of a word: <b>CYN</b>ing, <b>HEOR</b>te, <b>FÆ</b>der, <b>GOLD</b>hord. The main exceptions are words beginning with the unstressed prefixes <b>ġe-</b>, <b>be-</b> and <b>for-</b> (and most other verb prefixes). These put the stress on the root: ġe<b>SĒON</b> {{ġesēon|to see}}, be<b>HEAL</b>dan {{behealdan|to hold, behold}}, for<b>ĠIE</b>fan {{forġiefan|to forgive}}. Nouns and adjectives often stress their prefixes (e.g. <b>AND</b>swaru “answer”).</p>

<h3 id="pitfalls">10. Common pitfalls for modern English speakers</h3>
<ul class="pit"><li><b>Saying modern vowels.</b> {{hūs}} is “hoos”, not “house”, and {{wīf}} is “weef”, not “wife”. The Great Vowel Shift happened centuries later.</li>
<li><b>Skipping “silent” letters.</b> Say the k in {{cniht}}, the w in {{wrītan}}, and the h in {{hlāf}}.</li>
<li><b>Ignoring length.</b> {{god|God}} vs {{gōd|good}}; {{ful|full}} vs {{fūl|foul}}.</li>
<li><b>Treating y as a consonant or as “ee”.</b> In Old English, y is always a rounded vowel ({{cyning}}).</li>
<li><b>Reading ġ as a hard g.</b> {{ġēar}} begins like <i>year</i>, and {{dæġ}} ends like <i>day</i>.</li>
<li><b>Reading sc as “sk”.</b> {{sċip}} is “ship”, and {{fisċ}} is “fish”.</li>
<li><b>Saying a hard f/s/þ between vowels.</b> {{ofer}} is “over”, not “offer”.</li>
<li><b>Swallowing final -e.</b> {{sunne}} has two syllables: “SUN-neh”.</li>
<li><b>Swallowing h after a vowel.</b> {{niht}} has the throaty sound of German <i>nicht</i>.</li>
<li><b>Thinking þ and ð are different sounds.</b> They are spelling variants of each other.</li></ul>

<h3 id="practice">11. Practice: Beowulf, line 1</h3>
<p class="verse">Hwæt! Wē Gār-Dena &nbsp;&nbsp; in ġēar-dagum</p>
<p class="verse rune">${rs('Hwæt wē Gārdena in ġēardagum')}</p>
<p><i>“Listen! We have heard of the glory of the Spear-Danes in days of yore…”</i> (lines 1–2 together, since the sentence continues into line 2)</p>
<table class="gt syl"><tr><th>Word</th><th>Syllables (stress in CAPS)</th><th>IPA</th><th>Notes</th></tr>
<tr><td>{{hwæt|listen!, what}}</td><td>HWÆT</td><td>[hwæt]</td><td>breathy <i>hw</i>; æ as in <i>cat</i></td></tr>
<tr><td>{{wē|we}}</td><td>WĒ</td><td>[weː]</td><td>long pure <i>e</i>, like German <i>weh</i></td></tr>
<tr><td>{{gār|spear}} + {{Dene|Danes}}</td><td>GĀR · de · na</td><td>[ˈɡɑːrˌdenɑ]</td><td>hard <i>g</i> at the start; rolled r; -<i>a</i> is the genitive plural ending (“of the Danes”)</td></tr>
<tr><td>{{in|in}}</td><td>IN</td><td>[in]</td><td>an unstressed little word</td></tr>
<tr><td>{{ġēardagas|days of yore}}</td><td>ĠĒAR · da · gum</td><td>[ˈjæːɑrˌdɑɣum]</td><td>ġ = <i>y</i>; long diphthong ēa; the g between a and u is the soft [ɣ]; -<i>um</i> is a dative plural</td></tr></table>
<p>Old English verse alliterates on stressed syllables. Here <b>G</b>ār and <b>ġ</b>ēar alliterate, which shows that hard g and soft ġ still counted as the same letter for poets.</p>

<h3 id="quiz">12. Quick self-check</h3>
<p>Try each one aloud, then click to check your answer.</p>
<div class="quiz">
<details><summary>1. How do you pronounce the first sound of <b>ċild</b>?</summary>Like <i>ch</i> in <i>church</i>: /tʃild/. The dot marks the soft ċ.</details>
<details><summary>2. Does <b>cniht</b> have any silent letters?</summary>No. Say every letter: k-n-i-[ç]-t, with the h like German <i>ich</i>.</details>
<details><summary>3. What is the difference between <b>þ</b> and <b>ð</b>?</summary>None in sound. Both spell /θ/ and /ð/, and scribes used them interchangeably.</details>
<details><summary>4. Is the <b>f</b> in <b>ofer</b> said as f or v?</summary>As [v], because it falls between two vowels (voiced sounds). That is why the word became modern <i>over</i>.</details>
<details><summary>5. How is <b>sċip</b> pronounced?</summary>/ʃip/, like modern <i>ship</i> but with the short <i>i</i> of <i>bit</i>.</details>
<details><summary>6. Where is the stress in <b>ġesēon</b>?</summary>On the second syllable, ġe-SĒON, because ġe- is an unstressed prefix.</details>
<details><summary>7. How many syllables does <b>heorte</b> have?</summary>Two: HEOR-te. The <i>eo</i> is one diphthong and the final <i>e</i> is pronounced.</details>
<details><summary>8. What does <b>ƿ</b> stand for, and how do modern editions print it?</summary>It is wynn, /w/, and editions normally print it as <i>w</i>.</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_phonology">Old English phonology</a>” (drawing on Hogg 1992/2011, Campbell 1959, Fulk 2014, Ringe &amp; Taylor 2014), consulted October 2026, for voicing, velar/palatal and gemination details.</li>
<li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Old_English_Latin_alphabet">Old English Latin alphabet</a>”. Wiktionary, “<a href="https://en.wiktionary.org/wiki/Appendix:Old_English_pronunciation">Appendix:Old English pronunciation</a>” (which points to the above).</li>
<li>Word data and IPA in the linked entries: Wiktionary contributors (CC BY-SA 4.0), via Wiktextract/kaikki.org.</li></ul>
<p class="note">Pronunciation guides like this describe a reconstructed standard (late West Saxon, c. 1000 AD). Real speech varied by region and century.</p>`;
async function renderGuide(title,html,anchor){await ready;M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#grammar">Grammar</a> › ${title}</div><article class="card guide" style="cursor:default"><h2 class="pgtitle">${title}</h2>${fill(html)}</article>`;
 const gfind=(w,p)=>{const k=norm(w);if(p){const re=new RegExp('^('+p.replace(/,/g,'|')+')');for(let j=0;j<NK.length;j++)if(NK[j]===k&&IDX[j][0]===w&&re.test(IDX[j][1]))return j}for(let j=0;j<NK.length;j++)if(NK[j]===k&&IDX[j][0]===w&&!/^the letter/.test(IDX[j][2])&&!isFormOf(j))return j;return find(w)};
 M.querySelectorAll('a.exw').forEach(a=>{const i=gfind(a.dataset.w,a.dataset.p);if(i>=0)a.href='#w/'+i;else{a.classList.add('missing');a.removeAttribute('href')}});
 M.querySelectorAll('button.cp').forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText(b.textContent);const t=b.textContent;b.textContent='✓';setTimeout(()=>b.textContent=t,700)});
 if(anchor){const el=document.getElementById(anchor);el&&el.scrollIntoView()}else scrollTo(0,0)}
const grammarLetters=a=>renderGuide('Letters &amp; Pronunciation',GL(),a);
function grammarRoute(h){const p=h.split('/');if(p[1]==='letters')grammarLetters(p[2]);else if(p[1]==='nouns')renderGuide('Nouns, Cases &amp; Gender',GN(),p[2]);else if(p[1]==='pronouns')renderGuide('Pronouns',GP(),p[2]);else grammarHub()}
