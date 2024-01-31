<script setup lang="ts">
import { ref } from 'vue';
import { getWeatherData } from '../services/WeatherService';

const emit = defineEmits(['weatherData']);

const city = ref('');
const errorMessage = ref('');

const getWeather = async () => {
  try {
    const weatherData = await getWeatherData(city.value);
    emit('weatherData', weatherData);
    errorMessage.value = '';
  } catch (error) {
    console.error(error.message);
    errorMessage.value = 'Error fetching weather data';
  }
};
</script>

<template>
  <form @submit.prevent="getWeather" class="flex items-center space-x-4">
    <label for="city" class="text-lg font-semibold">Enter City:</label>
    <input v-model="city" type="text" id="city" required class="p-2 border rounded-md" />
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Get Weather</button>
  </form>
  <div v-if="errorMessage" class="flex items-center space-x-2 bg-red-500 text-white rounded-md p-2 my-3">
    <span>{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
/* Add your styling here */
</style>