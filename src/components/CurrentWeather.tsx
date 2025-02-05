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
    sea_level: number;
    grnd_level: number;
    speed: number;
    deg: number;
    name: string
    temp: number
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
    <div className="weather-card">
      <p>{weatherData.name}</p>
      <p>{weatherData.temp}</p>
      <p>{weatherData.feels_like}</p>
      <p>{weatherData.description}</p>
      <p>{weatherData.pressure}</p>
      <p>{weatherData.sea_level}</p>
      <p>{weatherData.grnd_level}</p>
      <p>{weatherData.speed}</p>
      <p>{weatherData.deg}</p>
    </div>
  );
}
