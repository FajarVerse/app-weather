import { GetLocation } from "./hooks/getLocation";
import { CurrentWeather } from "./hooks/current";

const Test = () => {
  const { lat, long } = GetLocation();
  const current = CurrentWeather();

  console.log(`Latitude: ${lat}`);
  console.log(`Longitude: ${long}`);
  console.log(current);
  // const location = (): void => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log("latitude :" + position.coords.latitude);
  //         console.log("Longitude :" + position.coords.longitude);
  //       },
  //       (error) => {
  //         console.log("Error Code " + error.code + " - " + error.message);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //       }
  //     );
  //   } else {
  //     console.info("lokasi tidak ditemukan");
  //   }
  // };

  // location();

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

export default Test;
