import type { AppProps } from 'next/app'

import {ThemeProvider} from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import {light} from "../styles/Theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
