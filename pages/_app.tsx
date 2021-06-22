import "../styles/globals.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import React from "react";
import AppBar from "../src/appBar";

const theme: DefaultTheme = {
  palette: {
    main: "#F26F71",
    second: "#85ADEB",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
