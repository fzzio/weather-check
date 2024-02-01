import axios from 'axios';

const apiKey: string | undefined = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

if (!apiKey) {
  throw new Error('API key not defined in .env file');
}

export const getWeatherData = async (city: string) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
