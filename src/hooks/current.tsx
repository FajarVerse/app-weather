import { useEffect, useState } from "react";
import { getCurrent } from "../services/current.service";
import { GetLocation } from "./getLocation";

export const CurrentWeather = () => {
  const [current, setCurrent] = useState({});
  const { lat, long } = GetLocation();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getCurrent(lat, long);
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