import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* outline: 0; */
        font-family: 'Spartan', san-serif;
        font-size: 15px;
    }

    :root {
    /* ### Primary */
        --DesaturatedDarkCyan: hsl(180, 29%, 50%);

    /* ### Neutral */
        --LightGrayishCyanBackground: hsl(180, 52%, 96%);
        --LightGrayishCyanFilterTablets: hsl(180, 31%, 95%);
        --DarkGrayishCyan: hsl(180, 8%, 52%);
        --VeryDarkGrayishCyan: hsl(180, 14%, 20%);
    }


    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--LightGrayishCyanBackground);
    }

    *, a {
        text-decoration: none;
    }
`