import { DailyWeather } from "../../hooks/daily";
import SubHeader from "../elements/SubHeader";
import ForecastLayout from "../layout/ForecastLayout";
import CardWeather from "./CardWeather";

const DailyForecast = () => {
  const weather = DailyWeather();

  return (
    <>
      <ForecastLayout>
        <div className="w-full mt-0.5 mb-3">
          <SubHeader
            icon={
              <svg
                className="w-6 h-6 lg:w-7 lg:h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#ffffff"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
              </svg>
            }
          >
            Pantau Cuaca Harianmu
          </SubHeader>
        </div>
        <div className="w-full flex gap-5 overflow-x-scroll scroll-bar">
          {weather &&
            weather.length > 0 &&
            weather.map((w) => (
              <CardWeather key={w.date}>
                <CardWeather.CardDesc
                  date={w.date}
                  temp={w.day.avgtemp_c}
                  weather={w.day.condition.text}
                />
                <CardWeather.CardIcon url={w.day.condition.icon} />
              </CardWeather>
            ))}
        </div>
      </ForecastLayout>
    </>
  );
};

export default DailyForecast;
