<template>
  <div class="catalog-filter">
    <p class="title">Модельный ряд</p>
    <div class="sections-tree">
      <section-entry 
        v-for="section in sections" 
        :key="section.name" 
        :selectedIds="selectedIds"
        :section="section" 
        @selection="onSelection"
      />
    </div>
    <p class="price-title">Цена</p>
    <range-slider v-model:min="sliderMin" v-model:max="sliderMax" class="slider"/>
    <div class="range-fields">
      <texted-input :class="{ field: true, 'field-invalid': fieldMinInvalid }" v-model="fieldMin">
        <template v-slot:prefix>от</template>
        <template v-slot:suffix>₽</template>
      </texted-input>
      <texted-input :class="{ field: true, 'field-invalid': fieldMaxInvalid }" v-model="fieldMax">
        <template v-slot:prefix>до</template>
        <template v-slot:suffix>₽</template>
      </texted-input>
    </div>
  </div>
</template>


<style scoped>
.catalog-filter {
  width: 100%;

  display: flex;
  flex-direction: column;
}

.catalog-filter > .title {
  padding: 0px;
  margin: 0px;

  color: #C3C5CB;
  
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 200%;
}

.catalog-filter > .sections-tree {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.catalog-filter > .price-title {
  color: #E04040;
  
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
}

.catalog-filter > .slider {
  width: 90%;
}

.catalog-filter > .range-fields {
  widows: 100%;

  display: flex;
  justify-content: flex-start;
}

.catalog-filter > .range-fields > .field {
  height: 26px;
  width: 100px;
  margin: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
}

.catalog-filter > .range-fields > .field-invalid {
  outline: solid rgba(255, 0, 0, 0.5);
}
</style>


<script lang="ts">
import ProductsStats from '@/models/productsStats'
import Section from '@/models/section'
import { defineComponent, PropType } from 'vue'
import RangeSlider from './RangeSlider.vue'
import SectionEntry from './SectionEntry.vue'
import TextedInput from './TextedInput.vue'

export default defineComponent({
  name: 'products-filter',

  emits: ['selection', 'price-range'],

  components: {
    SectionEntry,
    RangeSlider,
    TextedInput,
  },

  props: {
    selectedIds: {
      type: Array as PropType<number[]>,
      required: true,
    },
    sections: {
      type: Array as PropType<Section[]>,
      required: true,
    },
    productsStats: {
      type: Object as PropType<ProductsStats>,
      required: true,
    }
  },

  setup() {
        
  },

  data() {
    return {
      fieldMin: this.productsStats.minPrice.toString(),
      fieldMax: this.productsStats.maxPrice.toString(),

      fieldMinInvalid: false,
      fieldMaxInvalid: false,

      sliderMin: 0,
      sliderMax: 1,

      minPrice: this.productsStats.minPrice,
      maxPrice: this.productsStats.maxPrice,

      priceTimeout: 0
    }
  },

  methods: {
    onSelection(id: number) {
      this.$emit('selection', id)
    }
  },

  watch: {
    productsStats(payload: ProductsStats) {
      this.minPrice = payload.minPrice
      this.maxPrice = payload.maxPrice
    },

    sliderMin(payload: number) {
      this.minPrice = this.productsStats.minPrice + payload * (this.productsStats.maxPrice - this.productsStats.minPrice)
    },
    sliderMax(payload: number) {
      this.maxPrice = this.productsStats.minPrice + payload * (this.productsStats.maxPrice - this.productsStats.minPrice)
    },

    fieldMin(payload: string) {
      const value = +payload
      if (!isNaN(value) && value <= this.maxPrice) {
        this.minPrice = value
        this.fieldMinInvalid = false
      } else {
        this.fieldMinInvalid = true
      }
    },
    fieldMax(payload: string) {
      console.log('shit1')
      const value = +payload
      if (!isNaN(value) && value >= this.minPrice) {
        this.maxPrice = value
        this.fieldMaxInvalid = false
      } else { 
        this.fieldMaxInvalid = true
      }
    },

    minPrice(payload: number) {
      this.sliderMin = (payload - this.productsStats.minPrice) / (this.productsStats.maxPrice - this.productsStats.minPrice)   
      this.fieldMin = payload.toFixed(0)

      clearTimeout(this.priceTimeout)
      this.priceTimeout = setTimeout(() => this.$emit('price-range', this.minPrice, this.maxPrice), 500)
    },
    maxPrice(payload: number) {
      this.sliderMax = (payload - this.productsStats.minPrice) / (this.productsStats.maxPrice - this.productsStats.minPrice)
      this.fieldMax = payload.toFixed(0)   
      console.log('shit')

      clearTimeout(this.priceTimeout)
      this.priceTimeout = setTimeout(() => this.$emit('price-range', this.minPrice, this.maxPrice), 500)
    }
  },
})
</script>
