import { windDirectionConverter } from "../utils/windDirectionConverter";
import barometr from "../assets/svg/barometr.svg";
import windIcon from "../assets/svg/wind-svgrepo-com.svg";
import getSeasonClass from "../utils/seasons";

interface CurrentWeatherProps {
  weatherData: {
    description: string;
    icon: string;
    feels_like: number;
    pressure: number;
    speed: number;
    deg: number;
    name: string;
    temp: number;
  };
}

const season = getSeasonClass();

export function CurrentWeather({ weatherData }: CurrentWeatherProps) {
  return (
    <div className="weather-container-wrapper">
      <div className={`weather-container weather-container-${season}`}>
        <p className="weather-city">{weatherData.name}</p>
        <div className="weather-main">
          <div className="temperature-discription-block">
            {/* <div className="temp-icon"> */}
            <p className="weather-temperature">{weatherData.temp}°</p>
            {/* </div> */}
            <div className="img-des-container">
              <img
                src={`https://openweathermap.org/img/w/${weatherData.icon}.png`}
                className="weather-temp-icon"
              />
              <div className="description-container">
                <p className="weather-description">{weatherData.description}</p>
                <p className="weather-feels-like">
                  ощущается как {weatherData.feels_like}
                </p>
              </div>
            </div>
          </div>
          <div className="wind-pressure-container">
            <div className="barometr-wind">
              <img src={barometr} className="barometr-icon" />
              <p className="weather-pressure">
                {weatherData.pressure} мм рт. ст.
              </p>
            </div>
            <div className="barometr-wind">
              <img src={windIcon} className="wind-icon" />
              <p className="weather-wind-speed">
                ветер {weatherData.speed} м/с,{" "}
              </p>
              <p className="weather-wind-direction">
                {windDirectionConverter(weatherData.deg)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
