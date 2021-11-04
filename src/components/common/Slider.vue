<template>
  <div class="slider">
    <div class="inner" ref="container" :style="innerStyle">
      <slot/>
    </div> 
    <div class="controls">
      <div class="turners">
        <button class="turner" @click="turnLeft"><img src="@/assets/ic_left.svg"/></button>
        <button class="turner" @click="turnRight"><img src="@/assets/ic_right.svg"/></button>
      </div>
      <div class="selectors">
        <button class="selector" :style="selectorStyle(i - 1)" v-for="i in count" :key="i" @click="current=i - 1"/>
      </div>
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
  flex-direction: column;
  align-content: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;

  pointer-events: none;
}

.slider > .controls > .turners {
  display: flex;
  justify-content: space-between;
}
.slider > .controls > .turners > .turner {
  width: 48px;
  height: 64px;
  margin: 16px;
  padding: 0;

  color: rgba(255, 255, 255, 0.6);
  background: rgba(88, 88, 88, 0.2);
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  cursor: pointer;
  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}
.slider > .controls > .turners > .turner:hover {
  background: rgba(88, 88, 88, 0.3);
  border: 2px solid rgba(0, 0, 0, 0.2);
}
.slider > .controls > .turners > .turner:active {
  background: rgba(88, 88, 88, 0.4);
  border: 2px solid rgba(0, 0, 0, 0.3);
}
.slider > .controls > .turners > .turner > img {
  width: 50%;
  height: 50%;

  filter: opacity(0.6);
}

.slider > .controls > .selectors  {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.slider > .controls > .selectors > .selector {
  width: 8px;
  height: 8px;

  margin: 1px;
  
  background: #ffffffaa;
  
  border-color: #00000088;
  border-width: 1px;
  border-radius: 3px;

  cursor: pointer;
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
    turnLeft() {
      this.current--
      if (this.current < 0) {
        this.current = this.count - 1
      }
    },
    turnRight() {
      this.current++
      if (this.current >= this.count) {
        this.current = 0
      }
    },

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
