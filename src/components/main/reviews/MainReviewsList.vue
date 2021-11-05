<template>
  <div class="main-reviews-list">
    <main-review-card :review="plug"/>
  </div>
</template>


<style scoped>
.main-reviews-list {
  display: flex;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import MainReviewCard from './MainReviewCard.vue'
import Review from '@/models/review'

export default defineComponent({
  components: { MainReviewCard },
  name: 'main-reviews-list',

  setup() {
    return {
      plug: new Review(),
    }
  },
})
</script>
