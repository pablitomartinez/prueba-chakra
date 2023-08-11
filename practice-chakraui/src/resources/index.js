// ! configuracion global de styles

import { extendTheme } from "@chakra-ui/react";

const styles = {
    global:{
        'html, body' : {
            color: 'white',
            bg: 'purple.900'
        }
    }
}

const fonts = {
    heading:'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
}

const Button = {
    variants: {
        outline:{
            borderRadios: '0',
            textTransform: 'uppercase',
            fontWeight: 'light',
            letterSpacing: '1px',
            color:'white',
            _hover:{
                color:'black'
            }
        }
    }
}

const Heading = {
    variants:{
        primary: {
            fontWeight: 'light',
            letterSpacing: '2px',
            _before:{
                content: `''`,
                display: 'block',
                width: '40px',
                height:'2px',
                bg:'purple.300'
            }
        },
        banner:{
            textTransform: 'uppercase',
            fontWeight: 'light',
            letterSpacing: '5px',
            color:'white'
        }
    }
}

export const theme = extendTheme({
    fonts, 
    styles,
    components:{ Button, Heading }
})