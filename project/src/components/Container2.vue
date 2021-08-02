<template>
  <div>{{ fuck }}</div>
</template>


<script>
export default {
  methods: {
    setId(c) {
      console.log(this.fuck);
      this.fuck = c;
      console.log(this.fuck);
    },
  },
  data() {
    return { fuck: -1 };
  },
};
</script>


<style scoped>
</style>
