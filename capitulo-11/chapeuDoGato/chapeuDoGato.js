const cat = document.querySelector('#cat')
const hat = document.querySelector('#hat')

let angle = 0; let lastTime = null
function animate (time) {
  if (lastTime != null) { angle += (time - lastTime) * 0.001}
  lastTime = time
  hat.style.top = (Math.sin(angle) * 100) + 'px'
  hat.style.left = (Math.cos(angle) * 200) + 'px'
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)
