import { AppProps } from "next/app"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({})

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
