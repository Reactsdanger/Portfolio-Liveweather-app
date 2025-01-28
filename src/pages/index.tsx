import { Geist, Geist_Mono, Lexend } from "next/font/google";
import MainPage from "./api/Components/MainPage";
import Header from "./api/Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lexendfont = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export default function Home() {
  return (
    <div>
      <Header/>
      <MainPage />
    </div>
  );
}
