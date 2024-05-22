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
                <h1 class="text-secondary me-2 title-font">
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
  <HailFreq v-if="commsBool" @comms="commsToggle"/>
</template>

<script setup>
import { ref } from 'vue'
import { DataCascade, HailFreq, HomeNav } from '@/components'
import moment from 'moment'
import { sounds, randomComputerBeep } from '../util/sounds'
const todayDate = moment().format('YYMM.DD')

function scrollToContent() {
  randomComputerBeep()
  const contentMarker = document.getElementById('content-border').getBoundingClientRect()
  scroll({
    top: contentMarker.top + window.scrollY,
    behavior: "smooth"
  })
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

</script>
