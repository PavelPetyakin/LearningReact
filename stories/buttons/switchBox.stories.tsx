import { storiesOf } from "@storybook/react";
import { TestSwitch } from "components/buttons/switch/test";
import React from "react";

const storiesAccordion = storiesOf("Buttons", module);

const switchBox = storiesAccordion.add("SwitchBox", () => <TestSwitch />);

export { switchBox };