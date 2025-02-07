import { getWeatherByCity } from "./api/weather";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { Input } from "./components/input";
import { useState } from "react";
import { WeatherDataType } from "./types/weather";

export default function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  const handleSearch = async (city: string) => {
    const data = await getWeatherByCity(city);

    setWeatherData({
      description: data.weather?.[0]?.description || "",
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      speed: data.wind.speed,
      deg: data.wind.deg,
      name: data.name,
      temp: data.main.temp,
    });
  };

  return (
    <div>
      <Input handleSearch={handleSearch} grade={7} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
    </div>
  );
}
