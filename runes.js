// Runes hub: converter, History of the Futhorc, The Runes
// Rune data: glyph, display name, dictionary link (w@pos~gloss), meaning, sound(s), transliteration, Elder Futhark ancestor [glyph,name], note
const RUNES=[
['ᚠ','feoh','feoh@noun','wealth, cattle','/f/, [v] between voiced sounds','f',['ᚠ','*fehu']],
['ᚢ','ūr','ūr@noun','aurochs','/u(ː)/','u',['ᚢ','*ūruz']],
['ᚦ','þorn','þorn@noun','thorn','/θ/, [ð] between voiced sounds','þ',['ᚦ','*þurisaz']],
['ᚩ','ōs','ōs@noun~god','a god (the poem plays on Latin <i>os</i> “mouth”)','/o(ː)/','o',['ᚨ','*ansuz'],'One of three runes split from Elder ᚨ (see āc and æsc).'],
['ᚱ','rād','rād@noun','riding, journey','/r/','r',['ᚱ','*raidō']],
['ᚳ','ċēn','ċēn@noun','torch','/k/, /kʲ/, /tʃ/','c',['ᚲ','*kauną']],
['ᚷ','ġyfu','ġyfu@noun','gift','/ɡ/, [ɣ], /j/','g',['ᚷ','*gebō']],
['ᚹ','wynn','wynn@noun','joy','/w/','w',['ᚹ','*wunjō'],'Borrowed into the Latin alphabet as the letter ƿ.'],
['ᚻ','hæġl','hæġl@noun','hail','/h/, [x], [ç]','h',['ᚺ','*hagalaz'],'Early English inscriptions use the single-barred ᚺ; the double-barred ᚻ is first attested in 698.'],
['ᚾ','nȳd','nȳd@noun','need, plight','/n/','n',['ᚾ','*naudiz']],
['ᛁ','īs','īs@noun','ice','/i(ː)/','i',['ᛁ','*īsaz']],
['ᛄ','ġēr','ġēr@noun','year, harvest','/j/','j',['ᛃ','*jēra-'],'Also written ᛡ in inscriptions; manuscripts give ᛡ the separate name īor (see below).'],
['ᛇ','ēoh','ēoh@noun~yew','yew tree','/i(ː)/, [x], [ç]','ï',['ᛇ','*ī(h)waz']],
['ᛈ','peorð','peorþ@noun','unknown','/p/','p',['ᛈ','*perþō'],'The meaning of the name is unknown; the poem only says it brings “play and laughter”.'],
['ᛉ','eolh','eolh@noun','unknown, perhaps “elk” (the poem says <i>eolh-secg</i> “elk-sedge”)','none: used only to write Latin x','x',['ᛉ','*algiz']],
['ᛋ','siġel','siġel@noun~sun','sun','/s/, [z] between voiced sounds','s',['ᛊ','*sōwilō']],
['ᛏ','tīr','tīr@noun','unknown: <i>tīr</i> “glory”, or the god Tīw','/t/','t',['ᛏ','*tīwaz'],'Some manuscripts name it <i>ti</i> or <i>tyr</i>.'],
['ᛒ','beorc','beorc@noun','birch tree','/b/','b',['ᛒ','*berkanan']],
['ᛖ','eh','eh@noun','horse, steed','/e(ː)/','e',['ᛖ','*ehwaz']],
['ᛗ','mann','mann@noun','man, person','/m/','m',['ᛗ','*mannaz'],'Used in manuscripts as a shorthand for the word <i>mann</i>.'],
['ᛚ','lagu','lagu@noun~sea','water, sea, lake','/l/','l',['ᛚ','*laguz']],
['ᛝ','ing','Ing@name','Ing, a hero or god (perhaps Ingui-Frea)','/ŋɡ/, /ŋ/','ŋ',['ᛜ','*ingwaz']],
['ᛟ','ēþel','ēþel@noun','inherited land, homeland','/ø(ː)/','œ',['ᛟ','*ōþala-'],'Used in the <i>Beowulf</i> manuscript as shorthand for the word <i>ēþel</i>.'],
['ᛞ','dæġ','dæġ@noun','day','/d/','d',['ᛞ','*dagaz']],
['ᚪ','āc','āc@noun','oak tree','/ɑ(ː)/','a',['ᚨ','*ansuz'],'New Anglo-Frisian rune, split from Elder ᚨ; earliest examples 6th century.'],
['ᚫ','æsċ','æsċ@noun','ash tree','/æ(ː)/','æ',['ᚨ','*ansuz'],'New Anglo-Frisian rune, split from Elder ᚨ.'],
['ᚣ','ȳr','ȳr@noun','unknown, perhaps “bow”','/y(ː)/','y',null,'English addition with no Elder ancestor; the name may just be modelled on <i>ūr</i>.'],
['ᛡ','īor','','unknown, perhaps “beaver” or “eel”; the poem calls it a river-fish that feeds on land','/i(ː)o/?','io',null,'Page called it a pseudo-rune: in inscriptions ᛡ is only a variant of ġēr.'],
['ᛠ','ēar','','unknown, perhaps “earth” (the dictionary’s <i>ēar</i> means “wave” or “ear of grain”)','/æ(ː)ɑ/','ea',null,'English addition with no Elder ancestor.']];
const XRUNES=[
['ᛣ','calc','','chalk? chalice? sandal?','/k/','k',['ᚳ','modified ċēn'],'Ruthwell Cross, Bramham Moor ring, Kingmoor ring and manuscripts. A Northumbrian-era addition, made from ċēn to separate hard /k/ from palatalized c.'],
['ᚸ','gār','gār@noun','spear','/ɡ/, [ɣ]','ḡ',['ᚷ','modified ġyfu'],'Ruthwell Cross, probably Bewcastle Cross, and manuscripts. Made from ġyfu to separate hard /g/ from palatalized g.'],
['ᛢ','cweorð','','unknown','/k/? (for Latin q?)','q',null,'Manuscripts only. Page thought it pointless, perhaps invented just to match Latin Q.'],
['ᛥ','stān','stān@noun','stone','/st/','st',null,'Manuscripts only; another of Page’s “pseudo-runes”.'],
['ᛤ','(no name)','','unknown','/k/','k̄',null,'Found only on the Ruthwell Cross, where it seems to replace calc before a fronted vowel.']];
// Old English Rune Poem, text as printed in Dickins (1915) via Wikisource (public domain). Translations are ours.
const RP={
'ᚠ':['Feoh byþ frofur fira gehwylcum;<br>sceal ðeah manna gehwylc miclun hyt dælan<br>gif he wile for drihtne domes hleotan.','Wealth is a comfort to every man; yet each must share it out freely if he wants to win glory before the Lord.'],
'ᚢ':['Ur byþ anmod ond oferhyrned,<br>felafrecne deor, feohteþ mid hornum<br>mære morstapa; þæt is modig wuht.','The aurochs is fierce and high-horned, a very dangerous beast; it fights with its horns, a famous moor-stalker: that is a bold creature.'],
'ᚦ':['Ðorn byþ ðearle scearp; ðegna gehwylcum<br>anfeng ys yfyl, ungemetum reþe<br>manna gehwelcum, ðe him mid resteð.','Thorn is very sharp; grasping it is bad for any thane, and cruel beyond measure to anyone who lies among them.'],
'ᚩ':['Os byþ ordfruma ælere spræce,<br>wisdomes wraþu ond witena frofur<br>and eorla gehwam eadnys ond tohiht.','The mouth (or god) is the source of all speech, the prop of wisdom and comfort of the wise, and to every nobleman a blessing and a hope.'],
'ᚱ':['Rad byþ on recyde rinca gehwylcum<br>sefte ond swiþhwæt, ðamðe sitteþ on ufan<br>meare mægenheardum ofer milpaþas.','Riding is easy for every warrior in the hall, and very strenuous for the one who sits on a powerful horse over the long roads.'],
'ᚳ':['Cen byþ cwicera gehwam, cuþ on fyre<br>blac ond beorhtlic, byrneþ oftust<br>ðær hi æþelingas inne restaþ.','The torch is known to every living person by its fire, pale and bright; it burns most often where nobles rest indoors.'],
'ᚷ':['Gyfu gumena byþ gleng and herenys,<br>wraþu and wyrþscype and wræcna gehwam<br>ar and ætwist, ðe byþ oþra leas.','Giving is an honour and a praise among men, a support and a dignity; and for every outcast with nothing else, help and a living.'],
'ᚹ':['Wenne bruceþ, ðe can weana lyt<br>sares and sorge and him sylfa hæfþ<br>blæd and blysse and eac byrga geniht.','Joy is had by the one who knows little of woe, pain or sorrow, and has prosperity and bliss and plenty of strongholds as well.'],
'ᚻ':['Hægl byþ hwitust corna; hwyrft hit of heofones lyfte,<br>wealcaþ hit windes scura; weorþeþ hit to wætere syððan.','Hail is the whitest of grains; it whirls from heaven’s air, wind-gusts toss it, then it turns to water.'],
'ᚾ':['Nyd byþ nearu on breostan; weorþeþ hi þeah oft niþa bearnum<br>to helpe and to hæle gehwæþre, gif hi his hlystaþ æror.','Need is tight in the chest; yet it often turns into help and healing for the children of men, if they heed it in time.'],
'ᛁ':['Is byþ ofereald, ungemetum slidor,<br>glisnaþ glæshluttur gimmum gelicust,<br>flor forste geworuht, fæger ansyne.','Ice is very cold and boundlessly slippery; it glitters glass-clear, most like gems, a floor made by frost, fair to see.'],
'ᛄ':['Ger byþ gumena hiht, ðonne God læteþ,<br>halig heofones cyning, hrusan syllan<br>beorhte bleda beornum ond ðearfum.','Harvest is men’s hope, when God, the holy king of heaven, lets the earth give bright fruits to rich and needy.'],
'ᛇ':['Eoh byþ utan unsmeþe treow,<br>heard hrusan fæst, hyrde fyres,<br>wyrtrumun underwreþyd, wyn on eþle.','The yew is a tree rough on the outside, hard and fast in the earth, keeper of fire, propped by its roots, a joy on an estate.'],
'ᛈ':['Peorð byþ symble plega and hlehter<br>wlancum [on middum], ðar wigan sittaþ<br>on beorsele bliþe ætsomne.','Peorð is always play and laughter for the proud, where warriors sit happily together in the beer-hall.'],
'ᛉ':['Eolh-secg eard hæfþ oftust on fenne<br>wexeð on wature, wundaþ grimme,<br>blode breneð beorna gehwylcne<br>ðe him ænigne onfeng gedeþ.','Elk-sedge usually lives in the fen; it grows in water and wounds grimly, burning with blood any man who grabs it.'],
'ᛋ':['Sigel semannum symble biþ on hihte,<br>ðonne hi hine feriaþ ofer fisces beþ,<br>oþ hi brimhengest bringeþ to lande.','The sun is always a hope to sailors as they cross the fish’s bath, until the sea-horse (the ship) brings them to land.'],
'ᛏ':['Tir biþ tacna sum, healdeð trywa wel<br>wiþ æþelingas; a biþ on færylde<br>ofer nihta genipu, næfre swiceþ.','Tir is a sign; it keeps faith well with princes; it is always on its course over the mists of night and never fails.'],
'ᛒ':['Beorc byþ bleda leas, bereþ efne swa ðeah<br>tanas butan tudder, biþ on telgum wlitig,<br>heah on helme hrysted fægere,<br>geloden leafum, lyfte getenge.','The birch has no fruit, yet bears shoots without seed; it is lovely in its branches, high in its crown, beautifully adorned, laden with leaves, touching the sky.'],
'ᛖ':['Eh byþ for eorlum æþelinga wyn,<br>hors hofum wlanc, ðær him hæleþ ymb[e]<br>welege on wicgum wrixlaþ spræce<br>and biþ unstyllum æfre frofur.','The horse is the joy of princes among warriors, a steed proud of its hooves, when wealthy riders trade talk about it; and to the restless it is always a comfort.'],
'ᛗ':['Man byþ on myrgþe his magan leof:<br>sceal þeah anra gehwylc oðrum swican,<br>forðum drihten wyle dome sine<br>þæt earme flæsc eorþan betæcan.','A man in his joy is dear to his kinsman; yet each must fail the other, for the Lord by his decree will hand that poor flesh to the earth.'],
'ᛚ':['Lagu byþ leodum langsum geþuht,<br>gif hi sculun neþan on nacan tealtum<br>and hi sæyþa swyþe bregaþ<br>and se brimhengest bridles ne gym[eð].','Water seems endless to people when they must venture out in a rocking ship, the sea-waves terrify them, and the sea-horse ignores its bridle.'],
'ᛝ':['Ing wæs ærest mid East-Denum<br>gesewen secgun, oþ he siððan est<br>ofer wæg gewat; wæn æfter ran;<br>ðus Heardingas ðone hæle nemdun.','Ing was first seen by men among the East-Danes, until he later went away over the waves, with his wagon running after; so the Heardings named the hero.'],
'ᛟ':['Eþel byþ oferleof æghwylcum men,<br>gif he mot ðær rihtes and gerysena on<br>brucan on bolde bleadum oftast.','Home is very dear to every man, if there in his house he may enjoy what is right and fitting, with plenty most of the time.'],
'ᛞ':['Dæg byþ drihtnes sond, deore mannum,<br>mære metodes leoht, myrgþ and tohiht<br>eadgum and earmum, eallum brice.','Day is the Lord’s messenger, dear to men, the Creator’s glorious light, joy and hope to rich and poor, useful to all.'],
'ᚪ':['Ac byþ on eorþan elda bearnum<br>flæsces fodor, fereþ gelome<br>ofer ganotes bæþ; garsecg fandaþ<br>hwæþer ac hæbbe æþele treowe.','On land the oak feeds the flesh (of pigs) for the children of men; often it travels over the gannet’s bath (as a ship), and the ocean tests whether the oak keeps noble faith.'],
'ᚫ':['Æsc biþ oferheah, eldum dyre<br>stiþ on staþule, stede rihte hylt,<br>ðeah him feohtan on firas monige.','The ash is very tall and dear to men, sturdy on its base; it holds its ground rightly though many men fight against it.'],
'ᚣ':['Yr byþ æþelinga and eorla gehwæs<br>wyn and wyrþmynd, byþ on wicge fæger,<br>fæstlic on færelde, fyrdgeatewa sum.','Ȳr is a joy and an honour to every prince and nobleman; it looks fine on horseback and is reliable on a journey, a piece of war-gear.'],
'ᛡ':['Iar byþ eafix and ðeah a bruceþ<br>fodres on foldan, hafaþ fægerne eard<br>wætre beworpen, ðær he wynnum leofaþ.','Īor is a river-fish, yet always takes its food on land; it has a fair home ringed with water, where it lives in delight.'],
'ᛠ':['Ear byþ egle eorla gehwylcun,<br>ðonn[e] fæstlice flæsc onginneþ,<br>hraw colian, hrusan ceosan<br>blac to gebeddan; bleda gedreosaþ,<br>wynna gewitaþ, wera geswicaþ.','Ēar is hateful to every nobleman, when the flesh, the corpse, steadily begins to grow cold and, pale, to choose the earth as its bedfellow; fruits fall, joys pass away, promises fail.']};
const RNAME=Object.fromEntries([...RUNES,...XRUNES].map(r=>[r[0],r[1]]));
const RC=g=>`<a class="exw exr" data-rg="${g}"><b>${RNAME[g]}</b><span class="rune">${g}</span><span class="gl">rune entry</span></a>`;
const cp=g=>'U+'+g.codePointAt(0).toString(16).toUpperCase();
const rcid=g=>'r-'+g.codePointAt(0).toString(16).toUpperCase();
function runeCard(r,n){const [g,nm,lk,mean,snd,tr,eld,note]=r,st=RP[g];
 return `<div class="rcard" id="${rcid(g)}"><a class="rglyph" data-rg="${g}" title="Open the rune entry">${g}</a><div class="rbody"><div class="rname">${n?`<span class="rnum">${n}</span> `:''}<a class="rnl" data-rg="${g}">${nm}</a> <small class="rent">rune entry →</small></div>
<div class="rword">Word: ${lk?exw(lk,'',''):`<small class="nodict">${nm[0]==='('?'none':'not in the dictionary'}</small>`}</div>
<dl><dt>Meaning</dt><dd>${mean}</dd><dt>Sound</dt><dd>${snd}</dd><dt>Transliteration</dt><dd><b>${tr}</b></dd><dt>Unicode</dt><dd><code>${cp(g)}</code> <button class="cp" title="Copy rune">${g}</button></dd><dt>Elder Futhark</dt><dd>${eld?`<span class="rune">${eld[0]}</span> ${eld[1]}`:'none (English innovation)'}</dd></dl>
${note?`<p class="rnote">${note}</p>`:''}${st?`<details class="rpo"><summary>Rune Poem stanza</summary><p class="oe">${st[0]}</p><p class="tr">${st[1]} <small>(our translation)</small></p></details>`:''}</div></div>`}
const RT=(t,tr)=>`<span class="rune rl">${t}</span>${tr?` <i>${tr}</i>`:''}`;
const IMG=(src,alt,cap)=>`<figure class="rfig"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
const GH=()=>`<p class="lead">Before the Latin alphabet arrived with Christian missionaries, the English wrote with runes. Their rune-row is called the <b>futhorc</b> after its first six letters, ${RT('ᚠᚢᚦᚩᚱᚳ','f u þ o r c')}. This page traces where the runes came from, how the English changed them, the objects and poems that preserve them, and how the Latin alphabet replaced them. For each rune in turn, see <a href="#runes/alphabet">The Runes</a>.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#runes/history/origins">Origins: the Elder Futhark</a></li><li><a href="#runes/history/anglofrisian">The Anglo-Frisian futhorc</a></li><li><a href="#runes/history/growth">From 28 to 33 runes</a></li><li><a href="#runes/history/objects">Key objects</a></li><li><a href="#runes/history/manuscripts">Runes in manuscripts</a></li><li><a href="#runes/history/poem">The Old English Rune Poem</a></li><li><a href="#runes/history/decline">Decline, and þ and ƿ</a></li><li><a href="#runes/history/younger">Futhorc vs Younger Futhark</a></li><li><a href="#runes/history/quiz">Quick self-check</a></li><li><a href="#runes/history/sources">Sources</a></li></ol></div>

