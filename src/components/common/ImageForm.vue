<template>
  <div id="box">
    <img id="image-preview" :src="localUrl">
    <div id="controls">
      <input id="image-input" type="file" accept="image/*" @change="uploadImage($event)" ref="imageLoader"/>
      <div>
        <button id="image-clear" @click="clearImage()">Remove</button>
        <button id="image-reset" @click="resetImage()">Reset</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
#box {
  width: 100%;
  height: 100%;
  
  box-sizing: border-box;
  padding: 5pt 5pt 0 5pt;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#image-preview {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

#controls {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-sizing: border-box;
  margin: 5pt;
}

#image-input {
}

#image-clear {
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'image-form',

  emits: ['update:modelValue'],

  props: {
    modelValue: {
      type: null as unknown as PropType<string|null>,
      required: true,
      default: null,
    },
    default: {
      type: null as unknown as PropType<string|null>,
      required: true,
      default: null,
    },
  },

  setup() {
    
  },

  data() {
    return {
      localUrl: this.modelValue,
    }
  },

  methods: {
    uploadImage(e: Event) {
      if (this.localUrl) {
        URL.revokeObjectURL(this.localUrl)
      }

      let target = e.target as HTMLInputElement
      let file = target.files ? target.files[0] : null

      if (file) {
        this.localUrl = URL.createObjectURL(file)
      } else {
        this.localUrl = null
      }
    },

    clearImage() {
      let input = this.$refs.imageLoader as HTMLInputElement
      input.value = ''

      if (this.localUrl) {
        URL.revokeObjectURL(this.localUrl)
      }
      this.localUrl = null
    },

    resetImage() {
      let input = this.$refs.imageLoader as HTMLInputElement
      input.value = ''
      this.localUrl = this.default;
    },
  },

  watch: {
    default() {
      this.resetImage()
    },
    modelValue(url: string|null) {
      this.localUrl = url
    },
    localUrl(url: string|null) {
      this.$emit('update:modelValue', url)
    }
  }
})
</script>
