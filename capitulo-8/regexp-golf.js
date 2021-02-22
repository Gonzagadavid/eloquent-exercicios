/*
Regexp golf
"Golf de Código" é um termo usado para o jogo de tentar escrever um programa com o menor número de
caracteres possível. Parecido, o regexp golf é a prática de escrever pequenas expressões regulares para achar
um determinado padrão (e apenas esse padrão).
Escreva uma expressão regular que testa quando qualquer das sub-strings dadas ocorre em um texto. A
expressão regular deverá achar apenas strings contendo uma das sub-strings dadas. Não se preocupe com
limites de palavras a não ser que seja explicitamente pedido. Quando a sua expressão funcionar, veja se
consegue fazê-la menor.
"car" e "cat"
"pop" e "prop"
"ferret", "ferry", e "ferrari"
Qualquer palavra terminando em "ious"
Um espaço em branco seguido por um ponto, vírgula, dois-pontos, ou ponto-e-vírgula
Uma palavra com mais de seis letras
Uma palavra sem a letra "e"
*/

// Fill in the regular expressions
verify(/ca[rt]/,
  ['my car', 'bad cats'],
  ['camper', 'high art'])
verify(/pr?op/,
  ['pop culture', 'mad props'],
  ['plop'])
verify(/ferr[eya]/,
  ['ferret', 'ferry', 'ferrari'],
  ['ferrum', 'transfer A'])
verify(/ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness'])
verify(/\s[.,:;]/,
  ['bad punctuation .'],
  ['escape the dot'])
verify(/\w\S{6}/,
  ['hottentottententen'],
  ['no', 'hotten totten tenten'])
verify(/\b[^\We]+\b/,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape'])
function verify (regexp, yes, no) {
// Ignore unfinished tests
  if (regexp.source === '...') return
  yes.forEach(function (s) {
    if (!regexp.test(s)) { console.log("Failure to match '" + s + "'") }
  })
  yes.forEach(function (s) {
    if (regexp.test(s)) { console.log("Correct to match '" + s + "'") }
  })
  no.forEach(function (s) {
    if (regexp.test(s)) { console.log("Unexpected match for '" + s + "'") }
  })
}