<h3 id="origins">1. Origins: the Elder Futhark</h3>
<p>The oldest runic alphabet is the <b>Elder Futhark</b>: 24 runes, used by Germanic peoples from roughly the 2nd to the 8th centuries. Sophus Bugge deciphered it in 1865. Its runes fall into three groups of eight, called <i>ættir</i> (singular <i>ætt</i>). The first complete row to survive is on the Kylver Stone, from about 400.</p>
<p class="alpha rune">ᚠᚢᚦᚨᚱᚲᚷᚹ ᚺᚾᛁᛃᛇᛈᛉᛊ ᛏᛒᛖᛗᛚᛜᛞᛟ</p>
<p><b>When did runes begin?</b> The earliest secure inscriptions, from Vimose in Denmark, date to about 160 AD, so the script was probably created by the 1st century AD.</p>
<p><b>Where did runes come from?</b> Nobody knows for certain, and scholars still disagree:</p>
<ul><li>Many derive the runes from one of the <b>Old Italic</b> alphabets of the Alps (North Etruscan or Raetic).</li>
<li>Others prefer the <b>Latin</b> alphabet.</li>
<li>An older idea, that the Goths took their letters from <b>Greek</b>, is now ruled out, because the Vimose inscriptions are too early.</li></ul>
<div class="note">The names of the runes are only reconstructions (marked *): <i>*fehu</i> “cattle, wealth”, <i>*ūruz</i> “aurochs”, and so on. Our main evidence for them is the later rune poems, including the Old English one.</div>

