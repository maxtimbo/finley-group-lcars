<template>
  <div class="container hailing py-4 py-16-md" @click="$emit('comms')">
    <SectionHR>Communication</SectionHR>
    Test
    <SectionHR :textAlign="'justify-start'">TEST</SectionHR>
  </div>
</template>

<script setup>
import { SectionHR } from '@/elements'

defineEmits(['comms'])

</script>

<style>
.hailing {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
}
</style>
