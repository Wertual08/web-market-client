<template>
  <div class="review-card">
    <div class="background">
    </div>
    <div class="content">
      <p class="description">{{ review.description }}</p>
      <div class="rating" v-if="review.grade">
        <img v-for="i in 5" :key="i" :src="chooseStar(i)">
      </div>
      <p class="name">{{ review.name }}</p>
      <p class="address">{{ review.address }}</p>
      <p class="date">{{ createdAt }}</p>
    </div>
  </div>
</template>


<style scoped>
.review-card {
  position: relative;
  overflow: hidden;
}

.review-card > .background {
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

.review-card > .content {
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
  justify-content: flex-start;
}

.review-card > .content > .description {
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

.review-card > .content > .rating {
  margin: 13px;

  display: flex;
}

.review-card > .content > .rating > img {
  margin: 5px;

  user-select: none;
  pointer-events: none;

  display: flex;
}

.review-card > .content > .name {
  padding: 0px;
  margin: 4px;

  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
}

.review-card > .content > .address {
  padding: 0px;
  margin: 8px;

  color: #9D9D9D;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
}

.review-card > .content > .date {
  padding: 0px;
  margin: 8px;

  color: #9D9D9D;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Review from '@/models/review'
import { dateToString } from '@/services/datetime'

export default defineComponent({
  name: 'review-card',

  props: {
    review: {
      type: Object as PropType<Review>,
      required: true,
    }
  },

  computed: {
    createdAt(): string {
      return dateToString(this.review.createdAt)
    }
  },

  methods: {
    chooseStar(i: number): string {
      if (i <= (this.review.grade ?? 0)) {
        return require('@/assets/ic_star.svg')
      } else {
        return require('@/assets/ic_star_empty.svg')
      }
    }
  },
})
</script>
