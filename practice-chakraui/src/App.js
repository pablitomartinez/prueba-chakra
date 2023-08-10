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
            color="white"
            textTransform="uppercase"
            textAlign="center"
            fontWeight="light"
            letterSpacing="5px"
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
              fontWeight="light"
              borderRadius="0"
              color="white"
              size="lg"
              textTransform="uppercase"
              letterSpacing="1px"
              _hover={{
                color: 'black',
                bg: 'white',
              }}
            >
              cuidar
            </Button>
            <Button
              variant="outline"
              fontWeight="light"
              borderRadius="0"
              color="white"
              size="lg"
              textTransform="uppercase"
              letterSpacing="1px"
              _hover={{
                color: 'black',
                bg: 'white',
              }}
            >
              valorar
            </Button>
          </Stack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
