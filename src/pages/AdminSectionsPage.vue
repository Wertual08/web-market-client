<template>
  <div style="box">
    <admin-sections-tree :sections="sections"/>
  </div>
</template>


<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AdminSectionsTree from '@/components/AdminSectionsTree.vue'
import SectionsRepository from '@/repositories/admin/sectionsRepository'
import Section from '@/models/admin/section';

export default defineComponent({
  name: "admin-products-page",
  components: {
    AdminSectionsTree,
  },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[]
    }
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then(models => this.sections = models)
  },

  methods: {
  },
});
</script>
