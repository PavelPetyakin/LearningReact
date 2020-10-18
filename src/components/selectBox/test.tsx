import React, { useState } from "react";
import { SelectBox } from "./selectBox";

const array = [
  {
    id: 1,
    name: "Red",
  },
  {
    id: 2,
    name: "Green",
  },
];

export function TestSelectBox() {
  const [state, setState] = useState<string>("");
  const handleClick = (val) => setState(val);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
    >
      <SelectBox value={state} options={array} onClick={handleClick} />
    </div>
  );
}
