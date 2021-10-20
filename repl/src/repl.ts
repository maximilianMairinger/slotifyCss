import slotifyCss from "../../app/src/slotifyCss"
//const testElem = document.querySelector("#test")

console.log(slotifyCss(`@media (max-with: 700px) {
  div>h1,:root h1.big~p {
    color: red;
  }
}
`))
