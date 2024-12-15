import { CurrentWeather } from "../../hooks/current";
import Paragraph from "../elements/Paragraph";
import Temperature from "../elements/Temperature";
import Weather from "../elements/Weather";

const CurrentWeatherApp = () => {
  const current = CurrentWeather();
  const currentWeather = current.current;

  console.log(currentWeather);

  const convertDate = (dates: string): string => {
    const date = new Date(dates);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const dateResults = convertDate(currentWeather?.last_updated);
  return (
    <>
      <div className="w-full mt-40 flex gap-10 items-center lg:mt-0 lg:px-0 lg:gap-0">
        <div className="w-2/5">
          <Paragraph>{dateResults ? dateResults : "No Date"}</Paragraph>
          <Temperature>
            {currentWeather ? currentWeather.temp_c : "No Temp"}
          </Temperature>
        </div>
        <div className="w-3/5 self-end">
          <Weather>
            {currentWeather ? currentWeather.condition.text : "None"}
          </Weather>
        </div>
      </div>
    </>
  );
};

export default CurrentWeatherApp;
