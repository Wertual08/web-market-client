<template>
  <div id="box">
    <div id="sections">
      <admin-sections-tree 
        v-for="section in sections" 
        :key="section.name" 
        :section="section" 
        @selected="selectSection"
      />
    </div>
    <div id="redactor" v-if="selectedSection !== null">
      <admin-section-form :section="selectedSection" @save-section="saveSection"/>
    </div>
  </div>
</template>


<style scoped>
#box {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
}

#sections {
  display: flex;
  flex-direction: column;
}

#redactor {
  width: 500px;
  height: 300px;

  position: sticky;
  top: 20px;
  right: 20px;

  display: flex;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AdminSectionsTree from '@/components/AdminSectionsTree.vue'
import AdminSectionForm from '@/components/common/AdminSectionForm.vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'
import PutSectionRequest from '@/requests/admin/putSectionRequest'
import CreateSectionRequest from '@/requests/admin/createSectionRequest'

export default defineComponent({
  name: "admin-products-page",
  components: {
    AdminSectionsTree,
    AdminSectionForm,
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      recordsRepository: new RecordsRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[],
      selectedSection: null as Section|null,
    }
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then(models => this.sections = models)
  },

  methods: {
    selectSection(section: Section|null) {
      this.selectedSection = section
    },

    async saveSection(section: Section, coverUrl: string|null) {
      let currentUrl = RecordsRepository.toUrl(section.record?.identifier ?? null)
      if (currentUrl != coverUrl) {
        if (coverUrl) {
          let blob = await fetch(coverUrl).then(r => r.blob())
          section.record = await this.recordsRepository.createRecord(blob)
        } else {
          section.record = null
        }
      }

      if (section.id != -1) {
        var promise = this.sectionsRepository.putSection(
          new PutSectionRequest(section)
        )
      } else {
        var promise = this.sectionsRepository.createSection(
          new CreateSectionRequest(section)
        )
      }
      promise.then(() => {
        this.sectionsRepository.getSections()
          .then(models => this.sections = models)
      })
    },
  },

  computed: {
  },
});
</script>
