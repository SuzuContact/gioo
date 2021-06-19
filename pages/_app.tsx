import "../styles/globals.css";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

const theme: DefaultTheme = {
  palette: {
    main: "#F26F71",
    second: "#85ADEB",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
