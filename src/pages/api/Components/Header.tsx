import Link from 'next/link';
import React from 'react'
import { fredoka } from './MainPage';
import { Unbounded } from 'next/font/google';

 export const danfo = Unbounded({
   variable: "--font-danfo",
   subsets: ["latin"],
   weight: ["400"],
 });

const Header = () => {
  return (
    <div
      className="bg-gray-800 w-full sticky h-12 first-line:top-0 flex items-center justify-around"
      style={{ fontFamily: fredoka.style.fontFamily }}
    >
      <Link
        href="/"
        className="text-blue-200"
        style={{ fontFamily: danfo.style.fontFamily }}
      >
       <strong className='text-xl'>🌩️</strong> Live Weather 
      </Link>
      <Link href="/howtouse">How to use</Link>
      <Link href="/credits">Credits</Link>
      <Link href="addcountryforecast">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 384 448"
        >
          <path
            fill="currentColor"
            d="M21 213h150v150q0 21 21 21t21-21V213h150q21 0 21-21t-21-21H213V21q0-21-21-21t-21 21v150H21q-21 0-21 21t21 21z"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Header
