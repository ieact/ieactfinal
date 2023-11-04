import Head from "next/head";
import { useRef } from "react";
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
import Landing1 from "./homepage/Landing1";
// import useScrollSnap from "react-use-scroll-snap";
import { Box } from "@mui/system";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  return (
    <>
      <Head>
        <title>indra</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box >

          <HeroSection />
          <Landing1/>
          <SscLanding />
        
          <LandingSection/>
          <YourComponent />
          <Course/>
          {/* <CenteredText /> */}
          
        </Box>
      </main>
    </>
  );
}
