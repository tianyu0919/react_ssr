import { style, createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: "orange"
});

export const container = style({
  color: vars.color,
  background: 'blue'
});