/* Elementos por Nome de Tags
O método getElementsByTagName retorna todos os elementos filhos com um dado nome de tag.
Implemente sua própria versão disso, como uma função normal, a qual recebe um nó e uma string
(com o nome da tag) como argumentos e retorna um array contendo todos os nós de elementos
descendentes com a dada tag.
Para encontrar o nome de tag de um elemento, use sua propriedade tagName mesmo nome de tag todo
em caixa alta. Use os métodos ou toLowerCase. Mas note que isso irá retornar o toUpperCase para
compensar isso.
*/

function byTagName (node, tagName) {
  return node.getElementsByTagName(tagName)
}
console.log(byTagName(document.body, 'h1').length)
// → 1
console.log(byTagName(document.body, 'span').length)
// → 3
const para = document.querySelector('p')
console.log(byTagName(para, 'span').length)
// → 2
