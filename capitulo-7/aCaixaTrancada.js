/*
Considere o seguinte objeto 'box'. Box é uma caixa com um cadeado. Dentro dela tem um  array  mas você pode obtê-lo apenas quando a caixa for
desbloqueada. Não é permitido acessar a propriedade  _content  diretamente.
Escreva uma função chamada  withBoxUnlocked  que assume o valor da função que é passada por argumento para
abrir esta caixa. Execute a função e em seguida garanta que a caixa está bloqueada antes de voltar novamente;
não importa se o argumento da função retornou normalmente ou emitiu uma exceção.
Para ganhar pontos extras, certifique-se de que chamou  withBoxUnlocked  quando a caixa já estava desbloqueada,
pois a caixa deve sempre permanecer desbloqueada.
*/

const box = {
  locked: true,
  unlock: function () { this.locked = false },
  lock: function () { this.locked = true },
  _content: [],
  get content () {
    if (this.locked) throw new Error('Locked!')
    return this._content
  }
}

function withBoxUnlocked (body) {
  // Your code here
  box.unlock()
  try {
    body()
  } catch (e) {
    console.log(e.message)
  } finally {
    box.lock()
  }
}
withBoxUnlocked(function () {
  box.content.push('gold piece')
})
try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!')
  })
} catch (e) {
  console.log('Error raised:', e)
}
console.log(box.locked)
// → true
console.log(box._content)
