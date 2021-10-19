<template>
  <div class="admin-records-view">
    <div class="record-card" v-for="record in records" :key="record.id">
      <div class="picture-box">
        <img class="picture" :src="record.url"/>
      </div>
      <p class="info">Создано: {{formatDate(record)}}</p><br>
      <action-button>Удалить</action-button>
    </div>
  </div>
</template>


<style scoped>
.admin-records-view {
  width: 100%;
  height: 100%;

  background: #192F60;

  display: flex;
  flex-wrap: wrap;
}

.admin-records-view > .record-card {
  margin: 32px;

  border-radius: 10px;

  background: #00174A;

  display: flex;
  flex-direction: column;
}

.admin-records-view > .record-card > .picture-box {
  width: 256px;
  height: 256px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-records-view > .record-card > .picture-box > .picture {
  max-width: 100%;
  max-height: 100%;

  border-radius: 10px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import RecordsRepository from '@/repositories/recordsRepository'
import Record from '@/models/record'
import { dateToString } from '@/services/datetime'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  components: { ActionButton },
  name: 'admin-records-view',
  
  setup() {
    return {
      recordsRepository: new RecordsRepository(),
    }
  },

  data() {
    return {
      records: [] as Record[],
      loading: false,
      toLoad: true,
      page: 0,
      pendingDelete: null as Record|null,
    }
  },

  mounted() {
    this.loadUp(false)

    window.onscroll = () => {
      this.onScroll()
    }
  },

  methods: {
    onScroll(): void {
      let height = document.documentElement.scrollTop + window.innerHeight
      let bottomOfWindow = height === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadUp(false)
      }
    },

    loadUp(refresh: boolean): void {
      if (refresh) {
        this.loading = false
        this.records = []
        this.page = 0
        this.toLoad = true
      }

      if (!this.loading && this.toLoad) {
        this.loading = true
        this.recordsRepository.getRecords(this.page)
          .then(result => {
            if (this.loading) {
              if (result.length > 0) {
                result.forEach(item => this.records.push(item))
                this.page++
              } else {
                this.toLoad = false
              }
              this.loading = false
              this.onScroll()
            }
          })
      }
    },

    onDelete(model: Record): void {
      this.pendingDelete = model
    },
    onDeleteSubmit(): void {
      if (this.pendingDelete !== null) {
        this.recordsRepository.deleteRecord(this.pendingDelete.id)
          .then(model => {
            this.pendingDelete = null
            let index = this.records.findIndex(record => record.id == model.id)
            this.records.splice(index, 1)
          })
      } else {
        this.pendingDelete = null
      }
    },
    onDeleteReject(): void {
      this.pendingDelete = null
    },

    formatDate(record: Record): string {
      return dateToString(record.createdAt)
    }
  },
})
</script>
