import React from 'react'
import Header from './api/Components/Header';
import { fredoka } from './api/Components/MainPage';

const credits = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div
        className="flex items-center w-full justify-center bg-slate-700 min-h-screen"
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div className="p-5 bg-slate-600 rounded-md m-5">
          <h1 className="text-2xl pb-4">Credits</h1>
          <p className="text-lg mb-3">
            All my credits goes to{" "}
            <a href="https://api.openweathermap.org/">Openweathermap</a> and
            <a href="https://api.weatherapi.com"> Weatherapi</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default credits
