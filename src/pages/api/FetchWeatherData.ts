import axios from "axios";
import { CurrentWeather, MInter } from "./Interfaces/MInter";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const imgApiKey = process.env.NEXT_PUBLIC_IMG_API_KEY;

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

export const FetchData = async (country: string) => {
  if (!apiKey) {
    throw new Error("API key is missing.");
  }

  const res = await instance.get<MInter>(
    `data/2.5/forecast?&q=${country || "georgia"}&appid=${apiKey}`
  );

  return res.data.list;
};

export const FetchImgData = async (country: string) => {
  const res = await axios.get<CurrentWeather>(
    `https://api.weatherapi.com/v1/current.json?key=${imgApiKey}&q=${country || "georgia"}`
  );

  return res.data;
};
