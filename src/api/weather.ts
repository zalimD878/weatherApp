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
