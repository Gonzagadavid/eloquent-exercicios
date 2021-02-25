/*
Comentários
Seria bom se pudéssemos escrever comentários no Egg. Por exemplo, sempre que encontrar um
cardinal  ("#") , poderíamos tratar o resto da linha como um comentário e ignorá-lo,
semelhante que Javascript faz com o  "//". Não temos de fazer quaisquer grandes mudanças para
que o analisador suporte isto. Nós podemos simplesmente mudar o  skipSpace  para ignorar
comentários assim como é feito com os espaços em branco; para que todos os pontos onde
skipSpace  é chamado agora também ira ignorar comentários. Vamos fazer essa alteração:
*/

function skipSpace (string) {
  let skippable = string.match(/^(\s|#.*)*/)
  return string.slice(skippable[0].length)
}

console.log(parse('# hello\nx'))
// → {type: "word", name: "x"}

console.log(parse('a # one\n   # two\n()'))
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
