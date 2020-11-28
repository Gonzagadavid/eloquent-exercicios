/*
Escreva um construtor  Vector  que represente um vetor em duas dimensões do espaço.
Ele recebe os parâmetros  x  e  y  (números), que deve salvar em propriedades de mesmo nome.
Dê ao protótipo de  Vector  dois métodos,  plus  e  minus , que pegam outro vetor como parâmetro
e retornam um novo vetor que tem a soma ou diferença dos valores  x  e  y  dos dois vetores
(o vetor que está em  this  e o passado no parâmetro).
Adicione uma propriedade getter  length  ao protótipo que calcula o tamanho do vetor - isto é,
a distância do ponto ( x, y ) até a origem (0,0).
*/

function Vector (x, y) {
  this.x = x
  this.y = y
}
Vector.prototype.plus = function (novoVetor) {
  const novoX = this.x + novoVetor.x
  const novoY = this.y + novoVetor.y
  return new Vector(novoX, novoY)
}

Vector.prototype.minus = function (novoVetor) {
  const novoX = this.x + novoVetor.x
  const novoY = this.y + novoVetor.y
  return new Vector(novoX, novoY)
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
})
// console.log(new Vector(1, 2))

console.log(new Vector(1, 2).plus(new Vector(2, 3)))
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)))
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length)
// → 5
