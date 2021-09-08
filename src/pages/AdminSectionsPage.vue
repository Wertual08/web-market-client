<template>
  <div id="box">
    <div>
      <admin-sections-tree :sections="sections" @selected="selectSection"/>
    </div>
    <div id="redactor" v-if="selectedSection !== null">
      <admin-section-form :section="selectedSection"/>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;

  width: 100%;
  height: 100%;
}

#redactor {
  width: 100%;
  height: 100%;


  background: cyan;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AdminSectionsTree from '@/components/AdminSectionsTree.vue'
import AdminSectionForm from '@/components/common/AdminSectionForm.vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import Section from '@/models/admin/section';

export default defineComponent({
  name: "admin-products-page",
  components: {
    AdminSectionsTree,
    AdminSectionForm,
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
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
    }
  },

  computed: {
  },
});
</script>
