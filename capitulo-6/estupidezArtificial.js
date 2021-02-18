/*
Estupidez artificial
Tendo os habitantes do nosso mundo se extinguindo após alguns minutos é uma espécie de deprimente. Para
lidar com isso poderíamos tentar criar uma forma mais inteligente para o comedor de plantas.
Há vários problemas óbvios com os nossos herbívoros. Primeiro eles são terrivelmente ganancioso enchendo-se
com todas as plantas que veem até que tenham dizimado a vida vegetal local. Em segundo lugar o seu
movimento randomizado(lembre-se que o método  view.find  retorna uma direção aleatória quando múltiplas
direções combinar) faz com que eles fique em torno de si e acabe morrendo de fome se não não acontecer de
haver plantas nas proximidades. E finalmente eles se reproduzem muito rápido o que faz com que os ciclos entre
abundância e fome se tornem bastante intensos.
Escrever um novo tipo de bicho que tenta abordar um ou mais desses pontos e substituí-lo para o tipo  PlantEater
no velho no mundo do vale. Veja como é que as tarifas estão. Ajuste um pouco mais se necessário.
*/

function SmartPlantEater () {
  this.energy = 30
  this.direction = 'e'
}
SmartPlantEater.prototype.act = function (view) {
  const space = view.find(' ')
  if (this.energy > 90 && space) { return { type: 'reproduce', direction: space }}
  const plants = view.findAll('*')
  if (plants.length > 1) { return { type: 'eat', direction: randomElement(plants) }}
  if (view.look(this.direction) != ' ' && space) { this.direction = space}
  return { type: 'move', direction: this.direction }
}

animateWorld(new LifelikeWorld(
  ['############################',
    '#####                 ######',
    '##   ***                **##',
    '#   *##**         **  O  *##',
    '#    ***     O    ##**    *#',
    '#       O         ##***    #',
    '#                 ##**     #',
    '#   O       #*             #',
    '#*          #**       O    #',
    '#***        ##**    O    **#',
    '##****     ###***       *###',
    '############################'],
  {
    '#': Wall,
    O: SmartPlantEater,
    '*': Plant
  }
))
