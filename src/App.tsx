import { getWeatherByCity } from "./api/weather";
import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { Input } from "./components/input";
import { data } from "./Data";
import { useState } from "react";

const {
  weather: { main, description },
  main: { feels_like, pressure, sea_level, grnd_level, temp },
  wind: { speed, deg },
  clouds: { all },
  sys: { country, sunrise, sunset },
  timezone,
  name,
} = data;

export default function App() {
  const [name, setName] = useState("");

  const handleSearch = async (city: string) => {
    const data = await getWeatherByCity(city);

    console.log(data);
    setName(data.name);
  };

  const weatherData = {
    description,
    feels_like,
    pressure,
    speed,
    deg,
    name,
    temp,
  };

  return (
    <div>
      <Input handleSearch={handleSearch} grade={7} />
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
}
