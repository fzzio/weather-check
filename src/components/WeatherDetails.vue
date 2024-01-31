<script setup lang="ts">
const props = defineProps(['weatherData']);

interface WeatherData {
  name: string;
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

const getTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};
</script>

<template>
  <div v-if="weatherData" class="bg-gray-200 p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4">{{ weatherData.name }}</h2>
    <p class="text-sm">Time: {{ getTime(weatherData.dt) }}</p>
    <p class="text-lg font-bold mt-2">Temperature: {{ weatherData.main.temp }}°C</p>
    <p class="text-lg font-bold mt-2">Humidity: {{ weatherData.main.humidity }}%</p>
    <p class="text-base mt-2">Description: {{ weatherData.weather[0].description }}</p>
  </div>
</template>

<style scoped>
/* Add your styling here */
</style>
