import React from 'react';
import ReactPlayer from 'react-player';
import { Container, AspectRatio, Center, Icon, useBoolean} from '@chakra-ui/react';
import image from '../../resources/images/peli1.jpg'
import { PlayIcon } from '../../resources/svg';
export const Video = () => {
  const trailerUrl = 'https://www.youtube.com/watch?v=ZsEBMwH5UJs';
  const [playing, setPlaying] = useBoolean()
  return (
    <>
      <Container maxW="container.md">
        <AspectRatio ratio={16/9} mb='45px' >
            <>
            <ReactPlayer url={trailerUrl} width="100%" height="100%"
              playing={playing}
            />
            <Center
              bg={`url(${image}) no-repeat center / cover`}
              opacity={playing ? '0' : '1'} // si esta playing no se ve, y si no si
              onClick={setPlaying.toggle}
              transition='all ease-in-out 0.3s'
              cursor='pointer'
              _hover={{
                svg:{
                  transform: 'scale(1.3)',
                  opacity:'0.8',                
                }
              }}
            >
              <Icon as={PlayIcon} w='100px' h='100px'
                fill='whiteAlpha.700'
                transition='all ease-in-out 0.3s'
              />
            </Center>
            </>
         </AspectRatio>
      </Container>
    </>
  );
};
