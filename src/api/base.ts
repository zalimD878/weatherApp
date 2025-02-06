import axios from "axios";
import { WEATHER_PARAMS } from "../constants/param";

const API_KEY = import.meta.env.VITE_API_KEY;

export const base = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: API_KEY,
    units: WEATHER_PARAMS.units,
    lang: WEATHER_PARAMS.lang,
  },
});
