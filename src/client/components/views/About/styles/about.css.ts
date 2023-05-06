import { style, createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: "#acf4d0",
});

export const container = style({
  color: vars.color,
  background: 'blue'
});