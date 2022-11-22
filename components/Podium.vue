<template>
  <v-card v-if="$store.getters.podium[1]">
    <v-card-title>Podium</v-card-title>
    <v-card-text>
      <div class="container podium">
        <div class="podium__item">
          <p class="podium__city">{{ $store.getters.podium[1].name }}</p>
          <div class="podium__rank second">
            <p>🥈</p>
            <p class="podium__points">{{ $store.getters.podium[1].total }} ★</p>
          </div>
        </div>
        <div class="podium__item">
          <p class="podium__city">{{ $store.getters.podium[0].name }}</p>
          <div class="podium__rank first">
            <p>🥇</p>
            <p class="podium__points">{{ $store.getters.podium[0].total }} ★</p>
          </div>
        </div>
        <div class="podium__item">
          <p class="podium__city">{{ $store.getters.podium[2].name }}</p>
          <div class="podium__rank third">
            <p>🥉</p>
            <p class="podium__points">{{ $store.getters.podium[2].total }} ★</p>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
body {
  font-family: sans-serif;
}

.container {
  display: flex;
  align-items: flex-end;
}

.podium__item {
  width: 200px;
}

.podium__rank {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #fff;
}

.podium__points {
  font-size: 22px;
  color: #121212;
}

.podium__city {
  text-align: center;
  padding: 0 0.5rem;
}

.podium__number {
  width: 27px;
  height: 75px;
}

.podium .first {
  min-height: 200px;
  background: rgb(255, 172, 37);
  background: linear-gradient(
    333deg,
    rgba(255, 172, 37, 1) 0%,
    rgba(254, 207, 51, 1) 13%,
    rgba(254, 224, 51, 1) 53%,
    rgba(255, 172, 37, 1) 100%
  );
}

.podium .second {
  min-height: 150px;
  background: darkcyan;
}

.podium .third {
  min-height: 100px;
  background: darkolivegreen;
}
</style>