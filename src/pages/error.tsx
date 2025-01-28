import React from 'react'
import Header from './api/Components/Header'
import { fredoka } from './api/Components/MainPage'

const error = () => {
  return (
    <>
     <div>
        <Header />
      </div>

      <div
        className="flex items-center w-full justify-center bg-slate-700 min-h-screen"
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div className="p-5 bg-slate-600 rounded-md">
          <h1 className="text-2xl pb-4">Oops..</h1>
          <p className="text-lg mb-3">
            Page not found, click logo to go to main page{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default error