<h3 id="anglofrisian">2. The Anglo-Frisian futhorc</h3>
<p>From the 5th century, people in Britain and Frisia adapted the Elder Futhark to their own languages. Nobody knows where this happened. One theory puts it in Frisia, with the runes spreading to Britain later. Another has the runes reaching Britain from the continent first and being changed there before going on to Frisia. Both theories have weaknesses.</p>
<p>The main early change came from a sound change. In these dialects, Germanic <i>a</i> split into several vowels. So the single Elder rune ${RT('ᚨ')} <i>a</i> became three runes:</p>
<table class="rtab"><tr><th>Elder</th><th>Futhorc</th><th>Name</th><th>Sound</th></tr>
<tr><td rowspan="3"><span class="rune rl">ᚨ</span> *ansuz</td><td><span class="rune rl">ᚩ</span></td><td>${RC("ᚩ")}</td><td>o</td></tr>
<tr><td><span class="rune rl">ᚪ</span></td><td>${RC("ᚪ")}</td><td>a</td></tr>
<tr><td><span class="rune rl">ᚫ</span></td><td>${RC("ᚫ")}</td><td>æ</td></tr></table>
<p>That gave 26 runes. The earliest ōs ${RT('ᚩ')} may be on the 5th-century <b>Undley bracteate</b>. Āc ${RT('ᚪ')} appears by the 6th century, for example on the Schweindorf solidus. The double-barred ${RT('ᚻ')} hæġl, which became standard, is first found in England as late as 698, on St Cuthbert’s coffin; earlier English inscriptions use the single-barred ${RT('ᚺ')}.</p>
<p>Two more English additions, ${RT('ᚣ')} ${RC("ᚣ")} for <i>y</i> and ${RT('ᛠ')} <b>ēar</b> for <i>ea</i>, brought the row to its standard <b>28 runes</b>. Most of the old runes kept their place in the row, and most had a direct English counterpart to an Elder name: ${RT('ᚠ')} ${RC("ᚠ")}, ${RT('ᚱ')} ${RC("ᚱ")}, ${RT('ᛁ')} ${RC("ᛁ")}, ${RT('ᛞ')} ${RC("ᛞ")}.</p>

