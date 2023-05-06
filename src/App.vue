<template>
  <div class="container-fluid">
    <div class="panel-container">
      <div class="panel-fill-md bg-primary" @click="enterFullscreen">
        <img 
          src="./assets/images/FGLogo_600x600.png" 
          alt="fg-logo" 
          class="d-none d-inline-md" 
          style="max-width: 20px">
        <span class="d-none-md">finley-group</span>
      </div>
      <div class="panel-outer-bottom-left-xl bg-accent3 pfiller" @click="scrollToContent">test</div>
    </div>
    <div class="container-fluid row p-0">
      <div class="col">
        <div class="panel-inner-bottom-left oc-accent3">

          <div class="container-fluid col">
            <div class="page-head row">
              <h1 class="text-secondary me-2">
                finley-group • {{ todayDate }}
              </h1>
            </div>
            <div class="row">
              <DataCascade />
              <HomeNav 
                @comms="commsToggle"
              />
            </div>
          </div>

        </div>
        <div class="panel-border bg-accent3">
          <div></div>
          <div class="bg-accent2"></div>
          <div class="bg-primary"></div>
          <div class="bg-primary d-none-md"></div>
          <div class="bg-accent2"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-1"></div>
  <div id="body-container" class="container-fluid h100vh">
    <div class="panel-container">
      <div class="panel-outer-top-left-lg bg-accent2 pfiller" @click="scrollToTop">Test</div>
      <div id="sidebar" class="panel-container o-scroll">
        <button class="panel-fill-lg bg-accent2 pfiller" @click="randomComputerBeep">BLOG</button>
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
  <HailFreq v-if="commsBool" @comms="commsToggle"/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { DataCascade, ContentFooter, HomeNav, HailFreq } from '@/components'
import moment from 'moment'
import { RouterView } from 'vue-router'
import { SassyLcars } from './assets/sassy-lcars/sassy-lcars.js'
import { sounds, randomComputerBeep } from './util/sounds'

const useSassyLcars = new SassyLcars()
const todayDate = moment().format('YYMM.DD')

let isSyncLeftScroll = false
let isSyncRightScroll = false

function scrollToTop() {
  randomComputerBeep()
  scroll({
    top: 0,
    behavior: "smooth"
  })
}

function scrollToContent() {
  randomComputerBeep()
  const contentMarker = document.getElementById('content-border').getBoundingClientRect()
  scroll({
    top: contentMarker.top + window.scrollY,
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

const commsBool = ref(false)

function commsToggle() {
  const bodyContainer = document.getElementById("body-container")

  if (!commsBool.value) {
    if (sounds.hail1.playing() === false) {
      sounds.hail1.play()
    }
    bodyContainer.style.display = 'none';
    commsBool.value = true
  } else {
    if (sounds.viewOff.playing() === false) {
      sounds.viewOff.play()
    }
    bodyContainer.style.display = 'flex';
    commsBool.value = false
  }
  }

function enterFullscreen() {
  if (document.fullscreenEnabled) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        if (sounds.fullscreenUp.playing() === false) {
          sounds.fullscreenUp.play()
        }
      }).catch(err => {
        console.log(err)
        sounds.denyBeep1.play()
      })
    } else {
      document.exitFullscreen()
      sounds.fullscreenDown.play()
    }
  }
}


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

</style>
