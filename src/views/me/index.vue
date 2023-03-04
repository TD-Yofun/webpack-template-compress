<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  name: "Me",
  data() {
    return {
      title: "",
    };
  },
  async mounted() {
    const value = await Promise.resolve("Me");
    this.title = value;
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}
</style>
