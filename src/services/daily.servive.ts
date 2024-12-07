import axios from "axios";

export const getDaily = async (lat: number, long: number) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=a407e6f112e44f8b84e121933240412&q=${lat},${long}&days=3`
    );

    return response.data.forecast.forecastday;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
