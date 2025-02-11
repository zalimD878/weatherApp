import { getForecastByCity, getWeatherByCity } from "./api/weather";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { Input } from "./components/input";
import { useState } from "react";
import { WeatherDataType } from "./types/weather";
import { WeatherForecastList } from "./types/forecast";
import { WeatherForecast } from "./components/weatherForecast";

export default function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
  const [forecastData, setForecastData] = useState<
    WeatherForecastList[] | null
  >(null);

  const handleSearch = async (city: string) => {
    const data = await getWeatherByCity(city);
    const dataForecast = await getForecastByCity(city);

    setWeatherData({
      description: data.weather?.[0]?.description || "",
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      speed: data.wind.speed,
      deg: data.wind.deg,
      name: data.name,
      temp: data.main.temp,
    });

    setForecastData(dataForecast.list);
  };

  return (
    <div>
      <Input handleSearch={handleSearch} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData && <WeatherForecast forecastData={forecastData} />}
    </div>
  );
}
