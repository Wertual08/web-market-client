<template>
  <div class="create-review-window">
    <p class="title">Добавить отзыв</p>
    <text-input class="field" placeholder="Ваше имя" v-model="review.name" :valid="nameValid"/>
    <text-input class="field" placeholder="Адрес" v-model="review.address" :valid="addressValid"/>
    <text-input class="field" placeholder="E-mail" v-model="review.email" :valid="emailValid"/>
    <div class="rating">
      <img 
        class="star" 
        v-for="i in 5"
        :key="i"
        :src="chooseStar(i)"
        @click="selectGrade(i)"
      />
    </div>
    <textarea 
      :class="{ field: true, 'large-field': true, invalid: !descriptionValid }" 
      placeholder="Отзыв" 
      v-model="review.description"
    />
    <action-button class="submit" :disabled="!allValid" @click="submitReview">Отправить</action-button>
  </div>
</template>


<style scoped>
.create-review-window {
  max-width: 400px;

  padding: 16px;

  background: #192F60;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
}

.create-review-window > .title {
  padding: 0px;
  margin: 8px;

  color: white;

  font-family: Inter;
  font-style: bold;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
}

.create-review-window > .field {
  height: 48px;

  padding: 16px;
  margin: 8px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.create-review-window > .large-field {
  border-radius: 6px;

  border: none;
  resize: vertical;

  color: white;
  background: #355396;
}
.create-review-window > .large-field:focus {
  outline: none;
}
.create-review-window > .invalid {
  box-shadow: 0 0 5px 1px red;
}

.create-review-window > .rating {
  display: flex;
  justify-content: center;
}

.create-review-window > .rating > .star {
  margin: 5px;

  cursor: pointer;
}

.create-review-window > .submit {
  width: auto;
  height: 48px;

  margin: 8px;
}
</style>


<script lang="ts">
import Review from '@/models/review'
import { defineComponent } from 'vue'
import TextInput from '../common/TextInput.vue'
import ActionButton from '../common/ActionButton.vue'
import ReviewsRepository from '@/repositories/reviewsRepository'
import { emailRegex, requiredRegex } from '@/services/regex'

export default defineComponent({
  name: 'create-review-window',

  components: { TextInput, ActionButton },

  emits: ['finish'],

  setup() {
    return {
      reviewsRepository: new ReviewsRepository(),
    }
  },

  data() {
    return {
      review: new Review(),
      creating: false,
    }
  },

  computed: {
    nameValid(): boolean {
      return requiredRegex.test(this.review.name) && 
        this.review.name.length <= 25
    },
    addressValid(): boolean {
      return requiredRegex.test(this.review.address) && 
        this.review.address.length <= 40
    },
    emailValid(): boolean {
      return emailRegex.test(this.review.email ?? '')
    },
    descriptionValid(): boolean {
      return requiredRegex.test(this.review.description) &&
        this.review.description.length <= 256
    },
    gradeValid(): boolean {
      return this.review.grade !== null
    },
    allValid(): boolean {
      return this.nameValid &&
        this.addressValid &&
        this.emailValid && 
        this.descriptionValid &&
        this.gradeValid 
    },
  },

  methods: {
    chooseStar(i: number): string {
      if (i <= (this.review.grade ?? 0)) {
        return require('@/assets/ic_star.svg')
      } else {
        return require('@/assets/ic_star_empty.svg')
      }
    },

    selectGrade(grade: number) {
      this.review.grade = grade
    },

    submitReview() {
      if (!this.creating) {
        this.creating = true
        this.reviewsRepository.createReview(this.review)
          .then(model => {
            this.$emit('finish', model)
            this.creating = false
          })
      }
    },
  }
})
</script>