<h3 id="growth">3. From 28 to 33 runes: the Northumbrian additions</h3>
<p>In the 9th century the English row grew to about 33 runes, and some writers used even more. The additions are attested mainly in the north, in Northumbria, and in manuscripts:</p>
<ul><li>${RT('ᛣ')} <b>calc</b> (k) and ${RT('ᚸ')} ${RC("ᚸ")} (hard g) are modified forms of ċēn and ġyfu. By then, c and g each stood for two sounds: hard /k/ and /g/, and their “soft” palatal variants (compare <i>ċ</i>, <i>ġ</i> in our spellings). The new runes kept the hard sounds apart. Calc is found on the Ruthwell Cross, the Bramham Moor and Kingmoor rings and elsewhere. Gār is on the Ruthwell Cross and probably the Bewcastle Cross.</li>
<li>${RT('ᛤ')} is an unnamed rune found only on the Ruthwell Cross.</li>
<li>${RT('ᛢ')} <b>cweorð</b> and ${RT('ᛥ')} ${RC("ᛥ")} occur only in manuscripts. R. I. Page called them pseudo-runes, and suggested cweorð was invented just to match Latin Q.</li>
<li>${RT('ᛡ')} <b>īor</b> appears in the Rune Poem and in manuscripts. In inscriptions it is only a variant of ġēr, and Page called it a pseudo-rune as well.</li></ul>
<p>Fewer than 200 objects with futhorc inscriptions survive from five or more centuries of use. That is too few to say how common runic writing was.</p>

<h3 id="objects">4. Key objects</h3>
<div class="obj"><h4>Caistor-by-Norwich astragalus (5th century)</h4>
<p>A roe-deer ankle bone from a cremation urn in Norfolk, found in 1937. It is inscribed ${RT('ᚱᚨᛇᚺᚨᚾ','raïhan')} “roe deer” in Elder Futhark runes, including the single-barred h. This is the earliest runic inscription found in England, and it may have been brought over from Scandinavia.</p></div>
<div class="obj"><h4>Undley bracteate (5th century)</h4>
<p>A gold bracteate found in Suffolk; its image adapts a Roman coin of Constantine the Great. The inscription reads right to left: ${RT('ᚷᚫᚷᚩᚷᚫ ᛗᚫᚷᚫ ᛗᛖᛞᚢ','gægogæ mægæ medu')}.</p>
<ul><li><i>mægæ medu</i> is read as “reward for relatives”: compare {{mǣġ@noun~relative|kinsman}} and {{mēd@noun|reward}}.</li>
<li><i>gægogæ</i> seems to be a magical invocation or battle cry. It is written with bind runes: twigs on the gyfu X stand for the vowels.</li>
<li>It has the earliest known ōs ${RT('ᚩ')} beside æsc ${RT('ᚫ')}.</li></ul></div>
<div class="obj"><h4>The Franks Casket (early 8th century)</h4>
${IMG('img/franks-casket-front.jpg','Front panel of the Franks Casket, carved whalebone with a runic border','Front panel of the Franks Casket, British Museum. Photo: John W. Schulze, <a href="https://commons.wikimedia.org/wiki/File:Franks_Casket_front.jpg">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>; resized.')}
<p>A whalebone box, probably made in Northumbria. It is now in the British Museum, except the right panel, which is in the Bargello in Florence. It mixes Old English and Latin, and runes and Roman letters. A runic riddle runs round the front panel and is about the box’s own material:</p>
<p class="verse rune">ᚠᛁᛋᚳ ᛫ ᚠᛚᚩᛞᚢ ᛫ ᚪᚻᚩᚠᚩᚾᚠᛖᚱᚷ …</p>
<p><i>fisc · flodu · ahofonferg … hronæsban</i>: “The flood cast up the fish on the mountain-cliff … Whale’s bone” (translation: Hough and Corbett, quoted by Wikipedia). Compare {{fisċ@noun|fish}}, {{flōd@noun|flood, tide}}, {{āhebban@verb|lift up}}, {{hran@noun|whale}} and {{bān@noun|bone}}. Note <i>fisc</i> spelled ${RT('ᛋᚳ')}, with two runes for <i>sc</i>. Beside the Magi, the runes ${RT('ᛗᚫᚷᛁ','magi')} label the three wise men.</p></div>
<div class="obj"><h4>The Ruthwell Cross and <i>The Dream of the Rood</i></h4>
<p>An 18-foot stone cross, probably 8th-century Northumbrian work. Runic verses carved on it are close to lines of <i>The Dream of the Rood</i>, the poem preserved in the 10th-century Vercelli Book. One passage reads:</p>
<p class="verse rune">ᛣᚱᛁᛋᛏ ᚹᚫᛋ ᚩᚾ ᚱᚩᛞᛁ</p>
<p><i>Krist wæs on rodi.</i> “Christ was on the cross.” Compare {{Crist@noun|Christ}}, {{wæs@verb|was}} and {{rōd@noun|cross}}. The cross uses the northern additions, calc ${RT('ᛣ')} and gār ${RT('ᚸ')}.</p>
<div class="note">Caveats: the runes may have been added later than the cross itself, perhaps as late as the 10th century. Much of the reading is a reconstruction going back to J. M. Kemble (1842).</div></div>
<div class="obj"><h4>The Seax of Beagnoth, or Thames scramasax</h4>
${IMG('img/seax-beagnoth-futhorc.jpg','Detail of the inlaid futhorc on the Seax of Beagnoth','The futhorc on the Seax of Beagnoth, British Museum. Photo: BabelStone, <a href="https://commons.wikimedia.org/wiki/File:Seax_of_Beagnoth_futhorc.jpg">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>; resized.')}
<p>An iron knife found in the Thames at Battersea in 1857, now in the British Museum. Its blade is inlaid with the only complete 28-letter futhorc known, and with the name ${RT('ᛒᛠᚷᚾᚩᚦ','Beagnoþ')}, probably the maker or owner.</p>
<p class="verse rune">ᚠᚢᚦᚩᚱᚳᚷᚹᚻᚾᛁᛄᛇᛈᛉᛋᛏᛒᛖᛝᛞᛚᛗᛟᚪᚫᚣᛠ</p>
<p>The row is not in the usual order: ᛝᛞᛚᛗ instead of ᛗᛚᛝ…, and ȳr comes before ēar. The ᛋ is small and squeezed in, and several letter-forms are unusual: ēþel, for example, is written as a “lantern rune”. Ralph Elliott took the absence of the Northumbrian runes to suggest a southern, Kentish origin.</p>
<div class="note">The date is uncertain: the Wikipedia article on the seax dates it to the 10th century, while a caption in the article on Anglo-Saxon runes says 9th.</div></div>
<div class="obj"><h4>Others</h4><ul><li>The Malton pin shows the start of the row: ${RT('ᚠᚢᚦᚩᚱᚳᚷᚹᛚᚪᚫᛖ')}.</li><li>The Harford Farm brooch (c. 650): <i>luda:gibœtæsigilæ</i>, “Luda repaired the brooch”.</li><li>The Brandon antler (9th century): <i>wohs wildum deoræ an</i>, “[this] grew on a wild animal”.</li></ul></div>
<p><small>On the Vadstena bracteate: we have not found a source that compares it with the English material, so we give only the facts. It is a Swedish gold bracteate of about 500, now lost (stolen in 1938), with a full Elder Futhark in three groups of eight. It shows the older 24-rune row from which the futhorc grew.</small></p>

