import { useEffect, useState } from "react";

interface Location {
  lat: number;
  long: number;
}

export const GetLocation = () => {
  const [cordinat, setCordinat] = useState<Location>({ lat: 0, long: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCordinat({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => console.log(`Error Code ${error.code}-${error.message}`),
        {
          enableHighAccuracy: true,
        }
      );
    }
  }, []);

  return cordinat;
};
