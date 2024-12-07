import { GetLocation } from "./hooks/getLocation";
import { CurrentWeather } from "./hooks/current";
import { format } from "date-fns";

const Test = () => {
  const date = new Date();
  const formattedTime = format(date, "HH:mm");

  console.log(formattedTime);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default Test;
