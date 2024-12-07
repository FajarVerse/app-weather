import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CurrentWeather } from "../../hooks/current";
import SubHeader from "../elements/SubHeader";
import ForecastLayout from "../layout/ForecastLayout";
import CardWeather from "./CardWeather";

const HourlyForecast = () => {
  const weather = CurrentWeather();
  const hourly = weather.forecast?.forecastday[0].hour.slice(1, 10);

  return (
    <>
      <ForecastLayout classname="flex-wrap">
        <div className="w-full mt-0.5 mb-3">
          <SubHeader
            icon={
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#ffffff"
              >
                <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
            }
          >
            Pantau Langit Setiap Jam
          </SubHeader>
        </div>
        <div className="w-full flex gap-5 overflow-x-scroll scroll-bar xl:grid xl:grid-cols-3 xl:grid-rows-3">
          {hourly &&
            hourly.length > 0 &&
            hourly.map((w) => (
              <CardWeather key={w.time} classname="xl:mr-5">
                <CardWeather.CardDesc
                  date={format(Date.parse(w.time), "HH:mm", {
                    locale: id,
                  })}
                  temp={w.temp_c}
                  weather={w.condition.text}
                />
                <CardWeather.CardIcon url={w.condition.icon} />
              </CardWeather>
            ))}
        </div>
      </ForecastLayout>
    </>
  );
};

export default HourlyForecast;
