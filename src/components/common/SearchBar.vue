<template>
  <div class="search-bar">
    <text-input class="text-input" placeholder="Поиск товара" v-model="value"/>
    <img class="icon" src="@/assets/ic_search.svg"/>
  </div>
</template>


<style scoped>
.search-bar {
  background: #355396;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar > .text-input {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.search-bar > .icon {
  width: 24px;
  height: 24px;
  padding-right: 16px;

  cursor: pointer;
}

.search-bar > .icon:hover {
  filter: brightness(200%);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import TextInput from '@/components/common/TextInput.vue'

export default defineComponent({
  components: { TextInput },
  name: 'search-bar',

  props: {
    modelValue: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      value: this.modelValue,
    }
  },

  watch: {
    modelValue(payload: string) {
      this.value = payload
    },
    value(payload: string) {
      this.$emit('update:modelValue', payload)
    },
  },
})
</script>
