/*
Projete uma interface que abstraia interações sobre uma coleção de valores. Um objeto que
fornece esta interface representa uma sequência, e a interface deve de alguma forma tornar
possível para o código que usa este objeto iterar sobre uma sequência, olhando para o valor
dos elementos de que ela é composta e tendo alguma forma de saber quando o fim da sequência
foi atingido.
Quando você tiver especificado sua interface, tente escrever uma função  logFive  que pega um
objeto sequencial e chama  console.log  para seus primeiros 5 elementos - ou menos, se a
sequência tiver menos do que cinco elementos.
Então implemente um tipo de objeto  ArraySeq  que envolve um array e permite interação sobre o
array usando a interface que você desenvolveu. Implemente outro tipo de objeto  RangeSeq  que
itera sobre um intervalo de inteiros
(recebendo os argumentos  from  e  to  em seu construtor).
*/
function ArraySeq (array) {
  this.count = -1
  this.array = array
}
ArraySeq.prototype.limit = function () {
  if (this.count >= this.array.length - 1) { return false }
  this.count++
  return true
}
ArraySeq.prototype.atual = function () {
  return this.array[this.count]
}
function logFive (sequence) {
  for (let i = 0; i < 5; i++) {
    if (!sequence.limit()) { break }
    console.log(sequence.atual())
  }
}
function RangeSeq (inicio, fim) {
  this.count = inicio - 1
  this.fim = fim
}
RangeSeq.prototype.limit = function () {
  if (this.count >= this.fim) { return false }
  this.count++
  return true
}
RangeSeq.prototype.atual = function () {
  return this.count
}

logFive(new ArraySeq([1, 2]))
// → 1
// → 2
logFive(new RangeSeq(100, 1000))
// → 100
// → 101
// → 102
// → 103
// → 104
