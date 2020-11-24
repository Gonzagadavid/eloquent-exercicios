/*
FizzBuzz
25Escreva um programa que imprima usando  console.log()  todos os números de 1 a 100 com duas exceções. Para
números divisíveis por 3, imprima  Fizz  ao invés do número, e para números divisíveis por 5 (e não 3), imprima
 Buzz .
Quando o programa estiver funcionando, modifique-o para imprimir  FizzBuzz  para números que são divisíveis
ambos por 3 e 5 (e continue imprimindo  Fizz  e  Buzz  para números divisíveis por apenas um deles).
(Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de candidatos
programadores. Então se você resolvê-la, você está autorizado de se sentir bem consigo mesmo).
*/

//primeira parte usando "for"
let numero = 0;

for(let i = 0 ; i < 100 ; i++ ){
    numero++; 
    if(numero % 3 == 0){
        console.log("Fizz");
    }else{
        if(numero % 5 == 0){
            console.log("Buzz");
        }
    }
};
//----------------------------------------

//segunda parte usando "for"
let numero = 0;

for(let i = 0 ; i < 100 ; i++ ){
    numero++;
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");
    }else{
        if(numero % 3 == 0){
            console.log("Fizz");
        }else{
            if(numero % 5 == 0){
                console.log("Buzz");
            }
        }
    }
};
//-------------------------------------------------------------

//primeira parte feita com "while"
let numero = 1;

while(numero <= 100){
    if(numero % 3 == 0){
        console.log("Fizz");
    }else{
        if(numero % 5 == 0){
            console.log("Buzz");
        }
    }
    numero++ ;
};
//-------------------------------------------

//segunda parte usando "while"
let numero = 1;

while(numero <= 100){
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");
    }else{
        if(numero % 3 == 0){
            console.log("Fizz");
        }else{
            if(numero % 5 == 0){
                console.log("Buzz");
            }
        }
    }
    numero++ ;
};
//---------------------------------------------------

//primeir parte usando "do while"
let numero = 1;

do{
    if(numero % 3 == 0){
        console.log("Fizz");
    }else{
        if(numero % 5 == 0){
            console.log("Buzz");
        }
    }
    numero++;
}while(numero<=100);
//------------------------------------------------------

//segunda parte usando "do while"
let numero = 1;

do{
    if(numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz");
    }else{
        if(numero % 3 == 0){
            console.log("Fizz");
        }else{
            if(numero % 5 == 0){
                console.log("Buzz");
            }
        }
    }
    numero++;
}while(numero <=100);
//--------------------------------------------------------
