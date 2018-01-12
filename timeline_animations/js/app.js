document.addEventListener('DOMContentLoaded', event => {
  init()
})

init = () => {
  const toolTimeline = new TimelineMax()
  const duration = 1
  // animation
  toolTimeline.to('#toolBox', duration, { y: -100, ease: Linear.easeInOut })
  toolTimeline.to('#weightLifter', duration, {
    y: -100,
    ease: Bounce.easeInOut,
  })
  toolTimeline.to('#crazy', duration, { y: -100, ease: Elastic.easeInOut })
  toolTimeline.to('#leaf', duration, { y: -100, ease: Back.easeInOut })

  const start = document.getElementById('start')
  const pause = document.getElementById('pause')
  const stop = document.getElementById('stop')
  const reverse = document.getElementById('reverse')

  start.addEventListener('click', () => {
    toolTimeline.play()
  })
  pause.addEventListener('click', () => {
    toolTimeline.pause()
  })
  stop.addEventListener('click', () => {
    toolTimeline.stop()
  })
  reverse.addEventListener('click', () => {
    toolTimeline.reverse()
  })
}
