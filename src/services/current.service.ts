import axios from "axios";

export const getCurrent = async (userIp: string): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=a407e6f112e44f8b84e121933240412&q=${userIp}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
