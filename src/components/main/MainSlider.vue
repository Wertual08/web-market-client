<template>
  <slider>
    <div class="slide" v-for="image in images" :key="image">
      <img :src="identifierToUrl(image)"/>
    </div>
  </slider>
</template>


<style scoped>
.slide {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.slide > img {
  max-width: 100%;
  max-height: 100%;
  height: 100%;

  user-select: none;
  pointer-events: none;
}
</style>


<script lang="ts">
import RecordsRepository from '@/repositories/recordsRepository'
import { defineComponent, PropType } from 'vue'
import Slider from '../common/Slider.vue'

export default defineComponent({
  name: 'main-slider',
  components: { Slider },

  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    }
  },

  setup() {
        
  },

  methods: {
    identifierToUrl(identifier: string): string {
      return RecordsRepository.toUrl(identifier);
    }
  }
})
</script>
