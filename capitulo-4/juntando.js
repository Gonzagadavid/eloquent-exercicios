/*
Juntando
Use o método  reduce  juntamente com o método  concat  para juntar um  array  de  arrays
 em um único  array que tem todos os elementos de entrada do  array .
var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/
const arrays = [[1, 2, 3], [4, 5], [6]]

const arrayUnico = arrays.reduce((acc, crr) => {
  return acc.concat(crr)
})

console.log(arrayUnico)
