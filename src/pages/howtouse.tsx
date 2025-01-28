import React from 'react'
import Header from './api/Components/Header'
import { fredoka } from './api/Components/MainPage';

const howtouse = () => {
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
          <h1 className="text-2xl pb-4">Using Instruction</h1>
          <p className="text-lg mb-3">
            On the main page you can see the weather conditions today and next 5
            days. There are location defined too. <br /> If you want to change
            location press the + button that is displayed on top right corner.
          </p>
          <p className="text-lg">
            After clicking it you will see a new tab, where you can write any
            location country or city <br /> around the globe and click submit
            button.
          </p>
          <p className="text-lg mt-3">
            You can return to the main page clicking app logo and see the
            weather condition in the country you typed in.
          </p>
          <p className="text-lg mt-3">
            If main page is loading too long time that means that you have been selected a wrong country try to change it.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default howtouse
