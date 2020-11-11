import { storiesOf } from "@storybook/react";
import { TestSelectBox } from "components/selectBox/test";
import React from "react";

const storiesAccordion = storiesOf("DropDowns", module);

const selectBox = storiesAccordion.add("SelectBox", () => <TestSelectBox />);

export { selectBox };