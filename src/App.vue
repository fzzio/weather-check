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
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <WeatherForm @weatherData="updateWeatherData" />
      <WeatherDetails :weatherData="weatherData" />
    </div>
  </div>
</template>

<style scoped>
</style>
