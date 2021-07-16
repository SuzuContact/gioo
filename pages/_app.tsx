import "../styles/globals.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import React from "react";
import AppBar from "../src/appBar";
import Footer from "../src/shared/footer";

const theme: DefaultTheme = {
  palette: {
    main: "#97112A",
    second: "#85ADEB",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
