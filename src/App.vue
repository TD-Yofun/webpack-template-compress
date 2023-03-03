<template>
  <div>
    <h1>Vue</h1>
    <Hello />
  </div>
</template>
<script>
import Hello from "./Hello.vue";

export default {
  name: "App",
  components: {
    Hello,
  },
};
</script>
<style scoped>
h1 {
  background: skyblue;
}
</style>
