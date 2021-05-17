import React from "react"
import { AppProps } from "next/app"
import { ChakraProvider, ColorMode, extendTheme, theme } from "@chakra-ui/react"

const config: { initialColorMode: ColorMode; useSystemColorMode: boolean } = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const customTheme = extendTheme({
  config,
  colors: {
    primary: theme.colors.red,
  },
})

export { customTheme as theme }

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
