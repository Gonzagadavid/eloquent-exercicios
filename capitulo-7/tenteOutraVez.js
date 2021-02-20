/*
Tente outra vez...
Digamos que você tenha uma função  primitiveMultiply  que em 50 por cento dos casos multiplica dois números e
em outros 50 por cento levanta uma exceção do tipo  MultiplicatorUnitFailure . Escreva uma função que envolva
esta função  MultiplicatorUnitFailure  e simplesmente tente até que uma chamada seja bem-sucedido retornando
o resultado.
Certifique-se de lidar com apenas as exceções que você está tentando manipular.
*/

function MultiplicatorUnitFailure () {}
function primitiveMultiply (a, b) {
  if (Math.random() < 0.5) { return a * b } else { throw new MultiplicatorUnitFailure() }
}
function reliableMultiply (a, b) {
  // Coloque seu código aqui
  try {
    return primitiveMultiply(a, b)
  } catch (e) {
    console.log(e)
    return reliableMultiply(a, b)
  }
}
console.log(reliableMultiply(8, 8))
// → 64
