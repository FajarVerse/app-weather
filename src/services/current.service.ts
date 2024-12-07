import axios from "axios";

export const getCurrent = async (lat: number, long: number): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=a407e6f112e44f8b84e121933240412&q=${lat},${long}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
