import React from "react";
import { ThemeProvider } from "emotion-theming";
import variables from "./variables";

const theme = {
  ...variables
};

export const withTheme = TargetComponent => props => (
  <ThemeProvider theme={theme}>
    <TargetComponent {...props} />
  </ThemeProvider>
);

export { mq } from "./mq";
