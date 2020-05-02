<template>
  <div class="container">
    <section>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Episode Number</th>
            <th scope="col">Episode Title</th>
            <th scope="col">Average Score</th>
            <th scope="col">Episode Date</th>
          </tr>
        </thead>
        <tbody v-for="episode in episodes" :key="episode._id">
          <tr>
            <th scope="row">{{ episode.episodeNumber }}</th>
            <td>{{ episode.episodeTitle }}</td>
            <td>{{ episode.average }}</td>
            <td>{{ moment(episode.airDate).add(1, 'd').format('MMMM Do, YYYY') }}</td>

              <!-- {{ episode.airDate }} -->
            
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RankTable",
  mounted() {
    this.$store.dispatch('getEpisodes');
  },
  computed: {
    ...mapGetters(['episodes']),
  },
};
</script>

<style></style>
