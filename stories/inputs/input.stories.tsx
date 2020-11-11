import { storiesOf } from "@storybook/react";
import { TestInput } from "components/input/test";
import React from "react";

const storiesAccordion = storiesOf("Inputs", module);

const input = storiesAccordion.add("Input", () => <TestInput />);

export { input };