import { WeatherForecast } from "../types/forecast";
import { WeatherApi } from "../types/weather";
import { base } from "./base";

export async function getWeatherByCity(city: string): Promise<WeatherApi> {
  const { data } = await base.get("/weather", {
    params: {
      q: city,
    },
  });

  return data;
}

export async function getForecastByCity(
  city: string
): Promise<WeatherForecast> {
  const { data } = await base.get("/forecast", {
    params: {
      q: city,
    },
  });

  return data;
}

export async function getWeatherByCoordinates(
  latitude: number,
  longitude: number
): Promise<WeatherApi> {
  const { data } = await base.get("/weather", {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });

  return data;
}
