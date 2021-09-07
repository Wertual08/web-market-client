<template>
  <div style="box">
    <admin-products-list/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AdminProductsList from "@/components/AdminProductsList.vue";

export default defineComponent({
  name: "admin-products-page",
  components: {
    AdminProductsList,
  },
  data() {
    return {
      
    }
  },

  mounted() {
  },
  methods: {
  },
});
</script>


<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
