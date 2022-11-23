<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant="drawer"
      fixed
      app
      class="d-none d-md-flex"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-none d-md-flex"
      />
      <v-toolbar-title>Polla Mundial ⚽️</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main class="mb-12 mb-md-0">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation class="d-flex d-md-none" fixed>
      <v-btn nuxt link to="/">
        <span>Ranking</span>

        <v-icon>mdi-podium</v-icon>
      </v-btn>

      <v-btn nuxt link to="/resultados">
        <span>Resultados</span>

        <v-icon>mdi-table</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-podium",
          title: "Ranking",
          to: "/",
        },
        {
          icon: "mdi-table",
          title: "Resultados",
          to: "/resultados",
        },
      ],
    };
  },
  mounted() {
    this.fetchData();
    this.fetchLastMatch();
  },
  methods: {
    ...mapActions(["fetchData", "fetchLastMatch"]),
  },
};
</script>
