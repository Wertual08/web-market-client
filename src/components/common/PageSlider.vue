<template>
  <div class="page-slider">
    <transition :name="transitionName">
      <slot/>
    </transition>
    
    <div v-if="left" class="turner turner-left" @click="turnLeft">
      <img src="@/assets/ic_left.svg"/>
    </div>
    <div v-if="right" class="turner turner-right" @click="turnRight">
      <img src="@/assets/ic_right.svg"/>
    </div>
  </div>
</template>


<style scoped>
.page-slider {
  position: relative;
}

.left-leave-active,
.left-enter-active,
.right-leave-active,
.right-enter-active {
  transition: 0.5s;
}
.left-leave-to,
.right-enter-from {
  transform: translateX(150%);
}
.left-enter-from,
.right-leave-to {
  transform: translateX(-150%);
}

.page-slider > .turner {
  width: 40px;
  height: 40px;

  border-radius: 50%;

  position: absolute;
  background: white;

  border: 1px solid #E3ECF3;

  box-shadow: 0px 5px 20px #EAF0F4;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;

  cursor: pointer;
}
.page-slider > .turner:hover {
  background: lightgray;
}
.page-slider > .turner:active {
  background: #DDDDDD;
}

.page-slider > .turner-left {
  left: -20px;
  top: calc(50% - 20px);
}

.page-slider > .turner-right {
  right: -20px;
  top: calc(50% - 20px);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'page-slider',

  emits: ['left', 'right'],

  props: {
    left: {
      type: Boolean,
      default: true,
    },
    right: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      direction: false,
    }
  },

  computed: {
    transitionName(): string {
      return this.direction ? 'right' : 'left'
    },
  },

  methods: {
    turnLeft() {
      if (this.left) {
        this.direction = false
        this.$emit('left')
      }
    },
    turnRight() {
      if (this.right) {
        this.direction = true
        this.$emit('right')
      }
    },
  },
})
</script>
