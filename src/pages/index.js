import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeroSection from "./homepage/heroSection";
import Mainfunct from "./homepage/main";
import SscLanding from "./homepage/Ssc";
import YourComponent from "./homepage/cardcomp";
import LandingSection from "./homepage/landing";
// import Footer from "./homepage/footer";
import Course from "./homepage/course";
import CenteredText from "../components/Foot";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>indra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <HeroSection />
          <SscLanding />
          {/* <Mainfunct /> */}
          <LandingSection/>
          <YourComponent />
          <Course/>
          {/* <CenteredText /> */}
          
        </div>
      </main>
    </>
  );
}
