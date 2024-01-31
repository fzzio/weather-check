import axios from 'axios';

const apiKey = 'e756c1eb867cada2fafddf1890b0a680';

export const getWeatherData = async (city: string) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
