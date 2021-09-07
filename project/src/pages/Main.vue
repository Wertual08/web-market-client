<template>
  <div id="main">
    <SearchBar />
    <div id="container">
      <!-- <div class="work_in_progress">work in progress</div> -->
      <!-- <table class="table"> -->
        <!-- <div class="sections" v-for="section in sections" :key="section.id"> -->
          <!--  <button @click="$emit('load-product', product.Id)" class="prodId">
            артикул: {{ product.Id }}
          </button> -->
          <!-- <router-link class="productCardContent" :to="{ path: '/catalog' }"> -->
            <!-- <div class="prodCardContent"> -->
              <!-- <p class="prodName">{{ section.name }}</p> -->
              <div class="sectionImg">shit</div>
              <!-- <img class="sectionImg" src=@/assets/meme.gif/> -->
            <!-- </div> -->
          <!-- </router-link> -->
        <!-- </div> -->
      <!-- </table> -->
    </div>
  </div>
</template>


<style scoped>
#main {
  background-color: rgba(169, 241, 241);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#container {
  background-color: rgba(98, 0, 50);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sectionImg {
  min-width: 100pt;
  min-height: 100pt;
  background: violet;
}
.table {
 margin-left: 20px;
}
.prodCardContent {
  width: 100%;
  height: 100%;
  background: red;
}
.sections {
  width: 220px;
  height: 300px;
  display: inline;
  float: left;
  overflow: hidden;
  background: lightblue;
  margin: 10px;
}
.work_in_progress {
  font: bold 10em "Fira Sans", serif;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Section from "@/models/section";
import SectionsRepository from "@/repositories/sectionsRepository";

export default defineComponent({
  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[],
    };
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then((result: Section[]) => {
        this.sections = result;
      });
  },
  computed: {
    test() {
    }
  }
});
</script>
