<template>
  <div>
    <h1 class="hello">{{ title }}</h1>
    <img src="../../assets/jay.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "Hello",
  data() {
    return {
      title: "",
    };
  },
  async mounted() {
    const title = await Promise.resolve("Home");
    this.title = title;
  },
};
</script>
<style scoped>
.hello {
  background: yellow;
}

img {
  display: block;
  width: 300px;
}
</style>
