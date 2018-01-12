document.addEventListener('DOMContentLoaded', event => {
  startTween()
})

startTween = () => {
  const toolBox = document.getElementById('toolBox')
  // toolbox animation
  TweenLite.to(toolBox, 1, {
    delay: 0.4,
    x: 280,
    y: 230,
    scale: 2,
    onComplete: returnToNormal,
    onCompleteParams: [toolBox],
  })
  // text animation
  TweenLite.to('.asapReg', 1, {
    delay: 0.4,
    color: '#ff0000',
    fontSize: '+=75',
    onComplete: returnTextToNormal,
  })
}
// return functions
returnToNormal = obj => {
  obj ? TweenLite.to(obj, 1, { delay: 1, x: 0, y: 0, scale: 1 }) : null
}
returnTextToNormal = () => {
  const toolBox = document.getElementById
  TweenLite.to('.asapReg', 1, { color: '#fff', fontSize: '-=75' })
}
