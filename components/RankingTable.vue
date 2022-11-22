<template>
  <v-card class="ranking-table">
    <v-card-title>Posiciones</v-card-title>
    <v-card-text>
      <v-simple-table>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Puntos</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in $store.getters.podium" :key="p.id">
            <td>
              <span v-if="index == 0">🥇</span>
              <span v-if="index == 1">🥈</span>
              <span v-if="index == 2">🥉</span>
              {{ p.name }}
            </td>
            <td>{{ p.total }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<style>
.ranking-table .v-card__text {
  height: 600px;
  overflow: auto;
}
</style>