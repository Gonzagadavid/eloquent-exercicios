/*
Triângulo com Loop
Escreva um programa que faça sete chamadas a  console.log()  para retornar o seguinte triângulo:
#
##
###
####
#####
######
#######
*/

//usando "for" na primeira tentativa com sucesso e a abstração do código
let inicio ="#";

for(let i = 0 ; i < 7; i++){
  console.log(inicio);

  let meio = inicio + "#";
 inicio=meio;
};
//------------------------------------------

let inicio ="#";

for(let i = 0 ; i < 7; i++){
  console.log(inicio);
  inicio = inicio + "#";
};
//-------------------------------------------

//usando "while"
let inicio = "#";
let counter = 0;

while(counter < 7){
    console.log(inicio);
    inicio = inicio + "#";
    counter++;
};
//--------------------------------------------

//usando "do""while"
let inicio = "#";
let counter = 0;

do{
    console.log(inicio);
    inicio = inicio + "#";
    counter++;
}while(counter<7);
//--------------------------------------------------------------------------------------------------------------------
