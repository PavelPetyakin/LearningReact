import React, { useState } from "react";
import { CircleButton } from "./circleButton";

export function TestCircleButton() {
  const [state, setState] = useState<number>(0);
  const handleClick = (n) => setState(n);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
    >
      <CircleButton name={state} onClick={handleClick}/>
    </div>
  );
}