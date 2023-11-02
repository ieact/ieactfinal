import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    // background: {
    //   default: "#132B4D"
    // // background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    //   // background-image: linear-gradient( 0.3deg,  rgba(6,17,33,1) 1.1%, rgba(42,98,226,1) 97.3% );
    // },
    background: {
      default: grey[400]
      // default:
        // "linear-gradient( 0.3deg,  rgba(6,17,33,1) 1.1%, rgba(42,98,226,1) 97.3% )",
    },
    primary: {
      main: "#d9a60b",
    },
    secondary: {
      main: "#0b3ed9",
    },
    warning: {
      main: "#d93e0b",
    },
    info: {
      main: "#CCEA8D",
    },
    success: {
      main: "#76ff03",
    },
    success1: {
      main: "#3ed90b",
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: "#D9B64E",
    },
    warm1: {
      main: "#F2F2F2",
    },
    warm: {
      main: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h3: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },

    "@media (min-width:900px)": {
      fontSize: "1.5rem",
    },
    h4: {
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.25rem",
      },
    },
    h5: {
      color: "#0b3ed9", // Set the color for h5
    },
  },

  spacing: 16,

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // background: `rgba(230,238,255,0.50)`,
          // backdropFilter: `blur(20px)`,
          background: "white",
          borderRadius: "1rem",
          // display: 'flex',
          transition: "0.2s",
          margin: "0 2rem",
        },
        '& .card:hover': {
          transform: 'translateY(-2rem)',
        },
      },
    },
  },
});

export default theme;