/*
Comparação "profunda"
O operador  ==  compara objetos pelas suas identidades. Entretanto, algumas vezes, você pode preferir comparar
os valores das suas propriedades de fato.
Escreva a função  deepEqual  que recebe dois valores e retorna  true  apenas se os valores forem iguais ou se
forem objetos que possuem propriedades e valores iguais quando comparados usando uma chamada recursiva
de  deepEqual .
Para saber se a comparação entre duas coisas deve ser feita pela identidade (use o operador  ===  para isso) ou
pela verificação de suas propriedades, você pode usar o operador  typeof . Se ele produzir  "object"  para ambos
os valores, você deverá fazer uma comparação "profunda". Entretanto, você deve levar em consideração uma exceção:
 devido a um acidente histórico,  typeof null  também produz  "object" .
// Your code here.
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/

// codigo feito conforme requisitado pelo exercicio e
// implentado teste para varias situações diferentes
function deepEqual (primeiro, segundo) {
  if (typeof primeiro !== typeof segundo) return false
  if (primeiro == null && segundo != null) return false
  if (primeiro != null && segundo == null) return false
  if (primeiro == null && segundo == null) return true
  if (typeof segundo === 'object') {
    const primeiroValores = Object.values(primeiro)
    const segundoValores = Object.values(segundo)
    if (primeiroValores.length !== segundoValores.length) return false
    for (let i = 0; i < primeiroValores.length; i++) {
      if (typeof primeiroValores[i] === 'object') {
        if (deepEqual(primeiroValores[i], segundoValores[i]) !== true) return false
      } else {
        if (primeiroValores[i] !== segundoValores[i]) return false
      }
    } return true
  }
  if (primeiro !== segundo) return false
  return true
}
const obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
// → true
console.log(deepEqual(obj, { here: { is: 'an' }, object: 3 }))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: null }))
// → false
console.log(deepEqual(obj, 36))
// → false
console.log(deepEqual(obj, null))
// → false
console.log(deepEqual(null, null))
// → true
console.log(deepEqual(null, 36))
// → false
console.log(deepEqual(36, 36))
// → true
console.log(deepEqual(true, true))
// → true
console.log(deepEqual(true, false))
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2, left: 4 }))
// → false
console.log(deepEqual({ here: { is: 'an' }, object: 2 }, { here: { is: 'an' }, object: 2 }))
// → true
console.log(deepEqual({ here: { is: 'an' }, object: 2 }, { here: { is: 'en' }, object: 9 }))
// → false
