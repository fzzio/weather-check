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
  <div v-if="weatherData">
    <h2>{{ weatherData.name }}</h2>
    <p>Time: {{ getTime(weatherData.dt) }}</p>
    <p>Temperature: {{ weatherData.main.temp }}°C</p>
    <p>Humidity: {{ weatherData.main.humidity }}%</p>
    <p>Description: {{ weatherData.weather[0].description }}</p>
  </div>
</template>

<style scoped>
/* Add your styling here */
</style>
