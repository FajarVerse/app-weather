import { CurrentWeather } from "./hooks/current";
import { DailyWeather } from "./hooks/daily";

const Test = () => {
  const current = CurrentWeather();
  const daily = DailyWeather();

  console.log(current);
  console.log(daily);
  return (
    <>
      <h1>Hello Word</h1>
    </>
  );
};

export default Test;
