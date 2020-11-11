import { text } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Input } from "./input";

export function TestInput() {
  const [str, setStr] = useState<string>("");
  const handler = (e) => setStr(e);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
    >
      <Input value={str} placeholder={text("placeholder", "")} onChange={handler} />
    </div>
  );
}
