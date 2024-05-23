<template>
  <component :is="markdownComponent" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const markdownComponent = defineAsyncComponent(() => import('@/assets/markdown/home.md'))
</script>
