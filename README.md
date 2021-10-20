# Slotify css

Wrap all applicable selectors of an css sheet into ::slotted brackets. With a focus on being fast and having a small bundlesize ([3.6kB](https://bundlephobia.com/package/slotify-css)).

## Limitations / Prerequestites

This library is intended to be used as a on the fly compiler running on the frontend. Hence bundle size is of primary concern, not creating a 100% spec compliant compiler nor it being particularly lenient on syntax variations. As such it assumes the input css to be precompiled, thus without unnecessary spaces between css combinators (e.g.: not `div > p` nor `div, h1`) and stripped of comments. Additionally all [caveats](https://www.npmjs.com/package/css-simple-parser/#caveats) of the used lexer `css-simple-parser` are carried through, which are only partially solvable by precompilating.

## Installation

```shell
 $ npm i slotify-css
```

## Usage

```ts
import slotifyCss from "slotify-css"

const slottedCss = slotifyCss(sourceCss)
```

## Example

> Note that the output will not always be correctly indented, unlike shown below.

<table>
<tr>
<th>
<h3 align="center">
Input
</h3>
</th>
<th>
<h3 align="center"> 
Output
</h3>
</th>
</tr>
<tr>
<td>

```css
div h1 {
  color: red;
}

:host(.focus-within:not(.valid)) div h1 {
  color: red;
}

@media (max-with: 700px) {
  div>h1,:root h1.big~p {
    color: red;
  }
}
```
  
</td>
<td>

```css
::slotted(div h1) {
  color: red;
}

:host(.focus-within:not(.valid)) ::slotted(div h1) {
  color: red;
}

@media (max-with: 700px) {
  ::slotted(div>h1),:root ::slotted(h1.big~p) {
    color: red;
  }
}
```
  
</td>
</tr>



</table>


## Contribute

All feedback is appreciated. Create a pull request or write an issue.
