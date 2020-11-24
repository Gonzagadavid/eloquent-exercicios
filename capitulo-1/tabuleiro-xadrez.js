/*
Tabuleiro de Xadrez
Escreva um programa que cria uma  string  que representa uma grade 8x8, usando novas linhas para separar os
caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um
tabuleiro de xadrez.
Passando esta  string  para o  console.log  deve mostrar algo como isto:
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
Quando você tiver o programa que gere este padrão, defina a variável  size = 8  e altere programa para que ele
funcione para qualquer  size , a saída da grade de largura e altura.
*/

//primeira tentativa usando "for"
let xadrez = "# # # #\n # # # # ";

for(let i = 0 ; i < 4 ; i++){
console.log(xadrez);
};
//---------------------------------------------

//segunda parte usando "for" "while" e "if", onde size determina o tamanho tanto da largura quanto da altura da grade
let size = 4;
let xadrez = " ";

for(let i = 0 ; i < size ; i++){
   cont = 0;

    while(cont< size){
    xadrez = xadrez + "# ";
    cont++;
}
console.log(xadrez);

if(i % 2 == 0){
    xadrez = '';
}else{
    xadrez = " ";
}
};
//-------------------------------------------------------------------------------

//segunda parte usando somente "while", onde size determina o tamanho tanto da largura quanto da altura da grade
let xadrez = " ";
let coluna = 0;
let size = 4;

while(coluna < size){
    let linha = 0;
    
    while(linha < size){
        xadrez = xadrez + "# ";
        linha++;
    }
    
    coluna++;
    console.log(xadrez);
    
    xadrez = (coluna % 2 == 0 ? " " : "");
};
