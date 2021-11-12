<template>
  <div class="reviews-view">
    <p class="title">Отзывы</p>
    <div class="content">
      <review-card 
        class="review" 
        v-for="review in reviews" 
        :key="review.id" 
        :review="review"
      />
    </div>
  </div>
</template>


<style scoped>
.reviews-view {
  background: #E5E5E5;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.reviews-view > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;

  display: flex;
  align-items: center;
}

.reviews-view > .content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.reviews-view > .content > .review {
  width: 370px;
  height: 342px;

  margin: 15px;
}
</style>


<script lang="ts">
import ReviewCard from '@/components/common/ReviewCard.vue'
import Review from '@/models/review'
import ReviewsRepository from '@/repositories/reviewsRepository'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ReviewCard },

  name: 'reviews-view',
  
  setup() {
    return {
      reviewsRepository: new ReviewsRepository()
    }    
  },

  data() {
    return {
      page: 0,
      allLoaded: false,
      loading: false,
      reviews: [] as Review[],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.loadUp()
  },

  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    loadUp() {
      if (!this.allLoaded && !this.loading) {
        this.loading = true
        this.reviewsRepository.getReviews(this.page++)
          .then(models => {
            models.forEach(model => this.reviews.push(model))
            if (models.length == 0) {
              this.allLoaded = true
            }
            this.loading = false
          })
      }
    },

    onScroll() {
      const fraction = window.scrollY / (window.document.body.clientHeight - window.innerHeight)
      if (fraction > 0.7) {
        this.loadUp()
      }
    },
  },
})
</script>
