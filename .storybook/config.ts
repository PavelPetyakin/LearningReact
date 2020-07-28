import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";
import { withStyles } from "storybook-addon-styles/react";

configure(require.context("../", true, (/stories\.(ts|tsx)$/)), module);
addDecorator(withKnobs);
addDecorator(withStyles({
  fontFamily: "'Roboto Condensed', sans-serif",
  fontSize: "16px",
  color: "#4c4c4c",
}));
