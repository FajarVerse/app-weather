import { useEffect, useState } from "react";
import { CurrentWeather } from "./current";

export const WeatherCondition = () => {
  const [condition, setCondition] = useState<string>();
  const current = CurrentWeather();
  const currentWeather = current.current?.temp_c;

  useEffect(() => {
    const getCondition = (): void => {
      let weather: string = "";

      switch (true) {
        case currentWeather < 0:
          weather = "Snowing";
          break;
        case currentWeather > 0 && currentWeather < 10:
          weather = "Drizzling";
          break;
        case currentWeather > 10 && currentWeather < 15:
          weather = "Overcast";
          break;
        case currentWeather > 16 && currentWeather < 20:
          weather = "Party Cloudy";
          break;
        case currentWeather > 21 && currentWeather < 25:
          weather = "Sunny";
          break;
        case currentWeather > 26 && currentWeather < 30:
          weather = "Slightly Cloudyt";
          break;
        case currentWeather > 31 && currentWeather < 35:
          weather = "Scorching Hot";
          break;
        case currentWeather > 35:
          weather = "Extreme Heat";
          break;

        default:
          break;
      }

      setCondition(weather);
    };

    getCondition();
  }, [currentWeather]);

  return condition;
};
