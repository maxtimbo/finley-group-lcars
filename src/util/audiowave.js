
export function StreamVis(stream) {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  const audioCtx = new AudioContext()
  const audioEl = new Audio()
  const gainNode = new GainNode(audioCtx)
  
  audioEl.src = stream
  audioEl.crossOrigin = 'anonymous'


}
