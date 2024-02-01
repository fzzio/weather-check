<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['coordinates']);

const apiKey: string | undefined = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

if (!apiKey) {
  throw new Error('API key not defined in .env file');
}

const zoom = ref(12);

const x = Math.floor(props.coordinates[0] / 360 * (2 ** zoom.value));
const y = Math.floor(props.coordinates[1] / 360 * (2 ** zoom.value));

const tileLayerUrl = `https://tile.openweathermap.org/map/pressure_new/${zoom.value}/${x}/${y}.png?appid=${apiKey}`;
</script>

<template>
  <div>
    <img :src="tileLayerUrl" alt="Weather Map" class="map-img" />
  </div>
</template>

<style scoped>
.map-img{
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>