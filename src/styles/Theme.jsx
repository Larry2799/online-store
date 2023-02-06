import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    blue: "#0e88df",
    yellow: "#FFE59E",
    grey: "#808080",
  },
  fontSize: {
    smaller: "10px",
    small: "14px",
    medium: "18px",
    large: "32px",
  },
  fontWeight: {
    extraBold: 800,
    medium: 500,
    extraLight: 300,
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
