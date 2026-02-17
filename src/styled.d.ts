import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            buttons: string,
            details: string,
            marks: string,
            background: string,
            white: string,
            gray: string,
        },
        fonts:{
            primary:string,
            secondary:string,
        },
        hovers:{
            scale:string,
            transition:string,
        },
    }
}