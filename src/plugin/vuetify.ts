import {createVuetify, type ThemeDefinition} from "vuetify";
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    backgroundlight: "#FFFFFF",
    surface: "#F9F9F7",
    info: "#3C3232",
    warning: "#F15E2F",
    yellow: "#FFD31F",
    card: "#F3F3F2",
    title: "#4B413C",
    icon: "#818181",
    secondary: "#6B6B6B",
    medal: "#FFD31F",
    success: "#157515",
    textfield: "#BAAED0",
    abouttitle: "#000000",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#2C2735",
    backgroundlight: "#F9F9F9",
    surface: "#302A3B",
    info: "#DCDCDC",
    warning: "#F15E2F",
    yellow: "#FFD31F",
    card: "#393245",
    title: "#FFFFFF",
    icon: "#DCDCDC",
    secondary: "#999999",
    medal: "#FFD31F",
    success: "#157515",
    textfield: "#BAAED0",
    abouttitle: "#000000",
  },
};

const orangeTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FF6138",
    backgroundlight: "#FFFFFF",
    surface: "#FF8262",
    info: "#FFFFFF",
    warning: "#F15E2F",
    yellow: "#FFFFFF",
    card: "#FF9276",
    title: "#FFFFFF",
    icon: "#FFFFFF",
    secondary: "#FFFFFF",
    medal: "#FFFFFF",
    success: "#157515",
    textfield: "#999999",
    abouttitle: "#000000",
  },
};

const yellowTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFBA48",
    backgroundlight: "#FFFFFF",
    surface: "#FFC35E",
    info: "#FFFFFF",
    warning: "#FFFFFF",
    yellow: "#FFFFFF",
    card: "#FFCC77",
    title: "#FFFFFF",
    icon: "#FFFFFF",
    secondary: "#FFFFFF",
    medal: "#FFFFFF",
    success: "#157515",
    textfield: "#999999",
    abouttitle: "#000000",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: lightTheme,
      dark: darkTheme,
      orange: orangeTheme,
      yellow: yellowTheme
    },
  },
  components,
  directives,
});
