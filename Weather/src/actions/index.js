import axios from 'axios';

const API_KEY = "7ee17c4f8e6f1b0d2fe3cc0f71fce04c";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  //console.log('Request:', request);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
