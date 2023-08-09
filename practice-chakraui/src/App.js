import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';
//import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './resources';

function App() {
  return (
    <ChakraProvider theme={theme}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Box>CONTENIDO</Box>
    </ChakraProvider>
  );
}

export default App;
