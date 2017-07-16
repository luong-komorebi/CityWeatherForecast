import axios from 'axios';

const API_KEY = '5f679d8b18a5d886b5fb98cf4b0dd075';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return ({
    type: FETCH_WEATHER,
    payload: request
  });
}