<template>
  <div class="admin-product-form">
    <div class="images">
      <slider class="slider">    
        <div class="slide" v-for="image in images" :key="image.position">
          <image-form class="image" :image="image.url" @update="(url) => imageUpdate(image.position, url)"/>
        </div>
      </slider>
      <action-button class="add-image" @click="addImage">Add image</action-button>
    </div>
    <div class="properties">
      <h1 class="name">{{ product.id }}</h1>
      <label class="name">Name</label>
      <input class="field" v-model="product.name"/><br>
      <label class="name">Price</label>
      <input class="field" type="number" v-model="product.price"/><br>
      <label class="name">Description</label>
      <textarea class="field large-field" v-model="product.description"/><br>
      <p class="name">Created at: [{{ createdAt }}] Updated at: [{{ updatedAt }}]</p>
      <action-button class="save" @click="save">Save</action-button>
    </div>
  </div>    
</template>


<style scoped>
.admin-product-form {
  width: 100%;
  height: 100%;
  display: flex;
}

.admin-product-form > .images {
  width: 100%;
  margin: 16px;

  display: flex;
  flex-direction: column;
}

.admin-product-form > .images > .slider {
  width: 100%;
  height: 100%;


  border-radius: 10px;

  background: #00174A;
}

.admin-product-form > .images > .add-image {
  height: 32px;
  padding: 10px;
  margin-top: 16px;
  box-sizing: border-box;
}
 
.slide {
  flex: 1, 0, auto;

  width: 100%;
  display: flex;
  flex-direction: column;
}

.slide > .image {
  width: 100%;
  height: 100;
}

img {
  width: 100%;
}

.admin-product-form > .properties {
  width: 100%;
  height: 100%;

  padding: 16px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

.admin-product-form > .properties > .name {
  width: 100%;
  height: 100%;

  margin: 0;
  color: white;
}

.admin-product-form > .properties > .field {
  max-width: 100%;
  width: 100%;
  
  padding: 8px;
  
  box-sizing: border-box;

  color: white;
  background: #00174A;
  border-radius: 6px;
  border: none;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.admin-product-form > .properties > .field:focus {
  outline: none;
}

.admin-product-form > .properties > .large-field {
  resize: vertical;
}

.admin-product-form > .properties > .save {
  width: 64px;
  height: 32px;
  margin-top: 16px;
}
</style>


<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent, PropType } from 'vue'
import Slider from '@/components/common/Slider.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import { dateToString } from '@/services/datetime'
import ImageForm from '@/components/common/ImageForm.vue'


class ImageEntry {
  public id: number = -1
  public position: number = -1
  public url: string|null = null
  public newUrl: string|null = null
}


export default defineComponent({
  name: 'admin-product-form',

  components: { Slider, ActionButton, ImageForm },

  emits: ['save'],

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    }
  },

  setup() {
        
  },

  data() {
    return {
      images: this.productImages() as ImageEntry[],
    }
  },

  methods: {
    productImages(): ImageEntry[] {
      const records = this.product.records
      let result: ImageEntry[] = []
      for (let i = 0; i < records.length; i++) {
        result.push({
          id: records[i].id,
          position: i,
          url: records[i].url,
          newUrl: null,
        })
      }
      return result
    },

    addImage() {
      this.images.push({
        id: -1,
        position: this.images.length,
        url: null,
        newUrl: null,
      })
    },
    imageUpdate(position: number, url: string|null) {
      if (url === null) {
        this.images.splice(position, 1)
        for (let i = position; i < this.images.length; i++) {
          this.images[i].position = i
        }
        console.log(this.images.length)
      } else {
        this.images[position].newUrl = url
      }
    },
    save() {

    },
  },

  computed: {
    createdAt(): string {
      return dateToString(this.product.createdAt)
    },
    updatedAt(): string {
      return dateToString(this.product.updatedAt)
    },
  },

  watch: {
    product() {
      this.images = this.productImages()
    }
  }
})
</script>
