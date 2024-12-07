import { useEffect, useState } from "react";
import { CurrentWeather } from "../../hooks/current";
import Header from "../elements/Header";
const HeaderApp = () => {
  const [time, setTime] = useState<string>();
  const current = CurrentWeather();
  const lokasi = current.location;

  useEffect(() => {
    setInterval(() => {
      const getTime = () => {
        const date = new Date();
        const hours: number = date.getHours();
        const minute: number = date.getMinutes();
        setTime(`${hours} : ${minute}`);
      };

      getTime();
    }, 1000);
  }, []);

  console.log(time);
  return (
    <>
      <div className="w-full flex justify-between lg:justify-normal lg:gap-10">
        <Header>{lokasi ? lokasi.name : "No Location"}</Header>
        <Header>{time ? time : "No Time"}</Header>
      </div>
    </>
  );
};

export default HeaderApp;
