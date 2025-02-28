import { WeatherForecastList } from "../types/forecast";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import getSeasonClass from "../utils/seasons";

interface WeatherForecastProps {
  forecastData: WeatherForecastList[];
}

const season = getSeasonClass();

export function WeatherForecast({ forecastData }: WeatherForecastProps) {
  return (
    <div className={`forecast forecast-${season}`}>
      <Splide
        hasTrack={false}
        options={{
          gap: "8px",
          type: "slide",
          drag: true,
          width: "100%",
          padding: "0",
          autoWidth: true,
          autoHeight: true,
          pagination: false,
          perMove: 1,
          omitEnd: true,
        }}
      >
        <div style={{ position: "relative", padding: "12px" }}>
          <SplideTrack>
            {forecastData.map((data) => {
              return (
                <SplideSlide key={data.dt}>
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
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
}