<h3 id="manuscripts">5. Runes in manuscripts</h3>
<p>From the 7th century, runic writing in England was closely tied to Christian scriptoria. Scribes sometimes used a rune as shorthand for its own name. In the <i>Beowulf</i> manuscript, for example, the ēþel rune ${RT('ᛟ')} stands for the word {{ēþel@noun|homeland}}, and ${RT('ᛗ')} could stand for {{mann@noun|person}}. Runes are used in this way in the Exeter Book, the 10th-century collection that also holds about 94 riddles, which often end with “say what I am called”.</p>
<p>The poet <b>Cynewulf</b> (9th century, perhaps late 8th to early 10th) signed four poems: <i>The Fates of the Apostles</i>, <i>Juliana</i>, <i>Elene</i> and <i>Christ II</i>. In each, the letters of his name appear as runes woven into the verse, where each rune also stands for its name-word and fits the meaning of the passage. In <i>Juliana</i> and <i>Elene</i> the name is spelled Cynewulf; in the other two it is <i>Cynwulf</i>, without the e:</p>
<p class="verse rune">ᚳᚣᚾᛖᚹᚢᛚᚠ</p>
<p>Runes also appear as cipher and number signs in a few manuscripts. And manuscripts are the only source for several rune names, including the rune list in Codex Vindobonensis 795 that gives our standard order.</p>

<h3 id="poem">6. The Old English Rune Poem</h3>
<p>The poem has a short stanza for each of 29 runes. It is dated to the 8th or 9th century. Each stanza is a small riddle whose answer is the rune’s name, for example:</p>
<p class="oe">${RP['ᛁ'][0]}</p><p class="tr">${RP['ᛁ'][1]} <small>(our translation)</small></p>
<p>Its only manuscript, Cotton Otho B.x, burned in the Cotton library fire of 1731. All modern texts depend on the copy printed by George Hickes in 1705, prepared by Humfrey Wanley. The rune names printed beside the stanzas may have been added by Hickes or Wanley, so the poem is not independent evidence for the names. It is, however, the only source that puts them in context. Every stanza is on <a href="#runes/alphabet">The Runes</a> page, under its rune.</p>

<h3 id="decline">7. Decline, and the runes that survived as letters</h3>
<p>Missionaries brought the Latin alphabet at the end of the 6th century, and by the 8th it had overtaken runes for most purposes. Runes were rare by the Norman Conquest of 1066, and they later fell out of use, though some knowledge of them lasted into the 12th century.</p>
<p>The rune-row did leave something behind. Two runes were taken into the Latin alphabet to write English sounds that Latin lacked:</p>
<ul><li>${RT('ᚦ')} ${RC("ᚦ")} became the letter <b>þ</b>. It stayed in common use through most of the Middle English period, until the spelling <i>th</i> spread from the 14th century.</li>
<li>${RT('ᚹ')} ${RC("ᚹ")} became the letter <b>ƿ</b>, replacing the earlier spelling <i>uu</i> for /w/. It was used until about 1300.</li></ul>
<p>Modern editions, including this dictionary, print ƿ as <i>w</i>. The Rune Poem’s stanza for wynn, though, begins <i>Wenne</i> in the text we use.</p>
<div class="note">Runes and magic: R. I. Page rejected the popular idea that, after the conversion, runes were especially pagan or magical in England. St Cuthbert’s coffin, made at the heart of the Church, has runic inscriptions. There is some evidence of magical use, though, such as the possible <i>alu</i> formula in mirrored runes on cremation urns from Spong Hill.</div>

<h3 id="younger">8. How the futhorc differs from the Younger Futhark</h3>
<table class="rtab"><tr><th></th><th>Anglo-Saxon futhorc</th><th>Younger Futhark</th></tr>
<tr><td>Where</td><td>England and Frisia</td><td>Scandinavia and Viking Age settlements abroad</td></tr>
<tr><td>When</td><td>5th century to the High Middle Ages</td><td>9th century on, after a transitional period in the 7th and 8th</td></tr>
<tr><td>Size</td><td><b>Grew</b> from 24 to 28, then about 33</td><td><b>Shrank</b> from 24 to 16</td></tr>
<tr><td>Why</td><td>New runes for new vowels (ᚩ ᚪ ᚫ ᚣ ᛠ) and for hard vs soft c/g (ᛣ ᚸ)</td><td>Fewer runes: voiced and voiceless consonants were no longer told apart in writing</td></tr>
<tr><td>Variants</td><td>Northumbrian additions</td><td>Long-branch (Danish) and short-twig (Swedish and Norwegian)</td></tr></table>
<p>The English and Scandinavian rune poems agree on many names (feoh/fé, rād/reið, hæġl/hagall, nȳd/nauðr, īs/íss), but þorn is English only. In Scandinavia the rune is <i>þurs</i>, “giant”.</p>

