<template>
  <div class="slider">
    <div class="inner" ref="container" :style="innerStyle">
      <slot/>
    </div> 
    <div class="controls">
      <button class="selector" :style="selectorStyle(i - 1)" v-for="i in count" :key="i" @click="current=i - 1"/>
    </div>
  </div>
</template>


<style scoped>
.slider {
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
}

.slider > .inner {
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;

  display: flex;

  transform: translateZ(0);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

.slider > .controls {
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-content: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;

  pointer-events: none;
}

.slider > .controls > .selector {
  display: inline-block;
  align-self: flex-end;

  width: 8px;
  height: 8px;

  cursor: pointer;

  margin: 1px;
  margin-bottom: 10px;
  
  background: #ffffffaa;
  
  border-color: #00000088;
  border-width: 1px;
  border-radius: 3px;
  
  pointer-events: auto;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'slider',

  emits: ['update:selectedIndex'],
  props: {
    selectedIndex: {
      type: Number,
      default: 0,
    }
  },

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
  updated() {
    let container = this.$refs.container as HTMLDivElement;
    this.count = container.children.length;
  },

  methods: {
    selectorStyle(i: number): object {
      return { 
        width: `${i == this.current ? 14 : 8}pt`, 
      }
    }
  },

  computed: {
    innerStyle(): object {
      return { 
        width: `${this.count}00%`, 
        marginLeft: `-${this.current}00%`
      }
    },
  },

  watch: {
    selectedIndex(payload: number) {
      this.current = payload
    },
    current(payload: number) {
      this.$emit('update:selectedIndex', payload)
    }
  }
})
</script>
