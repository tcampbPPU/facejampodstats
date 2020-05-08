<template>
  <div class="container">
    <section>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Average Score</th>
            <th scope="col">Episode Title</th>
            <th scope="col">Episode Number</th>
            <th scope="col">Episode Date</th>
          </tr>
        </thead>
        <tbody v-for="episode in episodes" :key="episode._id">
          <tr>
            <th>{{ episode.average }}</th>
            <td><router-link :to="`/episode/${episode.episodeNumber}`" data-toggle="tooltip" data-placement="top" title="Click to view episode details">{{ episode.episodeTitle }}</router-link></td>
            <td scope="row">{{ episode.episodeNumber }}</td>
            <td>{{ moment(episode.airDate).add(1, 'd').format('MMMM Do, YYYY') }}</td>
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
