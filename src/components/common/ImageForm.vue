<template>
  <div class="image-form">
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
.image-form {
  width: 100%;
  height: 100%;
  
  box-sizing: border-box;
  padding: 5px 5px 0 5px;

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
  margin: 5px;
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

  emits: ['update'],

  props: {
    image: {
      type: null as unknown as PropType<string|null>,
      required: true,
      default: null,
    },
  },

  setup() {
    
  },

  data() {
    return {
      localUrl: this.image,
    }
  },

  methods: {
    uploadImage(e: Event) {
      if (this.localUrl !== null && this.localUrl !== this.image) {
        URL.revokeObjectURL(this.localUrl)
      }

      let target = e.target as HTMLInputElement
      let file = target.files ? target.files[0] : null

      if (file) {
        this.localUrl = URL.createObjectURL(file)
      } else {
        this.localUrl = null
      }
      this.$emit('update', this.localUrl)
    },

    clearImage() {
      let input = this.$refs.imageLoader as HTMLInputElement
      input.value = ''

      if (this.localUrl !== null && this.localUrl !== this.image) {
        URL.revokeObjectURL(this.localUrl)
      }
      this.localUrl = null
      this.$emit('update', this.localUrl)
    },

    resetImage() {
      let input = this.$refs.imageLoader as HTMLInputElement
      input.value = ''
      this.localUrl = this.image
      this.$emit('update', this.localUrl)
    },
  },

  watch: {
    image(payload: string) {
      this.localUrl = payload
    },
  }
})
</script>
