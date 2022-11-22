<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <podium class="mb-6" />
        <ranking-table />
      </v-col>
      <v-col cols="12" md="8">
        <chart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RankingTable from "@/components/RankingTable";
import Chart from "@/components/Chart";
import Podium from "@/components/Podium";

export default {
  components: { RankingTable, Chart, Podium },
  data() {
    return {};
  },
};
</script>
