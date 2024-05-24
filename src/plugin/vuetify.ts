import {createVuetify, type ThemeDefinition} from "vuetify";
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#F9F9F7",
    info: "#3C3232",
    warning: "#F15E2F",
    yellow: "#FFD31F",
    card: "#F3F3F2",
    title: "#4B413C",
    icon: "#818181",
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#2C2735",
    surface: "#302A3B",
    info: "#DCDCDC",
    warning: "#F15E2F",
    yellow: "#FFD31F",
    card: "#393245",
    title: "#FFFFFF",
    icon: "#DCDCDC",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  components,
  directives,
});
