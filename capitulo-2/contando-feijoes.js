/* 
Contando feijões
Você pode acessar o N-ésimo caractere, ou letra, de uma  string  escrevendo  "string".charAt(N) , similar a como
você acessa seu tamanho com  "s".length . O valor retornado será uma  string  contendo somente um caractere
(por exemplo,  "b" ). O primeiro caractere está na posição zero, o que faz com que o último seja encontrado na
posição  string.length -1 . Em outras palavras, uma  string  com dois caracteres possui tamanho ( length ) dois, e
suas respectivas posições são  0  e  1 .
Escreva uma função  countBs  que receba uma  string  como único argumento e retorna o número que indica
quantos caracteres "B", em maiúsculo, estão presentes na  string .
Em seguida, escreva uma função chamada  countChar  que se comporta de forma parecida com  countBs , exceto
que ela recebe um segundo argumento que indica o caractere que será contado (ao invés de contar somente o
caractere "B" em maiúsculo). Reescreva  countBs  para fazer essa nova funcionalidade.
// Your code here.
console.log(countBs(“BBC”));
// → 2
console.log(countChar(“kakkerlak”, “k”));
// → 4
*/
//primeiro parte feita com "for" e aumentado o numero de "B" para testar
function countBs(letras){
    let cont = 0;
    let limit = letras.length;
    
    for(let i = 0 ; i < limit; i++){
    let  letra = letras.charAt(i); 
    if(letra == "B"){
        cont++;
    }
   }return cont;
}
console.log(countBs("BBBBBBC"));
//--------------------------------------------------------------------------

//primeiro parte feita com "while" e "arrow function" aumentado o numero de "B" para testar
 countBs = letras => {
    let cont = 0;
    let numeros = 0;
    while(cont < letras.length){
        letra = letras.charAt(cont)
        if(letra == "B"){
            numeros++;
        }
        cont++
    }return numeros;
}
console.log(countBs("BBBBBBBBCBcB"));
//-----------------------------------------------------------------------------

//segunda parte feita com "for"
function countChar(caracteres, caractere){
    let count = 0;
    let limit = caracteres.length;

    for(let i = 0; i < limit; i++){
        letra = caracteres.charAt(i)
        if(letra == caractere){
            count++;
        }
    }return count;
}
console.log(countChar("kakkerlak", "k"));
// → 4
//-----------------------------------------------------------------------------

//segunda parte feita com "while" e "arrow function"
countChar = (caracteres, caractere) =>{
    let count = 0;
    let limit = caracteres.length;
    let numeros = 0;

    while(count < limit){
        letra = caracteres.charAt(count);
       
        if(letra === caractere){
           numeros++;
       } 
       count++;    
    }return numeros;
}
console.log(countChar("kakkerlak", "k"));
// → 4
//------------------------------------------------------------------------------

//countB com "for" adaptado para receber um caractere além do B
function countBs(letras, caractere){
    let cont = 0;
    let limit = letras.length;
    
    for(let i = 0 ; i < limit; i++){
    let  letra = letras.charAt(i); 
    if(letra == "B" || letra == caractere){
        cont++;
    }
   }return cont;
}
console.log(countBs("BBBBBBCkklkkkakkdkkffkBBdkkBBB", "k"));
//----------------------------------------------------------------------------------------

//countB com "while" e "arrow function" adaptado para receber um caractere além do B
countBs = (letras, caractere) => {
    let cont = 0;
    let numeros = 0;
    while(cont < letras.length){
        letra = letras.charAt(cont)
        if(letra == "B" || letra == caractere){
            numeros++;
        }
        cont++
    }return numeros;
}
console.log(countBs("BBBBBBCkklkkkakkdkkffkBBdkkBBB", "k"));
//------------------------------------------------------------------------------------------------