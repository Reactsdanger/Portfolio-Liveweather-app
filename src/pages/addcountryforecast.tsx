import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./api/ReduxMain/ReduxStore";
import { addCountry } from "./api/ReduxMain/ReduxSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "./api/Components/Header";
import { fredoka } from "./api/Components/MainPage";

const AddCountryForecast = () => {
  const country = useSelector((state: RootState) => state.main);
  const router = useRouter();
  const dispatch = useDispatch();
  const [storename, setStorename] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (storename.trim() === "") return;

    dispatch(addCountry(storename));
    setStorename("");
    router.push("/");
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div
        className="w-full min-h-screen bg-slate-700 flex flex-col items-center justify-center gap-9"
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div className="m-10 top-20 p-3 pr-5 bg-slate-800 rounded-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={storename}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStorename(e.target.value)
              }
              placeholder="Enter country or city name"
              className="m-3 p-2 pr-5 pl-5 bg-slate-500 rounded-3xl focus:outline-2 focus:bg-slate-600 focus:outline-gray-500"
            />
            <button
              type="submit"
              className="ml-3 p-2 pr-4 pl-4 bg-slate-500 text-white rounded-3xl hover:bg-slate-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="width-auto height-auto p-12 rounded-lg bg-slate-800">
          <h1 className="text-xl font-thin p-3">
            Current Country Forecast: {country.country || "georgia"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default AddCountryForecast;
