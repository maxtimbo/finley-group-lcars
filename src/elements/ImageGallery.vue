<template>
  <div class="container-fluid">
    <div class="d-flex f-wrap my-2">
      <div 
        v-for="(image, index) in images"
        :key="index"
        class="thumbnail mx-1"
      >
        <img
          :src="image.thumbnail"
          :alt="`Thumbnail ${index + 1}`"
          class="thumbnail"
          @click="showLightbox(index)"
        />
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="images.map(img => img.full)"
      :index="currentIndex"
      loop="true"
      swipeTolerance=25
      rotateDisabled="true"
      @hide="visible = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  }
});

const visible = ref(false);
const currentIndex = ref(0);

const showLightbox = (index) => {
  currentIndex.value = index;
  visible.value = true;
};
</script>
