<template>
  <div class="audio-frame-container">
    <div class="audio-frame">
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
    </div>
    <!-- <div class="pillbox-3 mt-5">
      <button class="pill-start bg-primary">Prev</button>
      <button class="pill-center bg-accent4" @click="initStream">Play</button>
      <button class="pill-end bg-accent3" @click="stopStream">stop</button>
    </div> -->
    <ul>
      <li v-for="stream, call in streams" :key="call.id" @click="playStream(stream)">
        {{ call }}
      </li>
    </ul>
  </div>
</template>

<script setup>

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


function playStream(stream) {
  console.log(stream)
  audioElement.src = stream
  audioElement.crossOrigin = 'anonymous'

  const analyserNode = audioContext.createAnalyser()
  analyserNode.fftSize = 2048
  const bufferLength = analyserNode.frequencyBinCount
  const dataArray = new Uint8Array(bufferLength)

  const sourceNode = audioContext.createMediaElementSource(audioElement)
  sourceNode.connect(analyserNode)
  analyserNode.connect(audioContext.destination)

  const canvas = document.getElementById('wave')
  const canvasCtx = canvas.getContext('2d')

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

    //const barWidth = (canvas.width / bufferLength) * 2.5
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

