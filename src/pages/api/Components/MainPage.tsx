import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { FetchData, FetchImgData } from "../FetchWeatherData";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxMain/ReduxStore";
import { Degree, Direction, Temperature, Wind } from "../SVG/svgs";
import { Fredoka } from "next/font/google";
import { CircularProgress } from "@mui/material";

  export const fredoka = Fredoka({
    variable: "--font-fredoka",
    subsets: ["hebrew"],
    weight: ["300", "400", "500", "700"],
  });

  const PageBackground = () => {
  const country = useSelector((state: RootState) => state.main?.country);
  const [identify, setIdentify] = useState(false);
  const [error, setError] = useState<string | null>(null);  
  const countryToFetch = country || "georgia";

  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    error: weatherError,
  } = useQuery({
    queryFn: () => FetchData(countryToFetch),
    queryKey: ["weather", countryToFetch],
  });

  const {
    data: imageData,
    isLoading: isImageLoading,
    error: imageError,
  } = useQuery({
    queryFn: () => FetchImgData(countryToFetch),
    queryKey: ["weatherImgs", countryToFetch],
  });

  useEffect(() => {
      if (imageData && imageData.location && !imageData.location.name) {
      setError("Invalid country name. Please try again.");
      alert("Invalid country name. Please try again.");
    } else {
      setError(null);
    }
  }, [imageData]);  

  if (isWeatherLoading || isImageLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress size={40} />
      </div>
    );
  }

  if (weatherError || imageError || error) {
    return (
      <h1 className="absolute text-white">{error || "Error fetching data."}</h1>
    );
  }

  return (
    <div
      className="w-full h-screen text-white bg-slate-700 flex flex-col items-center justify-around"
      style={{ fontFamily: fredoka.style.fontFamily }}
    >
      <h1 className="text-2xl m-5 text-center">
        Todays Forecast of{" "}
        <p className="text-amber-300 text-center">
          {imageData?.location.country}/
          {imageData?.location.name}
        </p>
      </h1>
      <div className="border-2 border-gray-600 flex flex-col sm:flex-row gap-5 items-center justify-around p-10 bg-gray-800 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
        <div className="flex-col flex justify-around items-center">
          {/* Day condition */}
          <img
            src={`${imageData?.current.condition.icon}`}
            alt="cloud"
            className="w-28 h-auto"
          />
          {/* Wind */}
          <div className="text-xl">
            <div
              onClick={() => setIdentify(identify ? false : true)}
              role="button"
              className="cursor-pointer flex items-center justify-around gap-2"
            >
              <h1 className="flex gap-2">
                <Wind />
                <p className="sm:block hidden">Wind Speed: </p>
                {identify
                  ? imageData?.current.wind_kph + " Kph"
                  : imageData?.current.wind_mph + " Mph"}
              </h1>
            </div>
            <h1 className="flex gap-2">
              <Degree />
              <p className="sm:block hidden"> Wind Degree:</p>
              {imageData?.current.wind_degree}
            </h1>
            <h1 className="flex gap-2">
              <Direction />
              <p className="sm:block hidden">Wind Direction:</p>
              {imageData?.current.wind_dir}
            </h1>
            <div
              onClick={() => setIdentify(identify ? false : true)}
              role="button"
              className="cursor-pointer flex items-center justify-around gap-2 text-left"
            >
              <Temperature />
              <p className="sm:block hidden">Temperature:</p>
              <div className="sticky">
                <h1>
                  {identify
                    ? imageData?.current.temp_f + " °F"
                    : imageData?.current.temp_c + " °C"}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-col flex justify-around items-center text-md">
          <h1>
            Location: {imageData?.location.country} / {imageData?.location.name}
          </h1>
          <h1>Local Time: {imageData?.location.localtime}</h1>
        </div>
      </div>
      <h1 className="text-2xl m-5">Daily / Hourly Forecast</h1>
      <div
        className="p-5 flex items-center bg-gray-800 rounded-lg justify-around border-2 border-gray-600 text-white text-2xl overflow-y-hidden
       overflow-x-auto w-11/12 md:w-3/4 lg:w-1/2 whitespace-nowrap"
      >
        {weatherData?.map((item: any, index: number) => (
          <div
            key={index}
            className="p-10 m-2 rounded-lg bg-gray-700 border-2 border-gray-600"
          >
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="cloud"
              className="w-10 h-auto brightness-200"
            />
            <p className="text-xs">
              {new Date(item.dt * 1000).toLocaleString()}
            </p>
            <p className="text-xl">{item.weather[0].description}</p>
            <p className="text-xl">{Math.round(item.main.temp - 273.15)} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageBackground;
