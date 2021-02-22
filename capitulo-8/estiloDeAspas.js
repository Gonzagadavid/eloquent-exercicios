/*
Estilo de aspas
Imagine que você escreveu um texto e usou aspas simples por toda parte. Agora você deseja substituir todas que
realmente possuem algum texto com aspas duplas, mas não as usadas em contrações de texto com _aren't).
Pense em um padrão que faça distinção entre esses dois usos de aspas e faça uma chamada que substitua
apenas nos lugares apropriados.
*/
const text = "'I'm the cook,' he said, 'it's my job.'"
// Altere esta chamada
console.log(text.replace(/(?!\s)'(?!\w\s)/g, '"'))
// → "I'm the cook," he said, "it's my job."
