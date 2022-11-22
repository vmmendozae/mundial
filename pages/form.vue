<template>
  <v-card v-if="$store.state.results[0]">
    <v-simple-table>
      <thead>
        <tr>
          <td>{{ data[0][0] }}</td>
          <td v-for="(d, i) in data[0].slice(2, data.length)" :key="'i' + i">
            {{ d }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in data.slice(1, data.length)" :key="index">
          <td>{{ p[0] }}</td>
          <td
            v-for="(r, index) in vector"
            :key="index + 'idx'"
            class="text-center"
          >
            <v-chip
              v-if="$store.state.results[index]"
              dark
              :color="
                $store.state.results[index].winner == p[index + 2]
                  ? 'success'
                  : ''
              "
            >
              <span>
                {{ name2flag(p[index + 2]) }}
                <div v-if="$store.state.results[index]" class="bgd"></div>
              </span>
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      vector: [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      ],
    };
  },
  computed: {
    vector2() {
      return new Array(this.$store.state.results.length);
    },
  },
  async mounted() {
    const APIKey = "AIzaSyAXo_wied5yhzwmH76Til0oAyGhx7jxKFE";
    const idSheet = "1mPayIzA-nwIaN3N7gkKfwczk1MI39MmAMN0PrQHg6gE";
    const url =
      "https://content-sheets.googleapis.com/v4/spreadsheets/" +
      idSheet +
      "/values/'Respuestas de formulario 1'!B1:BR27?access_token=" +
      APIKey +
      "&key=" +
      APIKey;
    const { data } = await this.$axios.get(url);

    this.data = data.values;
  },
  methods: {
    name2flag(name) {
      if (name == "Inglaterra") {
        return "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
      } else if (name == "Empate") {
        return "👔";
      } else if (name == "Holanda") {
        return "🇳🇱";
      } else if (name == "Ecuador") {
        return "🇪🇨";
      } else if (name == "Senegal") {
        return "🇸🇳";
      } else if (name == "Catar") {
        return "🇶🇦";
      } else if (name == "Gales") {
        return "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
      } else if (name == "Estados unidos") {
        return "🇺🇸";
      } else if (name == "Irán") {
        return "🇮🇷";
      } else if (name == "Arabia Saudita") {
        return "🇸🇦";
      } else if (name == "Polonia") {
        return "🇵🇱";
      } else if (name == "México") {
        return "🇲🇽";
      } else if (name == "Argentina") {
        return "🇦🇷";
      } else if (name == "Francia") {
        return "🇫🇷";
      } else if (name == "Túnez") {
        return "🇹🇳";
      } else if (name == "Dinamarca") {
        return "🇩🇰";
      } else if (name == "España") {
        return "🇪🇸";
      } else if (name == "Bélgica") {
        return "🇧🇪";
      } else if (name == "Canadá") {
        return "🇨🇦";
      } else if (name == "Croacia") {
        return "🇭🇷";
      } else if (name == "Marruecos") {
        return "🇲🇦";
      } else if (name == "Brasil") {
        return "🇧🇷";
      } else if (name == "Camerún") {
        return "🇨🇲";
      } else if (name == "Serbia") {
        return "🇷🇸";
      } else if (name == "Suiza") {
        return "🇨🇭";
      } else if (name == "Ghana") {
        return "🇬🇭";
      } else if (name == "Corea del sur") {
        return "🇰🇷";
      } else if (name == "Portugal") {
        return "🇵🇹";
      } else if (name == "Uruguay") {
        return "🇺🇾";
      } else if (name == "Alemania") {
        return "🇩🇪";
      } else if (name == "Costa Rica") {
        return "🇨🇷";
      } else if (name == "Australia") {
        return "🇦🇺";
      } else if (name == "Japón") {
        return "🇯🇵";
      } else {
        return name;
      }
    },
  },
};
</script>

<style scoped>
.success {
  background: green;
}
</style>