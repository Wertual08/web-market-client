<template>
    <div class="slides">
      <div class="inner" ref="container" :style="innerStyle">
        <slot/>
      </div> 
      <div id="controls">
        <button class="selector" :style="selectorStyle(i - 1)" v-for="i in count" :key="i" @click="current=i - 1"/>
      </div>
    </div>
</template>


<style scoped>
.slides {
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100%;
}

.inner {
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;

  display: flex;

  transform: translateZ(0);
  transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
}

#controls {
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

.selector {
  display: inline-block;
  align-self: flex-end;

  width: 8pt;
  height: 8pt;

  cursor: pointer;

  margin: 1pt;
  margin-bottom: 10pt;
  
  background: #ffffffaa;
  
  border-color: #00000088;
  border-width: 1pt;
  border-radius: 3pt;
  
  pointer-events: auto;
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
})
</script>
