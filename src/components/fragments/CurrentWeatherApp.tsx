import { CurrentWeather } from "../../hooks/current";
import { WeatherCondition } from "../../hooks/weatherCondition";
import Paragraph from "../elements/Paragraph";
import Temperature from "../elements/Temperature";
import Weather from "../elements/Weather";

const CurrentWeatherApp = () => {
  const current = CurrentWeather();
  const weather = WeatherCondition();
  const currentWeather = current.current;

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
      <div className="w-full px-2 mt-40 flex gap-10 items-center lg:mt-0 lg:px-0">
        <div className="w-2/5">
          <Paragraph>{dateResults ? dateResults : "No Date"}</Paragraph>
          <Temperature>
            {currentWeather ? currentWeather.temp_c : "No Temp"}
          </Temperature>
        </div>
        <div className="w-3/5 self-end py-2">
          <Weather>{weather ? weather : "None"}</Weather>
          <Paragraph>
            {currentWeather ? currentWeather.condition.text : "None"}
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default CurrentWeatherApp;
