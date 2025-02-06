interface CurrentWeatherProps {
  //   main: string;
  //   description: string;
  //   feels_like: number;
  //   pressure: number;
  //   sea_level: number;
  //   grnd_level: number;
  //   speed: number;
  //   deg: number;
  //   all: number;
  //   country: string;
  //   sunrise: number;
  //   sunset: number;
  //   timezone: number;
  //   name: string;
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

export function CurrentWeather({
  weatherData,
}: //   main,
//   description,
//   feels_like,
//   pressure,
//   sea_level,
//   grnd_level,
//   speed,
//   deg,
//   all,
//   country,
//   sunrise,
//   sunset,
//   timezone,
//   name,
CurrentWeatherProps) {
  return (
    <div className="weather-container">
      <p className="weather-city">{weatherData.name}</p>
      <div className="weather-main">
        <div>
          <p className="weather-temperature">{weatherData.temp} °</p>
        </div>
        <div>
          <p className="weather-description">{weatherData.description}</p>
          <p className="weather-feels-like">
            ощущается как {weatherData.feels_like}
          </p>
        </div>
      </div>

      <p className="weather-pressure">
        давление {weatherData.pressure}мм рт. ст.
      </p>
      <p className="weather-wind-speed">{weatherData.speed}</p>
      <p className="weather-wind-direction">{weatherData.deg}</p>
    </div>
  );
}
