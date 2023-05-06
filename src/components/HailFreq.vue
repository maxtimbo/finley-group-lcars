<template>
  <div class="container hailing py-4 py-16-md" @click="$emit('comms')">
    <SectionHR>COMMUNICATION</SectionHR>
    <h1 class="ta-center pb-2">Incomming Transmission</h1>
    <a href="mailto:tim.finley24@gmail.com" class="comms pb-6">
      <img src="/svgs/comms.min.svg" alt="">
    </a>
    <SectionHR :textAlign="'justify-start'">TIM FINLEY</SectionHR>
  </div>
</template>

<script setup>
import { SectionHR } from '@/elements'

defineEmits(['comms'])

</script>

<style>
</style>
