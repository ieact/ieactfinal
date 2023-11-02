import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
// import '../global.css'; // Import your global CSS file

import createEmotionCache from "../config/createEmotionCache";
import Header from "@/components/Header";
import Footer from "@/components/footer";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
       
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}
