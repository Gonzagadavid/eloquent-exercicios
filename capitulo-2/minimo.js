/*
Mínimo
O capítulo anterior introduziu a função  Math.min  que retorna o seu menor argumento. Nós podemos reproduzir
essa funcionalidade agora. Escreva uma função  min  que recebe dois argumentos e retorna o menor deles.
// Your code here.
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/
// feito usando "function"
function min (a, b) {
  return Math.min(a, b)
}

console.log(min(0, 10))
// → 0
console.log(min(0, -10))
// → -10
// -------------------------------------------------------

// feito usando "arrow function"
min = (a, b) => {
  return Math.min(a, b)
}

console.log(min(0, 10))
// → 0
console.log(min(0, -10))
// → -10
// ----------------------------------------------------------
