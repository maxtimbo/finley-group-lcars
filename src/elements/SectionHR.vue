<template>
  <div class="container-hbar-text" :class="color2">
    <div :class="[color1, textAlign]">
      <span :class="computedSpan">
        <slot>Default Text</slot>

      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color1: {
    type: String,
    default: "bg-accent1"
  },
  color2: {
    type: String,
    default: "bg-accent2"
  },
  textColor: {
    type: String,
    default: "text-primary"
  },
  textAlign: {
    type: String,
    default: "justify-end"
  }
})

const computedSpan = computed(() => {
  if (props.textAlign === 'justify-start') {
    return `${props.textColor} startBorder`
  } else if (props.textAlign === 'justify-end') {
    return `${props.textColor} endBorder`
  } else if (props.textAlign === 'justify-center') {
    return `${props.textColor} centerBorder`
  } else {
    return props.textColor
  }
})

</script>

<style lang="scss">
$modifier: 8px;
$hbar-border: 4px + $modifier;

.endBorder {
  padding-left: $hbar-border;
  padding-right: $modifier;
}

.startBorder {
  padding-left: $modifier;
  padding-right: $hbar-border;
}

.centerBorder {
  padding-left: $hbar-border;
  padding-right: $hbar-border;
}

</style>
