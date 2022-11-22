<template>
  <v-card class="fill-height">
    <v-card-title>Ranking</v-card-title>
    <v-card-text>
      <div id="chart-id" class="fill-height"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import chartScript from "@/static/chart.js";
export default {
  data() {
    return {};
  },
  watch: {
    personalRanking() {
      chartScript(
        "chart-id",
        this.$store.getters.personalRanking,
        this.$store.state.lastMatch
      );
    },
  },
  computed: {
    personalRanking() {
      return this.$store.getters.personalRanking;
    },
  },
  mounted() {
    chartScript(
      "chart-id",
      this.$store.getters.personalRanking,
      this.$store.state.lastMatch
    );
  },
};
</script>