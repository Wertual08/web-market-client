<template>
  <div class="admin-product-form">
    <div class="images">
      <slider class="slider" v-model:selected-index="selectedIndex">    
        <div class="slide" v-for="(image, index) in images" :key="index">
          <image-form class="image" :image="image.url()" @update="(url) => imageUpdate(index, url)"/>
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

      <div class="sections">
        <admin-product-section-label 
          v-for="section in allSections" 
          :key="section.name" 
          :section="section" 
          :enabled="sectionEnabled(section.id)"
          @toggle="sectionToggle"
        />
      </div>

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

.admin-product-form > .properties > .sections {
  display: flex;
  flex-wrap: wrap;
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
import ImageForm from '@/components/common/ImageForm.vue'
import AdminProductSectionLabel from './AdminProductSectionLabel.vue'
import { dateToString } from '@/services/datetime'
import ImageEntry from '@/models/local/imageEntry'
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'



export default defineComponent({
  name: 'admin-product-form',

  components: { Slider, ActionButton, ImageForm, AdminProductSectionLabel },

  emits: ['save'],

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    sections: {
      type: Array as PropType<Section[]>,
      required: true,
    }
  },

  setup() {
    return { 
      recordsRepository: new RecordsRepository(),
    }
  },

  data() {
    return {
      allSections: this.getSections(this.sections) as Section[],
      selectedSections: [] as number[],
      images: this.productImages() as ImageEntry[],
      selectedIndex: 0,
    }
  },

  methods: {
    getSections(sections: Section[]): Section[] {
      let result: Section[] = []
      for (let i = 0; i < sections.length; i++) {
        result.push(sections[i])
        result = result.concat(this.getSections(sections[i].sections))
      }
      return result
    },
    productImages(): ImageEntry[] {
      const records = this.product.records
      let result: ImageEntry[] = []
      for (let i = 0; i < records.length; i++) {
        result.push(new ImageEntry(records[i]))
      }
      return result
    },
    productSections(): number[] {
      let sections = this.product.sections
      let result: number[] = []
      for (let i = 0; i < sections.length; i++) {
        result.push(sections[i].id)
      }
      return result
    },

    addImage() {
      this.images.splice(this.selectedIndex + 1, 0, new ImageEntry())
    },
    imageUpdate(position: number, url: string|null) {
      if (url === null) {
        this.images.splice(position, 1)
        if (this.selectedIndex >= this.images.length) {
          this.selectedIndex--
        }
      } else {
        this.images[position].newUrl = url
      }
    },
    async save() {
      this.product.records = []
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i]
        
        if (image.newUrl !== null) {
          if (image.record?.url == image.newUrl) {
            this.product.records.push(image.record)
          } else {
            const blob = await fetch(image.newUrl).then(r => r.blob())
            const record = await this.recordsRepository.createRecord(blob)
            this.product.records.push(record)
          }
        }
      }

      this.product.sections = []
      for (let i = 0; i < this.selectedSections.length; i++) {
        let id = this.selectedSections[i];
        let section: Section|undefined = this.allSections.find(section => section.id == id)
        if (section !== undefined) {
          this.product.sections.push(section)
        }
      }

      this.$emit('save', this.product)
    },

    sectionToggle(id: number) {
      let index = this.selectedSections.indexOf(id)
      if (index < 0) {
        this.selectedSections.push(id)
      } else {
        this.selectedSections.splice(index, 1)
      }
    },
    sectionEnabled(id: number): boolean {
      return this.selectedSections.indexOf(id) >= 0
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
    sections(payload: Section[]) {
      this.allSections = this.getSections(payload)
    },
    product() {
      this.selectedSections = this.productSections()
      this.images = this.productImages()
    }
  }
})
</script>
