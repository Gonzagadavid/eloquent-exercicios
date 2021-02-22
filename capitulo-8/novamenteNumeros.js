/*
Novamente números
Séries de dígitos podem ser usados pela agradável expressão regular /\d+/.
Escreva uma expressão que encontre (apenas) números no estilo JavaScript. Isso significa que
precisa suportar um sinal de menor ou maior, opcional, na frente do número, um ponto decimal
e a notação exponencial —5e-3 ou 1E10—, novamente com o sinal opcional na frente dele.
*/
// Preencha esta expressão regular
const number = /^\d$|^[-+.]\d+$|^\d\.\d+$|^\d\.$|^\d\.?\d?e\+?\d+$|^\dE-\d$/;
// Tests:
['1', '-1', '+15', '1.55', '.5', '5.', '1.3e2', '1E-4',
  '1e+12'].forEach(function (s) {
  if (!number.test(s)) {
    console.log("Falhou em achar '" + s + "'")
  }
});
['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5',
  '.'].forEach(function (s) {
  if (number.test(s)) {
    console.log("Aceitou erroneamente '" + s + "'")
  }
})
