import { storiesOf } from "@storybook/react";
import { TestButton } from "components/buttons/button/test";
import React from "react";

const storiesAccordion = storiesOf("Buttons", module);

const button = storiesAccordion.add("Button", () => <TestButton />);

export { button };