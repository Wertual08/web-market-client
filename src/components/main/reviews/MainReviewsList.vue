<template>
  <div class="main-reviews-list">
    <modal-window v-show="createRequest" @close="finishCreate">
      <create-review-window @finish="finishCreate"/>
    </modal-window>

    <div class="columns">
      <div class="left">
        <p class="title-question">Что говорят?</p>
        <p class="title-first">Отзывы</p>
        <p class="title-second">клиентов о нас</p>
      </div>
      <div class="right">
        <action-button class="new-cancel" @click="startCreate">
          Оставить отзыв
        </action-button>
        <router-link class="to-full" to="/reviews">Все отзывы о компании Korea Bus</router-link>
      </div>
    </div>
    <div class="container">
      <main-review-card class="review" v-for="review in reviews" :key="review.id" :review="review"/>
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

.main-reviews-list > .columns > .right > .new-cancel {
  width: auto;
  height: 48px;

  padding: 0 16px;
  margin-bottom: 16px;

  
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
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
.main-reviews-list > .columns > .right > .to-full:hover {
  background: #DDDDDD;
}

.main-reviews-list > .container {
  width: 100%;
  min-height: 342px;

  margin: 38px 0 64px 0;

  display: flex;

  justify-content: center;
}

.main-reviews-list > .container > .review {
  margin: 0 15px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import MainReviewCard from './MainReviewCard.vue'
import Review from '@/models/review'
import ActionButton from '@/components/common/ActionButton.vue'
import CreateReviewWindow from '@/components/windows/CreateReviewWindow.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import ReviewsRepository from '@/repositories/reviewsRepository'

export default defineComponent({
  components: { MainReviewCard, ActionButton, CreateReviewWindow, ModalWindow },
  name: 'main-reviews-list',

  emits: ['new-review'],

  setup() {
    return {
      reviewsRepository: new ReviewsRepository(),
    }
  },

  data() {
    return {
      reviews: [] as Review[],
      createRequest: false,
    }
  },

  mounted() {
    this.reviewsRepository.getReviews(0)
      .then(models => this.reviews = models)
  },

  methods: {
    startCreate() {
      this.createRequest = true
    },
    finishCreate(model: Review|undefined) {
      this.createRequest = false
      if (model) {
        this.reviews.unshift(model)
      }
    },
  }
})
</script>
