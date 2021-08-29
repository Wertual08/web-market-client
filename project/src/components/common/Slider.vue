<template>
  <div>
    <input type="radio" v-for="i in count" :key="i" @click="current=i - 1">
    <div id="slides">
      <div class="inner" ref="container" :style="innerStyle">
        <slot/>
      </div> 
    </div>
  </div>
</template>


<style scoped>

#slides {
  overflow: hidden;
}

#slides .inner {
  display: flex;

  transform: translateZ(0);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'slider',
  data() {
    return {
      count: 0,
      current: 0,
    }
  },
  mounted() {
    let container = this.$refs.container as HTMLDivElement;
    this.count = container.children.length;
  },
  methods: {
  },
  computed: {
    innerStyle(): object {
      return { 
        width: `${this.count}00%`, 
        marginLeft: `-${this.current}00%`
        }
    }
  },
})
</script>
