/*
 Arrays
Adicionar suporte para  array  em Egg construindo as três funções em  topEnv  do escopo:  array(...)  vai ser a
construção de uma matriz contendo os argumentos como valores,  length(array)  para obter o comprimento de um
 array  e  element(array, n)  buscar  n  elementos de uma matriz.
 */

topEnv.array = function () {
  return Array.prototype.slice.call(arguments, 0)
};

topEnv.length = function (array) {
  return array.length
};

topEnv.element = function (array, i) {
  return array[i]
};

run('do(define(sum, fun(array,',
  '     do(define(i, 0),',
  '        define(sum, 0),',
  '        while(<(i, length(array)),',
  '          do(define(sum, +(sum, element(array, i))),',
  '             define(i, +(i, 1)))),',
  '        sum))),',
  '   print(sum(array(1, 2, 3))))')
// → 6
