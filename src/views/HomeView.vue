<template>
  <component :is="homeParagraph" />
  <component :is="droneImages" />
  <component :is="projects" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const homeParagraph = defineAsyncComponent(() => import('@/assets/markdown/home.md'))
const droneImages = defineAsyncComponent(() => import('@/assets/markdown/drone-images.md'))
const projects = defineAsyncComponent(() => import('@/assets/markdown/projects.md'))
</script>
