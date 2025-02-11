import { WeatherForecastList } from "../types/forecast";

interface WeatherForecastProps {
  forecastData: WeatherForecastList[];
}

export function WeatherForecast({ forecastData }: WeatherForecastProps) {
  return (
    <div className="forecast">
      {forecastData.map((data) => {
        return (
          <div className="forecast-card">
            <p>{new Date(data.dt * 1000).toLocaleString()}</p>
            <img
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt=""
              style={{
                width: 20,
                height: 20,
              }}
            />
            <p>{data.weather[0].description}</p>
            <p>{data.main.temp}°</p>
          </div>
        );
      })}
    </div>
  );
}
