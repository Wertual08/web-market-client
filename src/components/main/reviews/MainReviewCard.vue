<template>
  <div class="main-review-card">
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
  justify-content: flex-start;
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

.main-review-card > .content > .rating {
  margin: 18px;

  display: flex;
}

.main-review-card > .content > .name {
  padding: 0px;
  margin: 4px;

  color: white;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
}

.main-review-card > .content > .address {
  padding: 0px;
  margin: 8px;

  color: #9D9D9D;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
}

.main-review-card > .content > .date {
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
  name: 'main-review-card',

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
