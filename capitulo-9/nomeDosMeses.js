/*
Nomes dos meses
Escreva um simples módulo similar ao módulo  weekDay , que pode converter os números dos meses (zero-
based, assim como o tipo  Date ) para nomes, e nomes para números. Dê a este módulo seu próprio namespace,
pois ele vai precisar de um array interno com o nome dos meses, mas use JavaScript puro, sem nenhum sistema
de carregamento de módulos.
*/

// Your code here.
const month = (function () {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  return {
    name: number => months[number],
    number: name => months.indexOf(name)
  }
})()

console.log(month.name(2))
// → March
console.log(month.number('November'))
// → 10
