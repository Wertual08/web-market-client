<template>
  <router-link tag="div" class="main-section-card" :to="url">
    <div class="image-box">
      <img :src="sectionCover(section)"/>
    </div>
    <div class="specifications">
      <p class="name">{{section.name}}</p>
      <p class="price">от {{minPrice.toFixed(2)}} ₽</p>
      <p class="products">Позиций: {{productsCount}}</p>
    </div>
  </router-link>
</template>


<style scoped>
.main-section-card {
  padding: 30px;
  
  box-sizing: border-box;

  background: white;

  text-decoration: none;;

  display: flex;
  flex-direction: column;
}

.main-section-card > .image-box {
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-section-card > .image-box > img {
  max-width: 100%;
  max-height: 100%;

  user-select: none;
  pointer-events: none;
}

.main-section-card > .specifications {
  display: flex;
  flex-direction: column;
}

.main-section-card > .specifications > .name {
  width: 100%;
  padding: 0;

  box-sizing: border-box;

  color: #363F53;

  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
}

.main-section-card > .specifications > .price {
  width: 100%;
  padding: 0;

  box-sizing: border-box;

  color: #363F53;

  text-align: left;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.main-section-card > .specifications > .products {
  width: 100%;
  padding: 0;
  margin: 0;

  box-sizing: border-box;

  color: #E04040;

  text-align: left;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
</style>


<script lang="ts">
import Section from '@/models/section'
import RecordsRepository from '@/repositories/recordsRepository'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'main-section-card',

  props: {
    section: {
      type: Object as PropType<Section>,
      required: true,
    },
    minPrice: {
      type: Number,
      required: true,
    },
    productsCount: {
      type: Number,
      required: true,
    }
  },

  computed: {
    url(): object {
      return {
        path: '/catalog',
        query: {
          sections: this.section.id
        }
      }
    }
  },

  methods: {
    sectionCover(model: Section): string {
      return RecordsRepository.toUrl(model.record)
    },
  }
})
</script>
