<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="disclaimer sansserif">
      <span>*Fan made. No affiliation with Rooster Teeth</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.disclaimer {
  color: black;
  font-style: italic;
  font-size: 10px;
}
</style>
