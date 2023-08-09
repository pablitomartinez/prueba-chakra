import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Heading
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './resources';
import planta from './resources/images/planta.png'
function App() {
  return (
    <ChakraProvider theme={theme}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box h='40vh' bg='gray' bgImage={`url(${planta})`} bgRepeat="no-repeat">
            <Heading
              color='white'
              textTransform='uppercase'
              textAlign='center'
            >Domina el terreno</Heading>
              <Button variant='outline' >Ver detalles</Button>
              <Button variant='outline' >Ver Video</Button>
              
          </Box>
    </ChakraProvider>
  );
}

export default App;