<h3 id="quiz">9. Quick self-check</h3>
<div class="quiz">
<details><summary>1. Why does the futhorc have three runes (ᚩ ᚪ ᚫ) where the Elder Futhark has one (ᚨ)?</summary>A sound change in Anglo-Frisian split Germanic <i>a</i> into several vowels, and each one got its own rune: ōs, āc and æsc.</details>
<details><summary>2. What is the earliest runic inscription found in England?</summary>The Caistor-by-Norwich astragalus, 5th century, reading <i>raïhan</i> “roe deer”. It is still in Elder Futhark runes.</details>
<details><summary>3. Which object carries the only complete 28-rune futhorc?</summary>The Seax of Beagnoth (Thames scramasax), in the British Museum.</details>
<details><summary>4. Which poem do the Ruthwell Cross runes echo?</summary><i>The Dream of the Rood</i>, preserved in the Vercelli Book.</details>
<details><summary>5. Which two runes became Latin letters?</summary>Þorn (þ) and wynn (ƿ).</details>
<details><summary>6. Why can’t we check the Rune Poem against its manuscript?</summary>Cotton Otho B.x burned in 1731. Only Hickes’s 1705 printing survives.</details>
<details><summary>7. Is the origin of runes settled?</summary>No. Old Italic and Latin origins are both argued for. Only a Greek origin via the Goths has been ruled out.</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia: “<a href="https://en.wikipedia.org/wiki/Anglo-Saxon_runes">Anglo-Saxon runes</a>” (history, origin, development, additional runes, usage, inscription list), “<a href="https://en.wikipedia.org/wiki/Elder_Futhark">Elder Futhark</a>”, “<a href="https://en.wikipedia.org/wiki/Runes">Runes</a>”, “<a href="https://en.wikipedia.org/wiki/Younger_Futhark">Younger Futhark</a>”.</li>
<li>Wikipedia, on the objects: “<a href="https://en.wikipedia.org/wiki/Caistor-by-Norwich_astragalus">Caistor-by-Norwich astragalus</a>”, “<a href="https://en.wikipedia.org/wiki/Undley_bracteate">Undley bracteate</a>”, “<a href="https://en.wikipedia.org/wiki/Franks_Casket">Franks Casket</a>” (with the Hough and Corbett translation it quotes), “<a href="https://en.wikipedia.org/wiki/Ruthwell_Cross">Ruthwell Cross</a>”, “<a href="https://en.wikipedia.org/wiki/The_Dream_of_the_Rood">The Dream of the Rood</a>”, “<a href="https://en.wikipedia.org/wiki/Seax_of_Beagnoth">Seax of Beagnoth</a>”, “<a href="https://en.wikipedia.org/wiki/Vadstena_bracteate">Vadstena bracteate</a>”, “<a href="https://en.wikipedia.org/wiki/Spong_Hill">Spong Hill</a>”.</li>
<li>Wikipedia, on texts and letters: “<a href="https://en.wikipedia.org/wiki/Old_English_rune_poem">Old English rune poem</a>”, “<a href="https://en.wikipedia.org/wiki/Rune_poem">Rune poem</a>”, “<a href="https://en.wikipedia.org/wiki/Cynewulf">Cynewulf</a>”, “<a href="https://en.wikipedia.org/wiki/Exeter_Book_Riddles">Exeter Book Riddles</a>”, “<a href="https://en.wikipedia.org/wiki/Thorn_(letter)">Thorn (letter)</a>”, “<a href="https://en.wikipedia.org/wiki/Wynn">Wynn</a>”, “<a href="https://en.wikipedia.org/wiki/Bind_rune">Bind rune</a>”.</li>
<li>Rune Poem text: Bruce Dickins, <i>Runic and Heroic Poems of the Old Teutonic Peoples</i> (1915), on <a href="https://en.wikisource.org/wiki/Rune_poems">Wikisource</a> (public domain). The translations on these pages are ours.</li>
<li>Images: Wikimedia Commons, with the licences given in each caption.</li>
<li>Linked words: Wiktionary via Wiktextract/kaikki.org (CC BY-SA 4.0).</li></ul>`;
const PR=(r,lat,tr,where)=>`<div class="prx"><p class="verse rune">${r}</p><p class="where">${where}</p><details><summary>Show reading</summary><p><i>${lat}</i>: ${tr}</p></details></div>`;
const GR=()=>`<p class="lead">Every rune of the Anglo-Saxon futhorc, in its traditional order. Each card shows the rune and its Old English name (both open the rune’s own dictionary entry), the ordinary word the name comes from where we have it, the name’s meaning, its sound, the usual transliteration, its Unicode code point, the Elder Futhark rune it comes from, and its stanza from the Old English Rune Poem. For the story behind them, see <a href="#runes/history">History of the Futhorc</a>.</p>
<div class="toc card"><b>Contents</b><ol>
<li><a href="#runes/alphabet/row1">Runes 1–8</a></li><li><a href="#runes/alphabet/row2">Runes 9–16</a></li><li><a href="#runes/alphabet/row3">Runes 17–24</a></li><li><a href="#runes/alphabet/row4">Runes 25–29: English additions</a></li><li><a href="#runes/alphabet/extra">Northumbrian and manuscript runes</a></li><li><a href="#runes/alphabet/uncertain">Notes on the uncertain runes</a></li><li><a href="#runes/alphabet/converter">How our converter spells</a></li><li><a href="#runes/alphabet/writing">Direction, dividers and bind-runes</a></li><li><a href="#runes/alphabet/practice">Practice: real inscriptions</a></li><li><a href="#runes/alphabet/quiz">Quick self-check</a></li><li><a href="#runes/alphabet/sources">Sources</a></li></ol></div>
<p class="alpha rune">${RUNES.map(r=>r[0]).join('')}</p>
<p>The order and names follow Codex Vindobonensis 795, as given by Wikipedia. Other lists differ in small ways: some put ᛞ before ᛟ, and two manuscripts put ᚣ before ᛠ. The first 24 runes continue the Elder Futhark in its own order, so we group them in its three sets of eight (<i>ættir</i>). Sounds are given in IPA; one rune covers both a short and a long vowel, shown as (ː). Click a <b>Unicode</b> button to copy the rune.</p>
<h3 id="row1">Runes 1–8</h3><div class="rgrid">${RUNES.slice(0,8).map((r,i)=>runeCard(r,i+1)).join('')}</div>
<h3 id="row2">Runes 9–16</h3><div class="rgrid">${RUNES.slice(8,16).map((r,i)=>runeCard(r,i+9)).join('')}</div>
<h3 id="row3">Runes 17–24</h3><div class="rgrid">${RUNES.slice(16,24).map((r,i)=>runeCard(r,i+17)).join('')}</div>
<h3 id="row4">Runes 25–29: English additions</h3><p>Ōs (4) was already a new form of Elder ᚨ. Āc and æsc are its siblings from the same split; ȳr, īor and ēar have no Elder ancestor.</p><div class="rgrid">${RUNES.slice(24).map((r,i)=>runeCard(r,i+25)).join('')}</div>
<h3 id="extra">Northumbrian and manuscript runes</h3><p>These runes are not in the main list of Codex Vindobonensis 795. Hickes printed calc and cweorð at the foot of the Rune Poem, and stān and gār on a second plate, but the poem has no stanzas for them.</p><div class="rgrid">${XRUNES.map(r=>runeCard(r,0)).join('')}</div>
<h3 id="uncertain">Notes on the uncertain runes</h3>
<ul><li><b>ēar ᛠ</b>: a real English rune for the diphthong <i>ea</i>, but the meaning of its name is unknown (perhaps “earth”). Its stanza is about death and the grave.</li>
<li><b>īor ᛡ</b>: named only in manuscripts. The poem describes a river-fish that feeds on land (a beaver? an eel?). In inscriptions the shape is just a variant of ġēr, so Page called it a pseudo-rune.</li>
<li><b>calc ᛣ</b> and <b>gār ᚸ</b>: genuine late additions, found on Northumbrian monuments such as the Ruthwell Cross. They mark hard /k/ and /g/.</li>
<li><b>cweorð ᛢ</b> and <b>stān ᛥ</b>: manuscripts only, never carved. Page thought them pointless, cweorð perhaps made up to match Latin Q.</li>
<li><b>ᛤ</b>: one monument only (Ruthwell), no name.</li>
<li><b>ġēr</b>: the dictionary links above go to <i>ġēr</i>, a variant of {{ġēar@noun|year}}.</li></ul>
<div class="note">The poem’s stanzas are riddles on the names, so some “meanings” come only from the poem itself, and the names beside the stanzas may have been added by the poem’s 18th-century editors (see <a href="#runes/history/poem">History § 6</a>).</div>

