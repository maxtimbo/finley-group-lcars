<template>  
  <div id="body-container" class="container-fluid h100vh">
    <div class="panel-container">
      <div class="panel-outer-top-left-lg bg-accent2 pfiller" @click="scrollToTop">Test</div>
      <div id="sidebar" class="panel-container o-scroll">
        <button class="panel-fill-lg bg-accent2 pfiller" @click="toggleAudio">BLOG</button>
        <button class="panel-fill-sm bg-secondary pfiller">TECH</button>
        <button class="panel-fill-sm bg-accent1 swap-text pfiller">CLOUD</button>
        <button class="panel-fill-md bg-primary swap-text pfiller">COMM</button>
        <div class="panel-fill-md bg-accent3 pfiller">test</div>
        <div class="panel-fill-xxl bg-accent4 swap-text pfiller">test</div>
        <div class="panel-fill-xl bg-accent4 pfiller">test</div>
        <div class="panel-fill-lg bg-accent3 pfiller">test</div>
        <div class="panel-fill-xl bg-primary pfiller">test</div>
        <div class="panel-fill-xxl bg-accent1 swap-text pfiller">test</div>
        <button class="panel-fill-md bg-secondary swap-text to-top-content" @click="scrollContentToTop">Top</button>
      </div>
    </div>
    <div class="container-fluid row p-0">
      <div class="col">
        <div id="content-border" class="panel-border bg-accent2">
          <div></div>
          <div class="bg-accent4"></div>
          <div class="bg-accent2 decorator-half-top"></div>
          <div class="bg-primary d-none-md"></div>
          <div class="bg-accent4"></div>
        </div>
        <div class="panel-inner-top-left oc-accent2">
          <div class="container-fluid pt-5 ps-2">
            <div id="content" class="col content container-fluid me-2">
              <RouterView />
              <ContentFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ContentFooter } from '@/components'
import { RouterView } from 'vue-router'
import { randomComputerBeep } from '../util/sounds'

const showAudio = ref(false)
function toggleAudio() {
  showAudio.value = !showAudio.value
  const audioContainer = document.querySelector(".audio-stream-container")
  if (!showAudio.value) {
    audioContainer.style.left = '-400px'
    audioContainer.style.width = '0'
  } else {
    audioContainer.style.left = '0'
    audioContainer.style.width = '340px'
  }

}

function scrollToTop() {
  randomComputerBeep()
  scroll({
    top: 0,
    behavior: "smooth"
  })
}


function scrollContentToTop() {
  randomComputerBeep()
  const content = document.getElementById("content")
  content.scroll({
    top: 0,
    behavior: "smooth"
  })
}
</script>
