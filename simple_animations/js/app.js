document.addEventListener('DOMContentLoaded', event => {
  startTween()
})

startTween = () => {
  const toolBox = document.getElementById('toolBox')
  TweenLite.to(toolBox, 1, { x: 280, y: 230 })
}
