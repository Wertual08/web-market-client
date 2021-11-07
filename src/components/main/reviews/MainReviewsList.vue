<template>
  <div class="main-reviews-list">
    <div class="columns">
      <div class="left">
        <p class="title-question">Что говорят?</p>
        <p class="title-first">Отзывы</p>
        <p class="title-second">клиентов о нас</p>
      </div>
      <div class="right">
        <router-link class="to-full" to="/reviews">Все отзывы о компании Korea Bus</router-link>
      </div>
    </div>
    <div class="container">
      <main-review-card :review="plug"/>
    </div>
  </div>
</template>


<style scoped>
.main-reviews-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-reviews-list > .columns {
  width: 100%;

  display: flex;
}

.main-reviews-list > .columns > .left {
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-reviews-list > .columns > .left > .title-question {
  margin: 64px 0 16px 0;

  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
}

.main-reviews-list > .columns > .left > .title-first {
  padding: 0;
  margin: 0px 0;

  color: #BB1111;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}

.main-reviews-list > .columns > .left > .title-second {
  padding: 0;
  margin: 0;

  color: #5C6175;
  
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
}

.main-reviews-list > .columns > .right {
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.main-reviews-list > .columns > .right > .to-full {
  padding: 9px;

  border-radius: 6px;

  background: #EAEAEA;
  color: #5C6175;
  
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;
}

.main-reviews-list > .container {
  width: 100%;

  margin: 38px 0 64px 0;

  display: flex;

  justify-content: center;
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
