/*
Invertendo um array
Os arrays possuem o método  reverse , que modifica o array invertendo a ordem em que os elementos aparecem.
Para esse exercício, escreva duas funções:  reverseArray  e  reverseArrayInPlace . A primeira ( reverseArray ) recebe
um array como argumento e produz um novo array que tem os mesmos elementos com ordem inversa. A
segunda ( reverseArrayInPlace ) funciona da mesma forma que o método  reverse , só que nesse caso, invertendo
os elementos do próprio array que foi fornecido como argumento. Ambas as funções não devem usar o método
padrão  reverse .
Levando em consideração as notas sobre efeitos colaterais e funções puras do capítulo anterior, qual versão você
espera que seja útil em mais situações? Qual delas é mais eficiente?
// Your code here.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/
// primeira parte feita usando "for"
function reverseArray (array) {
  const novoArray = []

  for (let i = array.length - 1; i >= 0;) {
    novoArray.push(array[i])
    i = i - 1
  } return novoArray
}
console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
// ---------------------------------------------------------------------------------------------------

// primeira parte usando "while" e "arrow function"
reverseArray = array => {
  const novoArray = []
  let cont = array.length - 1

  while (cont >= 0) {
    novoArray.push(array[cont])
    cont = cont - 1
  } return novoArray
}
console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
// ----------------------------------------------------------------------------------------------------

// segunda parte feita com "for"
function reverseArrayInPlace (array) {
  const novoArray = []

  for (let i = array.length - 1; i >= 0;) {
    novoArray.push(array[i])
    i = i - 1
  }
  for (i = 0; i < array.length; i++) {
    array[i] = novoArray[i]
  } return array
}
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
// ----------------------------------------------------------------------------------------------------

// segunda parte usando "while" e "arrow function"
reverseArrayInPlace = array => {
  const novoArray = []
  let cont = array.length - 1

  while (cont >= 0) {
    novoArray.push(array[cont])
    cont = cont - 1
  }cont = 0

  while (cont < array.length) {
    array[cont] = novoArray[cont]
    cont++
  } return array
}
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
// -------------------------------------------------------------------------------------------------------------
