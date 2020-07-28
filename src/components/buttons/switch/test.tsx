import React, { useState } from "react";
import { Switch } from "./switch";

export function TestSwitch() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
    >
      <Switch isActive={isActive} onClick={handleClick} />
    </div>
  );
}
