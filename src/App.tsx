import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather";
import { Input } from "./components/input";
import { data } from "./Data";

const {
  weather: { main, description },
  main: { feels_like, pressure, sea_level, grnd_level, temp },
  wind: { speed, deg },
  clouds: { all },
  sys: { country, sunrise, sunset },
  timezone,
  name,
} = data;

const weatherData = {
  description,
  feels_like,
  pressure,
  sea_level,
  grnd_level,
  speed,
  deg,
  name,
  temp,
};

export default function App() {
  return (
    <div>
      <Input handleSearch={() => {}} grade={7} />
      <CurrentWeather weatherData={weatherData} />
    </div>
  );
}
