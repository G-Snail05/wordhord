# Wordhord ᚹᚩᚱᛞᚻᚩᚱᛞ

An Old English → Modern English dictionary inspired by takoboto.jp: search by Old English (with or without accents), modern English meaning, or any inflected form; entry pages with inflection tables, example sentences, etymology and Anglo-Saxon futhorc rune transliterations; personal word lists, curated lists and flashcards.

Live site: https://g-snail05.github.io/wordhord/

It is a fully static site (no server). The ~68,500 entries are split into a search index (`data/index.json`), an inflected-form index (`data/forms.json`) and 274 lazily loaded entry shards (`data/e/*.json`). `build.py` regenerates `data/` from the kaikki.org Old English JSONL:

```sh
curl -LO "https://kaikki.org/dictionary/Old%20English/kaikki.org-dictionary-OldEnglish.jsonl"
python3 build.py kaikki.org-dictionary-OldEnglish.jsonl
```

Run locally: `python3 -m http.server` and open http://localhost:8000.

## Attribution & licenses

- **Dictionary data** (`data/`): from [Wiktionary](https://en.wiktionary.org/) by the Wiktionary contributors, extracted with [Wiktextract](https://github.com/tatuylonen/wiktextract) and distributed by [kaikki.org](https://kaikki.org/dictionary/Old%20English/). Licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (and GFDL). The data here is reformatted and shortened, and is shared under CC BY-SA 4.0.
  Ylonen, T. (2022). *Wiktextract: Wiktionary as Machine-Readable Structured Data.* Proceedings of LREC 2022, 1317–1325.
- **Font**: [Noto Sans Runic](https://notofonts.github.io/), © The Noto Project Authors, under the [SIL Open Font License 1.1](fonts/OFL.txt).
- **Font**: [EB Garamond](https://github.com/octaviopardo/EBGaramond12) (`fonts/EBGaramond*.ttf`), © The EB Garamond Project Authors, under the [SIL Open Font License 1.1](fonts/OFL-EBGaramond.txt). Used by the Manuscript theme (light/dark, toggle in the header; defaults to the system preference).
- **Wikipedia**: guide, rune-page and list text is original prose; facts and short quotations are drawn from these English Wikipedia articles (Wikipedia contributors, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)). Adapted material (e.g. the place-name elements, modern forms and examples in the “Place-name elements” list) is shared under CC BY-SA 4.0.
  - [Alliterative verse](https://en.wikipedia.org/wiki/Alliterative_verse)
  - [Anglo-Saxon runes](https://en.wikipedia.org/wiki/Anglo-Saxon_runes)
  - [Beowulf](https://en.wikipedia.org/wiki/Beowulf)
  - [Bind rune](https://en.wikipedia.org/wiki/Bind_rune)
  - [Caistor-by-Norwich astragalus](https://en.wikipedia.org/wiki/Caistor-by-Norwich_astragalus)
  - [Cynewulf](https://en.wikipedia.org/wiki/Cynewulf)
  - [Elder Futhark](https://en.wikipedia.org/wiki/Elder_Futhark)
  - [Exeter Book Riddles](https://en.wikipedia.org/wiki/Exeter_Book_Riddles)
  - [Franks Casket](https://en.wikipedia.org/wiki/Franks_Casket)
  - [Kenning](https://en.wikipedia.org/wiki/Kenning)
  - [List of elements in place names in the British Isles](https://en.wikipedia.org/wiki/List_of_elements_in_place_names_in_the_British_Isles)
  - [Litotes](https://en.wikipedia.org/wiki/Litotes)
  - [Old English Latin alphabet](https://en.wikipedia.org/wiki/Old_English_Latin_alphabet)
  - [Old English grammar](https://en.wikipedia.org/wiki/Old_English_grammar)
  - [Old English literature](https://en.wikipedia.org/wiki/Old_English_literature)
  - [Old English phonology](https://en.wikipedia.org/wiki/Old_English_phonology)
  - [Old English rune poem](https://en.wikipedia.org/wiki/Old_English_rune_poem)
  - [Rune poem](https://en.wikipedia.org/wiki/Rune_poem)
  - [Runes](https://en.wikipedia.org/wiki/Runes)
  - [Runic (Unicode block)](https://en.wikipedia.org/wiki/Runic_%28Unicode_block%29)
  - [Ruthwell Cross](https://en.wikipedia.org/wiki/Ruthwell_Cross)
  - [Seax of Beagnoth](https://en.wikipedia.org/wiki/Seax_of_Beagnoth)
  - [Sievers's theory of Anglo-Saxon meter](https://en.wikipedia.org/wiki/Sievers%27s_theory_of_Anglo-Saxon_meter)
  - [Spong Hill](https://en.wikipedia.org/wiki/Spong_Hill)
  - [The Dream of the Rood](https://en.wikipedia.org/wiki/The_Dream_of_the_Rood)
  - [Thorn (letter)](https://en.wikipedia.org/wiki/Thorn_%28letter%29)
  - [Undley bracteate](https://en.wikipedia.org/wiki/Undley_bracteate)
  - [V2 word order](https://en.wikipedia.org/wiki/V2_word_order)
  - [Vadstena bracteate](https://en.wikipedia.org/wiki/Vadstena_bracteate)
  - [Verner's law](https://en.wikipedia.org/wiki/Verner%27s_law)
  - [Wynn](https://en.wikipedia.org/wiki/Wynn)
  - [Younger Futhark](https://en.wikipedia.org/wiki/Younger_Futhark)
- **Wikisource** (page text CC BY-SA 4.0): [*Beowulf*, Harrison & Sharp (1883)](https://en.wikisource.org/wiki/Beowulf_%28Harrison_and_Sharp%29), used to check the Beowulf list; [Old English Rune Poem, Dickins (1915)](https://en.wikisource.org/wiki/Rune_poems), quoted on the rune pages. Both editions are public domain. “Our translation” passages are ours, CC BY-SA 4.0.
- **Wikimedia Commons images**: `img/franks-casket-front.jpg`: John W. Schulze, [Commons](https://commons.wikimedia.org/wiki/File:Franks_Casket_front.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). `img/seax-beagnoth-futhorc.jpg`: BabelStone, [Commons](https://commons.wikimedia.org/wiki/File:Seax_of_Beagnoth_futhorc.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
- Rune transliterations are generated automatically with a simplified futhorc mapping. They are not historical attestations.

## Site licence

- Wordhord's own content (guide text, list selections and notes, our translations) and the derived data in `data/`: **CC BY-SA 4.0** ([LICENSE-CONTENT](LICENSE-CONTENT)), consistent with the share-alike sources above. Images keep their own licences (above).
- Code (`*.js`, `*.py`, `*.html`, `*.css`): **MIT** ([LICENSE](LICENSE)).
