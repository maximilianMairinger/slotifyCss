import * as CssParser from "css-simple-parser";


const joinRegex = /\ |>|~|\+/;
const groupingSelectorString = ","
const pseudoString = ":"
const slottedOpenString = "::slotted("
const slottedCloseString = ")"

export function slotifyCss(cssSource: string) {
  const ast = CssParser.parse(cssSource);
  CssParser.traverse(ast, (node) => {
    const sel = node.selector.trim()
    if (sel.startsWith("@")) return

    const selectors = sel.split(groupingSelectorString);
    for (let i = 0; i < selectors.length; i++) {
      const selector = selectors[i]
      
      const pseudo = selector.startsWith(pseudoString)
      if (pseudo) {
        const match = (joinRegex.exec(selector) || {index: selector.length}).index + 1
        const subHost = selector.slice(match)
        if (subHost !== "") selectors[i] = selector.slice(0, match) + slottedOpenString + subHost + slottedCloseString
      }
      else {
        selectors[i] = slottedOpenString + selector + slottedCloseString
      }
    }
    node.selector = selectors.join(groupingSelectorString)
  });
  return CssParser.stringify(ast)
}

export default slotifyCss


