<template>
  <div class="main-reviews-list" ref="container">
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
    <page-slider class="slider" :left="leftEnabled" :right="rightEnabled" @left="turnLeft" @right="turnRight">
      <div class="slide" :key="displayIndex">
        <review-card 
          class="review" 
          v-for="review in displayReviews" 
          :key="review.id" 
          :review="review"
        />
      </div>
    </page-slider>
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

.main-reviews-list > .slider {
  position: relative;

  width: 100%;
  min-height: 342px;

  margin: 38px 0 64px 0;

  display: flex;

  justify-content: center;
}

.slide {
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: center;
}
.slide > .review {
  width: 370px;
  height: 342px;

  margin: 0 15px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ReviewCard from '../../common/ReviewCard.vue'
import Review from '@/models/review'
import ActionButton from '@/components/common/ActionButton.vue'
import CreateReviewWindow from '@/components/windows/CreateReviewWindow.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import ReviewsRepository from '@/repositories/reviewsRepository'
import PageSlider from '@/components/common/PageSlider.vue'

export default defineComponent({
  components: { ReviewCard, ActionButton, CreateReviewWindow, ModalWindow, PageSlider },
  name: 'main-reviews-list',

  emits: ['new-review'],

  setup() {
    return {
      reviewsRepository: new ReviewsRepository(),
    }
  },

  data() {
    return {
      capacity: 0,
      page: 0,
      reviews: [] as Review[],
      allLoaded: false,

      displayIndex: 0,
      createRequest: false,

      ro: null as ResizeObserver|null,
    }
  },

  mounted() {
    this.ro = new ResizeObserver(this.onResize)
    this.ro.observe(this.$refs.container as HTMLDivElement)
    
    this.loadUp()
  },
  unmounted() {
    this.ro?.unobserve(this.$refs.container as HTMLDivElement)
  },

  computed: {
    leftEnabled(): boolean {
      return this.displayIndex > 0
    },

    rightEnabled(): boolean {
      return !this.allLoaded || this.displayIndex < this.reviews.length - this.capacity
    },

    displayReviews(): Review[] {
      return this.reviews.slice(
        this.displayIndex, 
        this.displayIndex + this.capacity
      )
    },
  },

  methods: {
    onResize() {
      let container = this.$refs.container as HTMLDivElement
      this.capacity = Math.floor(container.clientWidth / 400)
    },

    loadUp() {
      this.reviewsRepository.getReviews(this.page++)
      .then(models => { 
        this.reviews = models
      })
    },

    startCreate() {
      this.createRequest = true
    },
    finishCreate(model: Review|undefined) {
      this.createRequest = false
      if (model) {
        this.reviews.unshift(model)
      }
    },

    turnLeft() {
      this.displayIndex -= this.capacity
      if (this.displayIndex < 0) {
        this.displayIndex = 0
      }
    },

    async turnRight() {
      if (this.displayIndex + this.capacity >= this.reviews.length) {
        if (!this.allLoaded) {
          let models = await this.reviewsRepository.getReviews(this.page++)
          if (models.length == 0) {
            this.allLoaded = true
          } else {
            models.forEach(model => this.reviews.push(model))
            this.displayIndex += this.capacity
          }
        }
      } else {
        this.displayIndex += this.capacity
      }
    },
  },
})
</script>
