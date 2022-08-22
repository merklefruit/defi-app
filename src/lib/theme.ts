import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "dark",

  colors: {
    ctp_crust: [
      "#212126",
      "#1D1D23",
      "#1A1A21",
      "#17171E",
      "#14141D",
      "#11111B",
      "#101017",
      "#0F0F14",
      "#0E0E12",
      "#0D0D10",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: 30 },
    },
  },
};

export default theme;
