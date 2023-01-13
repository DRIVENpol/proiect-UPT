// pages/_app.js
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChakraProvider, Box } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    // <GlobalContextProvider>
    <ChakraProvider>
    <Box bgGradient='linear(to-l, #000428, #004e92)' height='100%'>
        <Navbar />
          <Component {...pageProps} />
        </Box>
        <Footer />
    </ChakraProvider>
    // </GlobalContextProvider>
  )
}

export default MyApp