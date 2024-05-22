<template>
  <div class="main-wrapper">
    <AudioAnalyze />
    <div class="col">
      <PageHeader />
      <div class="container-fluid mt-1"></div>
      <BodyContent />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { AudioAnalyze, PageHeader, BodyContent } from '@/components'
import { SassyLcars } from './assets/sassy-lcars/sassy-lcars.js'

const useSassyLcars = new SassyLcars()

let isSyncLeftScroll = false
let isSyncRightScroll = false


onMounted(() => {
  const sidebar = document.getElementById("sidebar")
  const content = document.getElementById("content")  
  sidebar.onscroll = function() {
    if (!isSyncLeftScroll) {
      isSyncRightScroll = true
      content.scrollTop = this.scrollTop
    }
    isSyncLeftScroll = false
  }

  content.onscroll = function() {
    if (!isSyncRightScroll) {
      isSyncLeftScroll = true
      sidebar.scrollTop = this.scrollTop / 9
    }
    isSyncRightScroll = false
  }
  const swapText = document.querySelectorAll('.swap-text')
  for (let i =0; i < swapText.length; i++) {
    let pt = window.getComputedStyle(swapText[i], null).getPropertyValue('padding-top')
    let pb = window.getComputedStyle(swapText[i], null).getPropertyValue('padding-bottom')
    swapText[i].style.paddingTop = pb
    swapText[i].style.paddingBottom = pt
  }

  const panelFiller = document.querySelectorAll('.pfiller')
  for (let i = 0; i < panelFiller.length; i++) {
    panelFiller[i].innerHTML = "0" + (i+1) + '<span class="d-none-md">-' + useSassyLcars.randomNumber(false)
  }
})

</script>

<style>
.main-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
.title-font {
  font-size: 1em;
}
.o-scroll {
  overflow: scroll;
  position: relative;
}
.to-top-content {
  position: sticky;
  bottom: 0;
  border-top: 5px solid black !important;
  border-bottom: none !important;
}

.audio-stream-container {
  position: relative;
  transition: all 0.5s ease;
  left: -400px;
  width: 0;
}

</style>