<h3 id="converter">How our converter spells</h3>
<p>The <a href="#runes/converter">converter</a> and the small runes beside every dictionary word use a simple letter-for-rune scheme. Real Anglo-Saxon spelling was less regular, so treat our output as a modern transliteration, not a reconstruction of how a carver would have written a word.</p>
<table class="rtab"><tr><th>Spelling</th><th>Our runes</th><th>What real inscriptions do</th></tr>
<tr><td>sc</td><td><span class="rune rl">ᛋᚳ</span></td><td>Two runes, as in ᚠᛁᛋᚳ <i>fisc</i> on the Franks Casket.</td></tr>
<tr><td>ng</td><td><span class="rune rl">ᛝ</span></td><td>One rune (ing) in our output, but inscriptions also write ᚾᚷ, as in <i>hring</i> on the Wheatley Hill ring.</td></tr>
<tr><td>ea</td><td><span class="rune rl">ᛠ</span></td><td>One rune (ēar) in our output, but ᛖᚪ and ᚫᚪ are also found, as on the Mortain Casket.</td></tr>
<tr><td>c / ċ</td><td><span class="rune rl">ᚳ</span></td><td>Ċēn covered hard /k/ and soft /tʃ/ alike. We drop the dot, as the runes did; only later Northumbrian carvers added calc ᛣ for hard k.</td></tr>
<tr><td>g / ġ</td><td><span class="rune rl">ᚷ</span></td><td>The same: one rune, until gār ᚸ was added in the north. We never output ᚸ.</td></tr>
<tr><td>k</td><td><span class="rune rl">ᛣ</span></td><td>Calc: rare in our spellings.</td></tr>
<tr><td>þ / ð / th</td><td><span class="rune rl">ᚦ</span></td><td>Þorn for both sounds.</td></tr>
<tr><td>long vowels (ā, ē…)</td><td>same rune as short</td><td>Runes did not mark vowel length.</td></tr>
<tr><td>x, y, œ, j</td><td><span class="rune rl">ᛉ ᚣ ᛟ ᛄ</span></td><td>eolh, ȳr, ēþel, ġēr.</td></tr>
<tr><td>q, z (modern)</td><td><span class="rune rl">ᚳᚹ ᛋ</span></td><td>A convenience for modern text; we never use cweorð.</td></tr></table>

<h3 id="writing">Writing direction, word dividers and bind-runes</h3>
<ul><li><b>Direction</b>: our converter writes left to right. Real inscriptions were not fixed: the Undley bracteate, for example, runs right to left.</li>
<li><b>Word dividers</b>: inscriptions often separate words with dots. The Franks Casket uses ${RT('᛫')} and ${RT('᛬')}, and Harford Farm has <i>luda:gibœtæsigilæ</i>. Our converter turns each space into ${RT('᛫')}.</li>
<li><b>Bind-runes</b>: two (rarely three) runes joined on a shared stave, mainly to save space. English examples include a doubled ᛞ in <i>gebiddaþ</i> (Thornhill III) and <i>Hadda</i>, and ᛖ+ᚱ in <i>broþer</i> on Northumbrian stycas (coins). Sources disagree on how common they were: Wikipedia’s “Anglo-Saxon runes” calls them common for so small a corpus, while “Bind rune” calls them not common. Our converter never makes bind-runes.</li></ul>

<h3 id="practice">Practice: reading real inscriptions</h3>
<p>Try to transliterate each one using the cards above, then reveal the answer. All of these are genuine inscriptions; the translations are from our sources, as noted on the History page.</p>
${PR('ᛗᚫᚷᛁ','magi','“the Magi”, labelling the three wise men.','Franks Casket, front panel')}
${PR('ᚠᛁᛋᚳ ᛫ ᚠᛚᚩᛞᚢ','fisc · flodu','“fish · flood”, the start of the whale-bone riddle. Note ᛋᚳ for sc.','Franks Casket, front panel')}
${PR('ᛒᛠᚷᚾᚩᚦ','Beagnoþ','a man’s name, probably the maker or owner. Note ēar ᛠ for ea.','Seax of Beagnoth')}
${PR('ᛣᚱᛁᛋᛏ ᚹᚫᛋ ᚩᚾ ᚱᚩᛞᛁ','Krist wæs on rodi','“Christ was on the cross.” Note calc ᛣ for the hard k.','Ruthwell Cross')}
${PR('ᚷᚫᚷᚩᚷᚫ ᛗᚫᚷᚫ ᛗᛖᛞᚢ','gægogæ mægæ medu','a cry or invocation, then “reward for relatives”. The original runs right to left, with bind-runes in the first word.','Undley bracteate (shown left to right)')}
${PR('ᚱᚨᛇᚺᚨᚾ','raïhan','“roe deer”. This is Elder Futhark, not futhorc: note ᚨ and the single-barred ᚺ.','Caistor-by-Norwich astragalus')}

<h3 id="quiz">Quick self-check</h3>
<div class="quiz">
<details><summary>1. What sound does ᚩ make, and what is it called?</summary>o; ōs.</details>
<details><summary>2. Which rune is named after the oak, and which after the ash?</summary>ᚪ āc (a) and ᚫ æsc (æ).</details>
<details><summary>3. Read ᚦᛟᚱᚾ.</summary>Careful: ᛟ is ēþel (œ), not ōs. With ōs it would be ᚦᚩᚱᚾ, <i>þorn</i>, which is how our converter writes it.</details>
<details><summary>4. Which rune has a sound value but was used only for Latin x?</summary>ᛉ eolh.</details>
<details><summary>5. Name two runes found only in manuscripts.</summary>Cweorð ᛢ and stān ᛥ.</details>
<details><summary>6. How would our converter write <i>sċip</i>, and is that historical?</summary>ᛋᚳᛁᛈ. Yes for the sc: the Franks Casket writes <i>fisc</i> the same way.</details>
<details><summary>7. Which Elder rune lies behind ᛋ siġel?</summary>ᛊ *sōwilō, “sun”.</details></div>

