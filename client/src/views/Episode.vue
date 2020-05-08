<template>
  <div class="container">
    <h2>{{ episode.episodeTitle }}</h2>
    <section>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>Episode Number</td>
            <td>{{ episode.episodeNumber }}</td>
          </tr>
          <tr>
            <td>Air Date</td>
            <td>
              {{
                moment(episode.airDate)
                  .add(1, "d")
                  .format("MMMM Do, YYYY")
              }}
            </td>
          </tr>
          <tr>
            <td>Michael's Score</td>
            <td>{{ episode.michaelScore }}</td>
          </tr>
          <tr>
            <td>Jordan's Score</td>
            <td>{{ episode.jordanScore }}</td>
          </tr>
          <tr>
            <td>Average Score</td>
            <td>{{ episode.average }}</td>
          </tr>
        </tbody>
      </table>      
    </section>
    <section>
      <iframe
        :src="episode.url"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>      
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Episode",
  mounted() {
    let payload = this.$route.params.id;
    this.$store.dispatch("getEpisodeDetails", payload);
  },
  computed: {
    ...mapGetters(["episode"]),
  },
};
</script>

<style>
iframe {
  width: 60%;
  height: 232px;
}


@media only screen and (max-width: 700px) {
  iframe {
    width: 100%;
    height: 200px;
  }
}

</style>
