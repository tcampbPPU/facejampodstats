<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="" />
    <Landing msg="Face Jam Podcast Stats" />
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "Home",
  components: {
    Landing,
  },
};
</script>

<style>
img {
  width: 30%;
  height: auto;
}
</style>