<h3 id="sources">Sources</h3>
<ul class="src"><li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Anglo-Saxon_runes">Anglo-Saxon runes</a>”: rune table (names, meanings, transliterations, sound values), order, additional runes, combinations and digraphs table, usage.</li>
<li>Wikipedia, “<a href="https://en.wikipedia.org/wiki/Elder_Futhark">Elder Futhark</a>” (with its name table) for the Elder ancestors; “<a href="https://en.wikipedia.org/wiki/Old_English_rune_poem">Old English rune poem</a>” on Hickes and the rune names; “<a href="https://en.wikipedia.org/wiki/Bind_rune">Bind rune</a>”; “<a href="https://en.wikipedia.org/wiki/Runic_(Unicode_block)">Runic (Unicode block)</a>”, with code points checked against the Unicode character names.</li>
<li>Inscriptions: Wikipedia articles on the Franks Casket, Seax of Beagnoth, Ruthwell Cross, Undley bracteate and Caistor-by-Norwich astragalus (see the <a href="#runes/history/sources">History sources</a>).</li>
<li>Rune Poem text: Dickins (1915) on <a href="https://en.wikisource.org/wiki/Rune_poems">Wikisource</a> (public domain). The translations are ours, and we have kept his spellings (e.g. <i>Wenne</i>, <i>Iar</i>).</li>
<li>Linked words: Wiktionary via Wiktextract/kaikki.org (CC BY-SA 4.0).</li></ul>`;
const RHUB=[['converter','ᚱᚢᚾ','Rune converter','Type Old English and see it written in the futhorc, rune by rune.','Tool'],
['history','ᚠᚢᚦᚩᚱᚳ','History of the Futhorc','From the Elder Futhark to the Franks Casket, Ruthwell Cross, Rune Poem and the letters þ and ƿ.','Guide'],
['alphabet','ᚪᚫᚩ','The Runes','Every rune: name, meaning, sound, Unicode, ancestor and Rune Poem stanza, plus practice inscriptions.','Guide']];
function runeHub(){M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › Runes</div><h2 class="pgtitle">Runes <span class="rune">ᚱᚢᚾᚪ</span></h2><p>The Anglo-Saxons’ own alphabet, the futhorc. Convert text, learn its history, or meet each rune.</p>
<div class="quick">${RHUB.map(h=>`<a class="card q" href="#runes/${h[0]}"><span class="tag">${h[4]}</span><span class="rune hubr">${h[1]}</span><b>${h[2]}</b><span>${h[3]}</span></a>`).join('')}</div>`;scrollTo(0,0)}
async function runeConverter(txt){await ready;M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#runes">Runes</a> › Rune converter</div><div class="card" style="cursor:default"><h2>Rune converter</h2><p>Type Old English (or modern) text to see it in the Anglo-Saxon futhorc.</p>
<textarea id="rt" rows="3" aria-label="Text to convert" placeholder="Hwæt! Wē Gār-Dena in ġēardagum"></textarea><div id="ro" class="rune runeout"></div><h3>Rune by rune</h3><div id="rbk" class="runes"></div>
<p><small>The rune spellings come from a simplified letter-to-rune mapping, and are not historical inscriptions. See <a href="#runes/alphabet/converter">how our converter spells</a> for what it simplifies, and <a href="#runes/alphabet">The Runes</a> for every rune.</small></p></div>`;
 $('#rt').value=txt||'Hwæt wē Gārdena in ġēardagum';
 const up=()=>{const v=$('#rt').value,r=runes(v);$('#ro').textContent=r.map(x=>x[1]).join('');$('#rbk').innerHTML=r.map(rtile).join('')};$('#rt').oninput=up;up();scrollTo(0,0)}
function runesRoute(h){const p=h.split('/');
 if(h==='runes')return runeHub();
 if(p[1]==='converter')return runeConverter(p.slice(2).join('/'));
 if(p[1]==='history')return renderGuide('History of the Futhorc',GH(),p[2],['runes','Runes']);
 if(p[1]==='alphabet')return renderGuide('The Runes',GR(),p[2],['runes','Runes']);
 // legacy/unknown links (#rune, #converter, #runes/convert, #runes/<text>) go to the converter
 const rest=p[0]==='runes'&&p[1]&&!/^(convert|conv)$/.test(p[1])?'/'+p.slice(1).join('/'):'';
 location.replace('#runes/converter'+rest)}

// Rune dictionary entries (pos 'rune', built by build.py from runes_src.json)
function runeEntry(i,e){const r=e.r,st=r.poem,tot=29,num=r.n?`Rune ${r.n} of ${tot}`:'Later / manuscript rune';
 const nav=(d)=>{const j=i+d;return IDX[j]&&IDX[j][1]==='rune'?`<a href="#w/${j}">${d<0?'← ':''}<span class="rune">${IDX[j][0]}</span>${d>0?' →':''}</a>`:'<span></span>'};
 const others=e.f.filter(f=>f[1]==='other name').map(f=>f[0]);
 M.innerHTML=`<div class="crumbs"><a href="#">Home</a> › <a href="#runes">Runes</a> › <a href="#runes/alphabet/${rcid(e.w)}">The Runes</a> › ${esc(r.name)}</div>
<div class="card rentry" style="cursor:default"><div class="rehead"><div class="rebig">${e.w}</div><div><span class="hw" style="font-size:30px">${esc(r.name)}</span> <span class="posrune">rune</span><div class="pos">${num}</div><p class="def">${r.mean}</p>
<button class="cp recp" title="Copy rune">${e.w}</button></div></div>
<dl class="redl"><dt>Name</dt><dd><b>${esc(r.name)}</b>${r.ms?` · in Codex Vindobonensis 795: <i>${esc(r.ms)}</i>`:''}</dd>
<dt>Word</dt><dd>${r.wid>=0?`<a class="exw" href="#w/${r.wid}"><b>${esc(IDX[r.wid][0])}</b><span class="rune">${rs(IDX[r.wid][0])}</span><span class="gl">${esc(IDX[r.wid][2])}</span></a>`:'<small class="nodict">no matching word entry in the dictionary</small>'}</dd>
<dt>Meaning</dt><dd>${r.mean}</dd><dt>Sound</dt><dd>${r.sound}</dd><dt>Transliteration</dt><dd><b>${esc(r.tr)}</b></dd><dt>Unicode</dt><dd><code>${r.cp}</code></dd>
<dt>Elder Futhark</dt><dd>${r.elder?`<span class="rune">${r.elder[0]}</span> ${esc(r.elder[1])}`:'none (English innovation)'}</dd>
${others.length?`<dt>Also found as</dt><dd>${others.map(esc).join(', ')} <small>(spellings from the manuscript name list and the Rune Poem, plus search helpers)</small></dd>`:''}</dl>
${r.note?`<p class="rnote">${r.note}</p>`:''}
<h3>Rune Poem</h3>${st?`<p class="oe">${st[0]}</p><p class="tr">${st[1]} <small>(our translation)</small></p><p><small>Old English text: Dickins (1915), via <a href="https://en.wikisource.org/wiki/Rune_poems">Wikisource</a>.</small></p>`:'<p>The Old English Rune Poem has no stanza for this rune.</p>'}
<h3>Use as a logogram</h3>${r.logo?`<ul>${r.logo.map(x=>`<li>${x.t} <small>(${x.src.map(s=>`<a href="${s[1]}">${s[0]}</a>`).join('; ')})</small></li>`).join('')}</ul>`:'<p>None recorded in the sources we have read.</p>'}
<p class="renav">${nav(-1)} <a href="#runes/alphabet/${rcid(e.w)}">See it in The Runes guide</a> · <a href="#runes/converter">Converter</a>${r.cid>=0?` · <a href="#w/${r.cid}">Wiktionary letter entry</a>`:''} ${nav(1)}</p></div>`;
 M.querySelector('.recp').onclick=function(){navigator.clipboard?.writeText(e.w);this.textContent='✓';setTimeout(()=>this.textContent=e.w,700)};scrollTo(0,0)}
