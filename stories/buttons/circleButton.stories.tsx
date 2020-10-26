import { storiesOf } from "@storybook/react";
import { TestCircleButton } from "components/buttons/circleButton/test";
import React from "react";

const storiesAccordion = storiesOf("Buttons", module);

const circleButton = storiesAccordion.add("CircleButton", () => <TestCircleButton />);

export { circleButton };