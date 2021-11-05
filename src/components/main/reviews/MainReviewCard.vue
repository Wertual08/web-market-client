<template>
  <div class="main-review-card">
    <div class="background">
    </div>
    <div class="content">
      <p class="description">{{ review.description }}</p>
    </div>
  </div>
</template>


<style scoped>
.main-review-card {
  position: relative;
  overflow: hidden;

  width: 370px;
  height: 342px;
}

.main-review-card > .background {
  position: absolute;
  top: 31px;
  left: 0;
  bottom: 0;
  right: 0;
  
  width: auto;
  height: auto;

  padding: 0;
  margin: 0;

  background: #192F60;

  border-radius: 12px;
}

.main-review-card > .content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-review-card > .content > .description {
  width: 306px;
  height: 172px;

  padding: 8px;
  margin: 0;

  overflow: hidden;

  color: black;
  background: white;
  border-radius: 6px;

  word-wrap: break-word;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Review from '@/models/review'

export default defineComponent({
  name: 'main-review-card',

  props: {
    review: {
      type: Object as PropType<Review>,
      required: true,
    }
  },

  setup() {
        
  },
})
</script>
