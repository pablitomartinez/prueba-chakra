import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Heading,
  Flex,
  Stack,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { theme } from './resources';
import planta from './resources/images/planta.png';
import BannerMovvie from './components/BannerMovie';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      <Box
        h="40vh"
        bg="gray"
        bgImage={`url(${planta})`}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          direction="column"
          alignItems="center"
          justify="center"
          h="100%"
          bg="rgb(0 0 0 / 50%)"
          p={['0 10%', null, '0 20%']}
        >
          <Heading
            variant='banner'
          >
            domina el terreno
          </Heading>
          <Stack 
            direction={{
              base:'column',
              md:'row'
            }} spacing="40px" mt="30px"
            w={['100%', null , 'auto']}
            
            >
            <Button
              variant="outline"
              size="lg"
              
              >
              cuidar
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              valorar
            </Button>
          </Stack>
        </Flex>
      </Box>
      <BannerMovvie/>
      

      

    </ChakraProvider>
  );
}

export default App;
