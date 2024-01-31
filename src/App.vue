<script setup lang="ts">
import { ref } from 'vue';

import WeatherForm from './components/WeatherForm.vue';
import WeatherDetails from './components/WeatherDetails.vue';

const weatherData = ref(null);

const updateWeatherData = (data) => {
  weatherData.value = data;
};
</script>

<template>
  <main>
    <WeatherForm @weatherData="updateWeatherData" />
    <WeatherDetails :weatherData="weatherData" />
  </main>
</template>

<style scoped>
</style>
