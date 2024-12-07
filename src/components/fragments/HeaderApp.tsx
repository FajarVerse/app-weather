import { useEffect, useState } from "react";
import { CurrentWeather } from "../../hooks/current";
import Header from "../elements/Header";
import { format } from "date-fns";
import { id } from "date-fns/locale";
const HeaderApp = () => {
  const [time, setTime] = useState<string>();
  const current = CurrentWeather();
  const lokasi = current.location;

  useEffect(() => {
    setInterval(() => {
      const getTime = () => {
        const formatTime = format(new Date(), "HH:mm", { locale: id });
        setTime(formatTime);
      };

      getTime();
    }, 1000);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between lg:justify-normal lg:gap-10">
        <Header>{lokasi ? lokasi.name : "No Location"}</Header>
        <Header>{time ? `${time} WIB` : "No Time"}</Header>
      </div>
    </>
  );
};

export default HeaderApp;
