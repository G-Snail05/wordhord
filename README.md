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
- Rune transliterations are generated automatically with a simplified futhorc mapping. They are not historical attestations.
