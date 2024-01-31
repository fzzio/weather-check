<script setup lang="ts">
import { ref } from 'vue';
import { getWeatherData } from '../services/WeatherService';

const emit = defineEmits(['weatherData']);

const city = ref('');

const getWeather = async () => {
  try {
    const weatherData = await getWeatherData(city.value);
    emit('weatherData', weatherData);
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<template>
  <form @submit.prevent="getWeather">
    <label for="city">Enter City:</label>
    <input v-model="city" type="text" id="city" required />
    <button type="submit">Get Weather</button>
  </form>
</template>

<style scoped>
/* Add your styling here */
</style>