<template>
  <modal-window v-if="pendingDelete" @close="onDeleteReject">
    <delete-warning-window @submit="onDeleteSubmit" @reject="onDeleteReject">
      Вы уверены, что хотите удалить секцию "{{pendingDelete.id}}: {{ pendingDelete.name }}"?
      Это действие необратимо.
    </delete-warning-window>
  </modal-window>

  <div class="admin-products-page">
    <div class="sections">
      <action-button class="create-button" @click="createSection">Создать</action-button>
      <admin-sections-tree 
        v-for="section in sections" 
        :key="section.name" 
        :section="section" 
        @selected="selectSection"
        @delete="deleteSection"
      />
    </div>
    <div class="redactor" v-if="selectedSection !== null">
      <admin-section-form :section="selectedSection" @save-section="saveSection"/>
    </div>
  </div>
</template>


<style scoped>
.admin-products-page {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
}

.admin-products-page > .sections {
  display: flex;
  flex-direction: column;
}

.admin-products-page > .sections > .create-button {
  width: 80px;
  height: 30px;

  margin: 16px;
}

.admin-products-page > .redactor {
  width: 500px;
  height: 300px;

  position: sticky;
  top: 75px;
  right: 20px;

  display: flex;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AdminSectionsTree from '@/components/admin/sections/AdminSectionsTree.vue'
import AdminSectionForm from '@/components/admin/sections/AdminSectionForm.vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import Section from '@/models/admin/section'
import ActionButton from '@/components/common/ActionButton.vue'
import DeleteWarningWindow from '@/components/windows/DeleteWarningWindow.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'

export default defineComponent({
  name: "admin-products-page",
  components: {
    AdminSectionsTree,
    AdminSectionForm,
    ActionButton,
    DeleteWarningWindow,
    ModalWindow,
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
      pendingDelete: null as Section|null,
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

    createSection() {
      this.selectedSection = new Section()
    },

    deleteSection(section: Section) {
      this.pendingDelete = section
    },

    onDeleteSubmit() {
      if (this.pendingDelete) {
        this.sectionsRepository.deleteSection(this.pendingDelete.id)
          .then(() => {
            this.pendingDelete = null
            this.selectedSection = null
            this.sectionsRepository.getSections()
              .then(models => this.sections = models)
          })
      }
    },
    onDeleteReject() {
      this.pendingDelete = null
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
        var promise = this.sectionsRepository.putSection(section)
      } else {
        var promise = this.sectionsRepository.createSection(section)
      }
      promise.then(() => {
        this.selectedSection = null
        this.sectionsRepository.getSections()
          .then(models => this.sections = models)
      })
    },
  },

  computed: {
  },
});
</script>
