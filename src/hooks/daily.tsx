import { useEffect, useState } from "react";
import { getDaily } from "../services/daily.servive";
import { GetLocation } from "./getLocation";

export const DailyWeather = () => {
  const [current, setCurrent] = useState<[]>([]);
  const { lat, long } = GetLocation();

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
        const data = await getDaily(lat, long);
        setCurrent(data);
      } catch (error) {
        console.log("Error fetching weather:", error);
      }
    };

    if (lat && long) {
      fetchWeather();
    }
  }, [lat, long]);

  return current;
};
