import { createTheme } from "@mui/material/styles";
import { darken, lighten } from "polished";
import { blue, grey } from "@mui/material/colors";


export const DrawerWidth = 250;

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
  main : "#2596be"
};

const theme = createTheme({
    palette: {
        common:{
          appbarcolor :"#2596be"
        }
      },

});

export default theme;