import {useEffect, useState} from "react";
import type { AppProps } from 'next/app'

import {ThemeProvider} from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import {light} from "../styles/Theme"

import LoadingScreen from "../components/common/elements/LoadingScreen"

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={light}>
        {!loading ? (
        <Component {...pageProps} />
        ) : (
          <LoadingScreen />
        )}
      </ThemeProvider>
    </>
  )
}

export default MyApp
