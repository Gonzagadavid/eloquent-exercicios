/* 
A soma de um intervalo
A introdução desse livro mencionou a seguinte maneira como uma boa alternativa para somar um intervalo de
números:
console.log(sum(range(1, 10)));
Escreva uma função chamada  range  que recebe dois argumentos,  start  (início) e  end  (fim), e retorna um array
contendo todos os números a partir do valor  start  até o valor  end  (incluindo-o).
Em seguida, escreva a função  sum  que recebe um array de números como argumento e retorna a soma desses
números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
Como exercício bônus, modifique a sua função  range  para aceitar um terceiro argumento opcional que indica o
tamanho do "incremento" usado para construir o array. Se nenhum valor for atribuído ao tamanho do incremento, o
array de elementos será percorrido em incrementos de um, correspondendo ao comportamento original. A
chamada à função  range(1, 10, 2)  deve retornar  [1, 3, 5, 7, 9] . Certifique-se de que funcione também com
valores negativos, fazendo com que  range(5, 2, -1)  produza  [5, 4, 3, 2] .
// Your code here.
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/

//primeira parte feita com "for"
function range (start, end){
    array = [];

    for(let cont = start ; cont <= end; cont++){
        array.push(cont);
    }return array;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//---------------------------------------------------------------------------------------------------------------

//primeira parte feita com "while" e "arrow function"
range = (start, end) =>{
   let array = [];
    
    while(start <= end){
        array.push(start)
        start++
    }return array;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//-----------------------------------------------------------------------------------------------------------------

//segunda parte usando "for"  e a primeira parte com "for"
function range (start, end){
    array = [];

    for(let cont = start ; cont <= end; cont++){
        array.push(cont);
    }return array;
}

function sum (array){
    let soma = 0;
    
    for(let i = 0; i < array.length; i++){
       soma = soma + array[i];
    }return soma;
}
console.log(sum(range(1, 10)));
// → 55
//-------------------------------------------------------------------------------------------------------------------

//segunda parte usando "while" e "arrow function" com 
//a primeira parte usando "while" e "arrow function"
range = (start, end) =>{
    let array = [];
     
     while(start <= end){
         array.push(start)
         start++
     }return array;
 }

 sum = (array) =>{
     let soma = 0;
     let cont = 0;

     while(cont < array.length){
         soma = soma + array[cont];
         cont++
     }return soma;
 }
 console.log(sum(range(1, 10)));
// → 55
//---------------------------------------------------------------------------------------------------

//terceira parte usando a primeira parte com "for" adaptada para
//receber o terceiro argumento de incremento 
function range (start, end, incremento){
    array = [];
    incremento = (incremento == undefined ? 1 : incremento)
console.log(incremento)
    if(incremento > 0){
        for(let cont = start ; cont <= end; ){
            array.push(cont);
            cont = cont + incremento;
        }
    }else{
        for(let cont = start ; cont >= end; ){
            array.push(cont);
            cont = cont + incremento;
    }
  }return array;
}
console.log(range(1, 10, 2))
//→ [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//---------------------------------------------------------------------------------------------

//terceira parte usando a primeira parte com "while" e "arrow function" adaptada para
//receber o terceiro argumento de incremento 
range = (start, end, incremento) =>{
    let array = [];
    incremento = (incremento == undefined ? 1 : incremento) 

     while(incremento > 0 ? start <= end : start >= end){
         array.push(start);
         start = start + incremento;
     }return array;
 }
 console.log(range(1, 10, 2));
 //→ [1, 3, 5, 7, 9]
 console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//------------------------------------------------------------------------------------------------------