<template>
  <section>
    <div>
      <span>HI I AM HERE</span>
      <button @click="increment">increment</button>

      <div>
        <span>{{ count }}</span>
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TestComponent",
  methods: {
    increment() {
      this.$store.dispatch("increment");
      console.log(this.$store.state.count);
    },
  },
  computed: {
    ...mapGetters({
      count: "getCount",
    }),
  },
};
</script>

<style></style>
