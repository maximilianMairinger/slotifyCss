# Slotify css

Wrap all applicable selectors of an css sheet into ::slotted brackets. With a focus on being fast and having a small bundlesize ([3.6kB](https://bundlephobia.com/package/slotify-css@1.0.0)).

## Limitations / Prerequestites

This library is intended to be used as a on the fly compiler running on the frontend. Hence bundle size is of primary concern, not creating a 100% spec compliant compiler nor it being particularly lenient on syntax variations. As such it assumes the input css to be precompiled, thus without unnecessary spaces between css combinators (e.g.: not `div > p`) and stripped of comments. Additionally all [caveats](https://www.npmjs.com/package/css-simple-parser/#caveats) of the used lexer `css-simple-parser` are carried through, which are only partially solvable by precompilating.

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
