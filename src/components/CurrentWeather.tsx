import { windDirectionConverter } from "../utils/windDirectionConverter";
import barometr from "../assets/svg/barometr.svg";
import windIcon from "../assets/svg/wind-svgrepo-com.svg";

interface CurrentWeatherProps {
  weatherData: {
    description: string;
    feels_like: number;
    pressure: number;
    speed: number;
    deg: number;
    name: string;
    temp: number;
  };
}

export function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  return (
    <div className="weather-container-wrapper">
      <div className="weather-container">
        <p className="weather-city">{weatherData.name}</p>
        <div className="weather-main">
          <div className="temperature-discription-block">
            <div>
              <p className="weather-temperature">{weatherData.temp}°</p>
            </div>

            <div className="description-container">
              <p className="weather-description">{weatherData.description}</p>
              <p className="weather-feels-like">
                ощущается как {weatherData.feels_like}
              </p>
            </div>
          </div>
          <img src={barometr} className="barometr-icon" />

          <p className="weather-pressure">{weatherData.pressure} мм рт. ст.</p>
          <img src={windIcon} className="wind-icon" />
          <p className="weather-wind-speed">ветер {weatherData.speed} м/с, </p>
          <p className="weather-wind-direction">
            {windDirectionConverter(weatherData.deg)}
          </p>
        </div>
      </div>
    </div>
  );
}
