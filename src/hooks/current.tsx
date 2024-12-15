import { useEffect, useState } from "react";
import { getCurrent } from "../services/current.service";
import { UserIp } from "./userIp";

export const CurrentWeather = () => {
  const [current, setCurrent] = useState<any>({});
  const userIP = UserIp();

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
        const data = await getCurrent(userIP);
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
