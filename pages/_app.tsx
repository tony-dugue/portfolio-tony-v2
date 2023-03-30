import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/common/toggleTheme/useDarkMode";
import GlobalStyles from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/Theme";

import LoadingScreen from "../components/common/elements/LoadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  // dark/light mode
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading, theme]);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {!loading ? (
        <Component {...pageProps} themeToggler={themeToggler} />
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
}

export default MyApp;
