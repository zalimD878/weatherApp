import { base } from "./base";

export async function getWeatherByCity(city: string) {
  const { data } = await base.get("/weather", {
    params: {
      q: city,
    },
  });

  return data;
}
