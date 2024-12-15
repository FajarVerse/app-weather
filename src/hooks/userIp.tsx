import { useEffect, useState } from "react";
import { getUserIp } from "../services/userip.service";

export const UserIp = () => {
  const [userIP, setUserIP] = useState<any>("");

  useEffect(() => {
    getUserIp((data: any): any => {
      setUserIP(data);
    });
  }, []);

  return userIP;
};
