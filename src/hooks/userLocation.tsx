import { useEffect, useState } from "react";
import { getUserLocation } from "../services/localtion.service";
import { UserIp } from "./userIp";

export const UserLocation = () => {
  const [location, setLocation] = useState<any>({});
  const userIP = UserIp();

  useEffect(() => {
    getUserLocation((data: any): any => {
      setLocation(data.ip);
    }, userIP);
  }, [userIP]);

  return location;
};
