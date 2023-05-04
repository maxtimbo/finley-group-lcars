<template>
  <div class="container-hbar" :class="color2">
    <div :class="color1"></div>
  </div>
</template>

<script setup>

defineProps({
  color1: {
    type: String,
    default: "bg-primary"
  },
  color2: {
    type: String,
    default: "bg-accent3"
  }
})

</script>
