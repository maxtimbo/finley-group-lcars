<template>
  <nav class="btn-group me-2">
    <button class="btn bg-accent3">
      <span class="btn-hidden-text">
        home
      </span>
      <span class="btn-display-text">
        AT-9592
      </span>
    </button>
    <a href="https://fgtech.finley-group.com" target="blank" class="btn bg-accent4">
      <span class="btn-hidden-text">
        tech
      </span>
      <span class="btn-display-text">TC-4928</span>
    </a>
    <a href="https://blog.finley-group.com" target="blank" class="btn bg-secondary">
      <span class="btn-hidden-text">
        blog
      </span>
      <span class="btn-display-text">BL-8475</span>
    </a>
    <button class="btn bg-accent2" @click="$emit('comms')">
      <span class="btn-hidden-text">
        comm
      </span>
      <span class="btn-display-text">CM-3247</span>
    </button>
  </nav>
</template>

<script setup>
defineEmits(['comms'])
</script>
