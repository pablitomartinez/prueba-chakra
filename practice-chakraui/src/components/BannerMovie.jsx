import { 
    ChakraProvider, 
    Box, 
    Image, 
    Heading, 
    Text, 
    HStack, 
    Tag, 
    Link, 
    VStack, 
    Divider
} from "@chakra-ui/react";
import peli1 from '../resources/images/peli4.jpg';
import amazon from '../resources/images/amazon.png';
import disney from '../resources/images/disney.png';
// import { theme1 } from "../resources/theme1";

import { theme } from '../resources';

function BannerMovvie(){
    return(
        <ChakraProvider theme={theme}>
            <Box 
            as='header'
            textAlign='center'
            py='10px'
            >
            <strong>LOGO</strong>
            </Box>
            <Box as='main' >
                <Image
                    src={peli1}
                    alt="planta1"
                    boxSize='100vw'
                    objectFit='cover'
                />
                <Box px='40px'>
                    <Heading
                        as='h1'
                        size='md'
                        my='20px'
                    >
                    Verde Amanecer: La Conquista Botánica
                    </Heading>
                    <Text fontSize='sm' >
                    Sumérgete en un mundo futuro donde la naturaleza toma el control en 'Verde Amanecer: La Conquista Botánica'. Cuando plantas inteligentes mutadas comienzan a invadir la Tierra, la científica Emma Martinez y un grupo de valientes sobrevivientes luchan por detener la expansión vegetal y descubren secretos impactantes sobre su origen. Con efectos visuales impresionantes, la película narra la lucha desesperada de la humanidad por sobrevivir y restaurar el equilibrio en un mundo cambiado para siempre por la insurgencia botánica.
                    </Text>
                    <HStack my='25px'>
                        <Tag variant='solid' colorScheme='purple'>Ciencia Ficcion</Tag>
                        <Tag variant='solid' colorScheme='purple'>Fantasia</Tag>
                        <Tag variant='solid' colorScheme='purple'>Concientizacion</Tag>

                    </HStack>
                    <Heading variant='primary'>
                        Donde encontrarla
                    </Heading>
                    <HStack mt='20px' mb='40px' spacing='20px'>
                        <Link href="https://www.disneyplus.com/es-ar?cid=DSS-Search-Google-71700000075032759-&s_kwcid=AL!8468!3!632349338523!e!!g!!disney%2B&gad=1&gclid=Cj0KCQjwldKmBhCCARIsAP-0rfy0zCHjgBieMXsqg3m3FJZWDrBjzzHD9pRyXF3KSgK11pzy7khv9_gaAiSwEALw_wcB&gclsrc=aw.ds" isExternal>
                            <Image 
                                src={amazon} 
                                alt='amazon' 
                                boxSize='90px'
                                objectFit='cover'
                                h='50px'
                                borderRadius='5px'
                                />
                        </Link>
                        <Link href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_gen_ar_hk_s_g_mkw_sXrFMEZ6u-dc_pcrid_646027518719?mrntrk=slid__pgrid_110207465979_pgeo_1000133_x__adext__ptid_kwd-20224317953" isExternal>
                            <Image 
                                src={disney} 
                                alt='disney' 
                                boxSize='90px'
                                objectFit='cover'
                                h='50px'
                                borderRadius='5px'
                            />
                        </Link>
                    </HStack>
                    <Heading variant='primary' >
                        Informacion
                    </Heading>
                    <VStack align='flex-start'  mt='20px' mb='40px' >
                        <Text>
                            <strong>Directores</strong>
                            <Box as="span" m='10px' >Jose Russo, Anthony Russo</Box>
                        </Text>
                        <Divider/>
                        <Text>
                            <strong>Año</strong>
                            <Box as="span" m='10px' >2023</Box>
                        </Text>
                        <Divider/>
                    </VStack>
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default BannerMovvie