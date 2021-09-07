<template>
  <div class="main">
    <SearchBar />
    <div id="container">
      <div class="work_in_progress">work in progress</div>
      <table class="table">
        <div class="sections" v-for="section in sections" :key="section.id">
          <!--  <button @click="$emit('load-product', product.Id)" class="prodId">
            артикул: {{ product.Id }}
          </button> -->
          <router-link :to="{ path: '/catalog' }">
            <div class="prodCardContent">
              <p class="prodName">{{ section.name }}</p>
              <img class = sectionImg src=@/assets/meme.gif style="display:
              block" />
            </div>
          </router-link>
        </div>
      </table>
    </div>
  </div>
</template>

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


<style scoped>
.table {
 margin-left: 20px;
}
.sectionImg {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 150px;
  margin-top: 80px;
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
.main {
  background-color: rgba(169, 241, 241, 0.377);
  width: auto;
  min-height: 1080px;
}
.work_in_progress {
  font: bold 10em "Fira Sans", serif;
}
#container {
  width: 1500px;
  background-color: rgba(98, 0, 255, 0.11);
  margin-left: auto;
  margin-right: auto;
  min-height: 1080px;
}
</style>