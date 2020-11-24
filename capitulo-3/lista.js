/*
A lista
Objetos tratados como agrupamentos genéricos de valores, podem ser usados para construir diversos tipos de
estrutura de dados. Uma estrutura de dados comum é a lista (não se confunda com o array). A lista é um conjunto
de objetos, sendo que o primeiro objeto contém uma referência para o segundo, o segundo para o terceiro, e
assim por diante.
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
Uma das vantagens das listas é que elas podem compartilhar partes de sua estrutura. Por exemplo, se eu
criasse dois novos valores  {value: 0, rest: list}  e  {value: -1, rest: list}  (sendo que  list  é uma referência à
variável definida anteriormente), ambas serão listas independentes que compartilham a mesma estrutura que foi usada para
criar os três últimos elementos. Além disso, a lista original ainda é uma lista válida com três
elementos.
Escreva a função  arrayToList  que constrói uma estrutura de dados similar à estrutura anterior quando fornecido
 [1, 2, 3]  como argumento e, escreva também, a função  listToArray  que produz um array a partir de uma lista.
Além disso, implemente uma função auxiliar  prepend  que receberá um elemento e uma lista e será responsável
por criar uma nova lista com esse novo elemento adicionado ao início da lista original e, por fim, crie a função  nth
que recebe uma lista e um número como argumentos e retorna o elemento que está na posição informada pelo
número ou  undefined  caso não exista elemento em tal posição.
Caso não tenha feito ainda, implemente a versão recursiva da função  nth .
// Your code here.
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/
// primeira parte feita com "for"

function arrayToList (array) {
  let list = null

  for (let i = array.length - 1; i >= 0;) {
    list = { value: array[i], rest: list }
    i = i - 1
  } return list
}
console.log(arrayToList([10, 20, 30, 40]))
// → {value: 10, rest: {value: 20, rest: null}}
// -------------------------------------------------------------------------------

// primeira parte feita com "while" e "arrow fumction"
arrayToList = (array) => {
  let list = null
  let cont = array.length - 1

  while (cont >= 0) {
    list = { value: array[cont], rest: list }
    cont = cont - 1
  } return list
}
console.log(arrayToList([10, 20, 30, 40, 50]))
// → {value: 10, rest: {value: 20, rest: null}}
// ----------------------------------------------------------------------------

//segunda parte usando a primeira parte com for
function arrayToList (array) {
  let list = null

  for (let i = array.length - 1; i >= 0;) {
    list = { value: array[i], rest: list}
    i = i - 1
  } return list
}

function listToArray (list) {
  let array = []

  for(i = list ; i ; i = i.rest ){
    array.push(i.value)
   }return array
}
console.log(arrayToList([10, 20, 30, 40, 50]))
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//----------------------------------------------------------------------------------------------------------

//terceira parte
function prepend(elemento, list){
  let array = []

  for(i = list ; i ; i = i.rest ){
    array.push(i.value)
   }
   array.unshift(elemento)
let lista = null
   for (let i = array.length - 1; i >= 0;) {
     lista = { value: array[i], rest: lista }
     i = i - 1
   } return lista
 
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

//------------------------------------------------------------------------

//quarta parte usando a função array to list com "while" para tranformar o array da questão em lista
arrayToList = (array) => {
  let list = null
  let cont = array.length - 1

  while (cont >= 0) {
    list = { value: array[cont], rest: list }
    cont = cont - 1
  } return list
}

function nth (list, item){
  let array = []

  for(i = list ; i ; i = i.rest ){
    array.push(i.value)
   }
   let elemento = array[item]
return elemento
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 10));
// → underfined
//-------------------------------------------------------------------------------------------------------------

