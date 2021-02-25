/*
Corrigindo o escopo
Atualmente, a única maneira de atribuir uma variável um valor é utilizando o método  define.
 Esta construção atua tanto como uma forma para definir novas variáveis e dar um novo valor
para existentes. Isto causa um problema de ambiguidade. Quando você tenta dar uma variável um
novo valor que não esta local, você vai acabar definindo uma variável local com o mesmo nome
em seu lugar(Algumas línguas funcionam assim por design, mas eu sempre achei uma maneira
estranha de lidar com escopo). Adicionar um  specialForm  similar ao  define  dara a variável
um novo valor ou a atualização da variável em um escopo exterior se ele ainda não existir no
âmbito interno. Se a variável não é definida em tudo lançar um ReferenceError (que é outro
tipo de erro padrão). A técnica de representar escopos como simples objetos tornou as coisas
convenientes, até agora, e vai ficar um pouco no seu caminho neste momento. Você pode querer
usar a função  Object.getPrototypeOf  que retorna os protótipos de um objeto. Lembre-se também
que os escopos não derivam de  Object.prototype , por isso, se você quiser chamar
hasOwnProperty  sobre eles,você tera que usar esta expressão não muito elegante:
Object.prototype.hasOwnProperty.call(scope, name); Este método( hasOwnProperty )
busca o protótipo do objeto e depois chama-o em um objeto do escopo.
*/
specialForms.set = function (args, env) {
  if (args.length != 2 || args[0].type != 'word') { throw new SyntaxError('Bad use of set') }
  const varName = args[0].name
  const value = evaluate(args[1], env)

  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value
      return value
    }
  }
  throw new ReferenceError('Setting undefined variable ' + varName)
}

run('do(define(x, 4),',
  '   define(setx, fun(val, set(x, val))),',
  '   setx(50),',
  '   print(x))')
// → 50
run('set(quux, true)')
// → Some kind of ReferenceError
