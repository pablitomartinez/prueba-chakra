import { extendTheme } from "@chakra-ui/react";


const styles = {
    global:{
        'html, body' : {
            color: 'white',
            bg: 'purple.900'
        }
    }
}
export const theme = extendTheme({styles})