<template>
  <modal-window v-if="warningVisible" @close="onDeleteReject">
    <delete-warning-window @submit="onDeleteSubmit" @reject="onDeleteReject">
      Вы уверены, что хотите удалить товар "{{product.code}}: {{ product.name }}"?
      Это действие необратимо.
    </delete-warning-window>
  </modal-window>

  <div class="admin-product-form">
    <div class="images">
      <slider class="slider" v-model:selected-index="selectedIndex">    
        <div class="slide" v-for="(image, index) in images" :key="index">
          <image-form class="image" :image="image.url()" @update="(url) => imageUpdate(index, url)"/>
        </div>
      </slider>
      <action-button class="add-image" @click="addImage">Добавить изображение</action-button>
    </div>
    <div class="properties">
      <label class="name">Артикул</label>
      <input class="field" v-model="product.code"/><br>
      <label class="name">Название</label>
      <input class="field" v-model="product.name"/><br>
      <label class="name">Цена</label>
      <input class="field" type="number" v-model="product.price"/><br>
      <label class="name">Старая цена</label>
      <input class="field" type="number" v-model="oldPrice"/><br>
      <label class="name">Описание</label>
      <textarea class="field large-field" v-model="product.description"/><br>
      <label class="name">Информация администратора</label>
      <textarea class="field large-field" v-model="product.privateInfo"/><br>
      <p class="name">Создан: [{{ createdAt }}] Обновлен: [{{ updatedAt }}]</p>

      <div class="sections">
        <admin-product-section-label 
          v-for="section in allSections" 
          :key="section.name" 
          :section="section" 
          :enabled="sectionEnabled(section.id)"
          @toggle="sectionToggle"
        />
      </div>

      <div class="actions">
        <action-button class="save" @click="saveProduct">Сохранить</action-button>
        <action-button class="delete" @click="warningVisible=true">Удалить</action-button>
      </div>
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

.admin-product-form > .properties > .actions {
  display: flex;
  justify-content: space-between;
}

.admin-product-form > .properties > .actions > .save {
  width: 80px;
  height: 32px;
  margin-top: 16px;
}

.admin-product-form > .properties > .actions > .delete {
  width: 64px;
  height: 32px;
  margin-top: 16px;
  background: red;
}
.admin-product-form > .properties > .actions > .delete:hover {
  background: #DD0000;
}
.admin-product-form > .properties > .actions > .delete:active {
  background: #AA0000;
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
import ModalWindow from '@/components/windows/ModalWindow.vue'
import DeleteWarningWindow from '@/components/windows/DeleteWarningWindow.vue'



export default defineComponent({
  name: 'admin-product-form',

  components: { Slider, ActionButton, ImageForm, AdminProductSectionLabel, ModalWindow, DeleteWarningWindow },

  emits: ['save', 'delete'],

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
      warningVisible: false,
      oldPrice: this.product.oldPrice?.toString() ?? '',
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

    async saveProduct() {
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
    onDeleteReject() {
      this.warningVisible = false
    },
    onDeleteSubmit() {
      this.warningVisible = false
      this.$emit('delete', this.product);
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
    },
    oldPrice(payload: String) {
      this.product.oldPrice = payload.length == 0 || isNaN(+payload) ? null : +payload
      console.log(this.product.oldPrice)
    }
  }
})
</script>
