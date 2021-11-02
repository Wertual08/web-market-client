<template>
  <div class="admin-public-view">
    <slider class="slider" v-model:selected-index="selectedIndex">    
      <div class="slide" v-for="(image, index) in images" :key="index">
        <image-form class="image" :image="image.url()" @update="(url) => updateImage(index, url)"/>
      </div>
    </slider>
    <div class="controls">
      <action-button class="add-image" @click="addImage">Добавить изображение</action-button>
      <action-button class="save-button" @click="save">Сохранить</action-button>
    </div>
  </div>
</template>


<style scoped>
.admin-public-view {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin-public-view > .slider {
  width: 90%;
  height: 512px;
}

.slide {
  width: 100%;
  height: 100%;
}

.slide > .image {
  width: 100%;
  height: 100%;
}

.admin-public-view > .controls {
  width: 90%;

  display: flex;
  justify-content: space-between;
}

.admin-public-view > .controls > .add-image {
  width: 200px;
  height: 48px;

  margin: 16px 16px 16px 0;
}

.admin-public-view > .controls > .save-button {
  width: 110px;
  height: 48px;

  margin: 16px 0 16px 16px;
}
</style>


<script lang="ts">
import ActionButton from '@/components/common/ActionButton.vue'
import ImageForm from '@/components/common/ImageForm.vue'
import Slider from '@/components/common/Slider.vue'
import ImageEntry from '@/models/local/imageEntry'
import Record from '@/models/record'
import PublicRepository from '@/repositories/admin/publicRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Slider, ImageForm, ActionButton },
  name: 'admin-public-view',

  setup() {
    return {
      publicRepository: new PublicRepository(),
      recordsRepository: new RecordsRepository(),
    }
  },

  mounted() {
    this.publicRepository.getMainSlides()
      .then(models => this.currentImages = models)
  },

  data() {
    return {
      currentImages: [] as Record[],
      images: [] as ImageEntry[],
      selectedIndex: 0,
    }
  },

  methods: {
    addImage() {
      this.images.splice(this.selectedIndex + 1, 0, new ImageEntry())
    },
    updateImage(position: number, url: string|null) {
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
      var recordIds: number[] = []
      for (let i = 0; i < this.images.length; i++) {
        const image = this.images[i]
        
        if (image.newUrl !== null) {
          if (image.record?.url == image.newUrl) {
            recordIds.push(image.record.id)
          } else {
            const blob = await fetch(image.newUrl).then(r => r.blob())
            const record = await this.recordsRepository.createRecord(blob)
            recordIds.push(record.id)
          }
        }
      }

      this.publicRepository.updateMainSlides(recordIds)
        .then(models => this.currentImages = models)
    },
  },

  watch: {
    currentImages(payload: Record[]) {
      this.images = []
      for (let i = 0; i < payload.length; i++) {
        this.images.push(new ImageEntry(payload[i]))
      }
    }
  },
})
</script>
