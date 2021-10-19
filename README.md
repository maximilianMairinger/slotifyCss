# Slotify css

Tiny library to wrap all applicable selectors of an css sheet into ::slotted brackets.

## Limitations / Prerequestites

This library is intended to be used as a on the fly compiler running on the frontend. Hence bundle size is of primary concern, not creating a 100% spec complient compiler nor it being particulary lenient on syntax variations. As such it assumes the input css to be precompiled, or at least without unnecenary spaces between css combinators (e.g.: not `div > p`) and stripped of comments. Additionally it carries all [caveats](https://www.npmjs.com/package/css-simple-parser/#caveats) of the used lexer `css-simple-parser` with, which are only partially solveable by precompiling.

## Installation

```shell
 $ npm i slotify-css
```

## Usage



```ts
import slotifyCss from "slotify-css"

const slottedCss = slotifyCss(sourceCss)
```

## Contribute

All feedback is appreciated. Create a pull request or write an issue.
