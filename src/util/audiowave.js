import WaveSurfer from 'wavesurfer.js'


export const wavesurfer = WaveSurfer.create({
  container: document.querySelector('#wave'),
  backend: 'MediaElement'
})
