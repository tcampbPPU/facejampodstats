<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="" />
    <HelloWorld msg="Face Jam Podcast Stats" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
img {
  width: 30%;
  height: auto;
}
</style>
