import { ChakraProvider } from '@chakra-ui/react'
import { RoutesDefinided } from './RotasDefinidas'

export default function App() {

  return (
    <ChakraProvider>
      <RoutesDefinided />
    </ChakraProvider>
  )
}

