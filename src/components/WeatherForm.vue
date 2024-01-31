<script setup>
import { ref } from 'vue';
import { getWeatherData } from '../services/WeatherService';

const city = ref('');
const weatherData = ref(null);

const getWeather = async () => {
  try {
    weatherData.value = await getWeatherData(city.value);
  } catch (error) {
    console.error(error.message);
  }
};

const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
};
</script>

<template>
  <form @submit.prevent="getWeather">
    <label for="city">Enter City:</label>
    <input v-model="city" type="text" id="city" required />
    <button type="submit">Get Weather</button>

    <div v-if="weatherData">
      <h2>{{ weatherData.name }}</h2>
      <p>Time: {{ getTime(weatherData.dt) }}</p>
      <p>Temperature: {{ weatherData.main.temp }}°C</p>
      <p>Humidity: {{ weatherData.main.humidity }}%</p>
      <p>Description: {{ weatherData.weather[0].description }}</p>
    </div>
  </form>
</template>

<style scoped>
/* Add your styling here */
</style>
