import createTheme from "@mui/material/styles/createTheme";

import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/source-code-pro"; // Defaults to weight 400
import "@fontsource/source-code-pro/400.css"; // Specify weight
import "@fontsource/source-code-pro/400-italic.css"; // Specify weight and style

export const Theme = createTheme({
  typography: {
    fontFamily:  "Source Code Pro"
  },
  palette: {
    mode: "light",
    hint: {
      main: 'hsl(237, 14%, 26%)',
    },
    disabled: {
      main: 'hsl(233, 11%, 84%)',
    },
    primary: {
      main: '#e3b518',
    },
    secondary: {
      main: 'hsl(192, 100%, 67%), hsl(280, 87%, 65%)',
    },
    error: {
      main: 'hsl(0, 100%, 66%)',
    },
    background: {
      default: '#050a30',
      paper: '#fafafa',
    },
    text: {
      disabled: 'hsl(236, 33%, 92%)',
      hint: 'hsl(233, 11%, 84%)',
      secondary: '#f1f1f1',
      primary: '#050a30',
    },
    divider: '#e3b518',
  },
});