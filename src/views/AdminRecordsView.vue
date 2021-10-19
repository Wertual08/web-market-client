<template>
  <div class="admin-records-view">

  </div>
</template>


<style scoped>
.admin-records-view {
  width: 100%;
  height: 100%;

  background: #192F60;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import RecordsRepository from '@/repositories/recordsRepository'
import Record from '@/models/record'

export default defineComponent({
  name: 'admin-records-view',
  
  setup() {
    return {
      recordsRepository: new RecordsRepository(),
    }
  },

  data() {
    return {
      records: [] as Record[],
    }
  }
})
</script>
