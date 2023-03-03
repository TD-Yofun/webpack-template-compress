<template>
  <div>
    <h2 class="hello">Hello world!</h2>
    <h3>{{ title }}</h3>
    <img src="./assets/jay.png" alt="" />
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
  mounted() {
    Promise.resolve("我是标题").then((res) => {
      this.title = res;
    });
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
