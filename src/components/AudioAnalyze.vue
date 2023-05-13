<template>
  <div class="audio-stream-container">
    <div class="audio-frame-container">
      <div class="audio-frame">
        <input 
          id="wave-peak"
          type="range"
          orient="vertical"
          class="wave-peak"
          max="3"
          min="-41"
          disabled
        >
        <div class="start-frame bg-primary">
          <div class="cell-container-start">
            <div class="audio-cell bg-accent3"></div>
            <div class="audio-cell bg-accent1"></div>
            <div class="audio-cell bg-accent2"></div>
          </div>
        </div>
        <div class="center-frame start bg-primary"></div>
        <div class="audio-content">
          <canvas id="wave"></canvas>
        </div>
        <div class="center-frame end bg-primary"></div>
        <div class="end-frame bg-primary">
          <div class="cell-container-end">
            <div class="audio-cell bg-secondary"></div>
            <div class="audio-cell bg-accent3"></div>
            <div class="audio-cell bg-accent4"></div>
          </div>
        </div>
        <input 
          type="range" 
          orient="vertical"
          id="volume"
          class="volume-control"
          min="-1"
          max="0"
          list="gain-vals"
          step="0.1"
          :value="volume"
          @input="volumeControl"
          @wheel="volumeControl"
        >
      </div>
      <div class="controls">
        <div class="pillbox-3 mt-5">
          <button class="pill-start bg-primary">Prev</button>
          <button class="pill-center bg-accent4" @click="playPause">Play</button>
          <button class="pill-end bg-accent3">Next</button>
        </div>
        <ul>
          <li v-for="stream, call in streams" :key="call.id" @click="playStream(stream)">
            {{ call }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

let VolumeControl
let WavePeak

onMounted(() => {
  VolumeControl = document.getElementById("volume")
  WavePeak = document.getElementById("wave-peak")
})

const streams = {
  WHHW: 'https://dbc.streamguys1.com/whhw-am.aac', 
  WGCO: 'https://dbc.streamguys1.com/wgco-fm.aac',
  WXYY: 'https://dbc.streamguys1.com/wxyy-fm.aac',
  WFXH: 'https://dbc.streamguys1.com/wfxh-fm.aac', 
  WUBB: 'https://dbc.streamguys1.com/wubb-fm.aac',
  WRWN: 'https://dbc.streamguys1.com/wrwn-fm.aac'
}

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioContext = new AudioContext()
const audioElement = new Audio()
const gainNode = new GainNode(audioContext)
let volume = -0.5

gainNode.gain.value = volume

function volumeControl() {
  volume = VolumeControl.value
  gainNode.gain.value = volume
}


function playPause() {
  console.log(audioElement.paused)
  if (!audioElement.paused) {
    audioElement.pause()
  } else {
    audioElement.play()
  }
}

function playStream(stream) {
  console.log(stream)
  audioElement.src = stream
  audioElement.crossOrigin = 'anonymous'

  const analyserNode = audioContext.createAnalyser()
  analyserNode.fftSize = 2048
  const bufferLength = analyserNode.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const sampleBuffer = new Float32Array(analyserNode.fftSize)

  const sourceNode = audioContext.createMediaElementSource(audioElement)
  gainNode.connect(audioContext.destination)
  sourceNode.connect(analyserNode)
  sourceNode.connect(gainNode)
  analyserNode.connect(audioContext.destination)



  const canvas = document.getElementById('wave')
  const canvasCtx = canvas.getContext('2d')

  function audioPeak() {
    analyserNode.getFloatTimeDomainData(sampleBuffer)
    let sumOfSquares = 0
    for (let i = 0; i < sampleBuffer.length; i++) {
      sumOfSquares += sampleBuffer[i] ** 2
    }
    const avgPowerDecibels = 10 * Math.log10(sumOfSquares / sampleBuffer.length)
    WavePeak.value = avgPowerDecibels

  }

  function draw() {
    requestAnimationFrame(draw)
    analyserNode.getByteTimeDomainData(dataArray)

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
    canvasCtx.fillStyle = "rgb(0, 0, 0)"
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height)
    canvasCtx.lineWidth = 2
    canvasCtx.strokeStyle = "rgb(200, 200, 200)"
    canvasCtx.beginPath()

    const sliceWidth = canvas.width / bufferLength

    let x = 0

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0
      const y = v * (canvas.height / 2)

      if (i === 0) {
        canvasCtx.moveTo(x, y)
      } else {
        canvasCtx.lineTo(x, y)
      }

      x += sliceWidth
    } 
    canvasCtx.lineTo(canvas.width, canvas.height / 2)
    canvasCtx.stroke()
    audioPeak()
  }

  audioElement.play()
  draw()
}
</script>

<style>
canvas {
  width: 100%;
  height: 100%;
}
</style>

