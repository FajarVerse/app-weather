import axios from "axios";

export const getUserIp = (callback: any): any => {
  axios
    .get(
      `https://api.ipgeolocation.io/getip?apiKey=d480ff10259f41be902c347085759aed`
    )
    .then((response) => {
      callback(response.data.ip);
    })
    .catch((error) => {
      console.log(error);
    });
};
