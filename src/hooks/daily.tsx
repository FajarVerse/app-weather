import { useEffect, useState } from "react";
import { getDaily } from "../services/daily.servive";
import { UserIp } from "./userIp";

export const DailyWeather = () => {
  const [current, setCurrent] = useState<[]>([]);
  const userIP = UserIp();

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
        const data = await getDaily(userIP);
        setCurrent(data);
      } catch (error) {
        console.log("Error fetching weather:", error);
      }
    };

    if (userIP) {
      fetchWeather();
    }
  }, [userIP]);

  return current;
};
