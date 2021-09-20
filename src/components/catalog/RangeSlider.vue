<template>
  <div class="range-slider" ref="container" @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
    <div class="rail"></div>
    <div class="filler" :style="fillerStyle"></div>
    <div :class="{ pointer: true, pointerAttached: attached == -1 }" :style="minPointerStyle"></div>
    <div :class="{ pointer: true, pointerAttached: attached == 1 }" :style="maxPointerStyle"></div>
  </div>
</template>


<style scoped>
.range-slider {
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.range-slider > .rail {
  width: 100%;
  height: 1px;
  background: #485677;

  pointer-events: none;
}

.range-slider > .filler {
  position: absolute;
  height: 3px;

  background: #E04040;
  
  pointer-events: none;
}

.range-slider > .pointer {
  position: absolute;

  width: 11px;
  height: 11px;

  background: #E04040;
  border-radius: 50%;

  pointer-events: none;
  cursor: pointer;
}

.range-slider > .pointerAttached {
  background: #B03030;
  box-shadow: 0px 0px 5px black;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'range-slider',

  emits: ['update:min', 'update:max'],

  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      typs: Number,
      default: 1,
    },
  },

  data() {
    return {
      selected: 0,
      attached: 0,
      minValue: this.min,
      maxValue: this.max,
    }
  },

  methods: {
    getFraction(event: MouseEvent) {
        let target = this.$refs.container as HTMLDivElement
        let dim = target.getBoundingClientRect()
        return Math.min(1, Math.max(0, (event.clientX - dim.left) / dim.width))
    },

    position(fraction: number) {
      if (this.selected == -1) {
        this.minValue = Math.min(this.maxValue, fraction)
      }
      if (this.selected == 1) {
        this.maxValue = Math.max(this.minValue, fraction)
      }
    },
    select(fraction: number): number {
      if (fraction < this.minValue) {
        return -1
      } else if (fraction > this.maxValue) {
        return 1
      } else if (Math.abs(this.minValue - fraction) < Math.abs(this.maxValue - fraction)) {
        return -1
      } else {
        return 1
      }
    },

    onMouseDown(event: MouseEvent) {
      let fraction = this.getFraction(event)
      
      this.selected = this.select(fraction)
      this.position(fraction)

      document.onmousemove = this.onMouseMove
      document.onmouseup = this.onMouseUp
    },
    onMouseMove(event: MouseEvent) {
      let fraction = this.getFraction(event)

      this.position(fraction)
      this.attached = this.select(fraction)
    },
    onMouseLeave() {
      this.attached = this.selected
    },
    onMouseUp() {
      this.selected = 0
      this.attached = 0
      document.onmouseup = null
      document.onmousemove = null
    },
  },

  computed: {
    minPointerStyle(): object {
      return {
        left: `calc(${this.minValue * 100}% - 5px)`
      }
    },
    maxPointerStyle(): object {
      return {
        left: `calc(${this.maxValue * 100}% - 5px)`
      }
    },
    fillerStyle(): object {
      return {
        left: `${this.minValue * 100}%`,
        right: `${(1 - this.maxValue) * 100}%`,
      }
    }
  },

  watch: {
    min(payload: number) {
      this.minValue = payload
    },
    max(payload: number) {
      this.maxValue = payload
    },
    minValue(payload: number) {
      this.$emit('update:min', payload)
    },
    maxValue(payload: number) {
      this.$emit('update:max', payload)
    },
  }
})
</script>
