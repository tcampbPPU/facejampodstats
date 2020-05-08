<template>
  <div class="ranks">
    <h2>Current Rankings</h2>
      <RankTable />
  </div>
</template>

<script>
import RankTable from '../components/RankTable';
export default {
  name: 'Ranks',
  components: {
    RankTable
  }
}
</script>

<style>

</style>