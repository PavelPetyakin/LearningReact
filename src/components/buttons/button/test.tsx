import { select, text } from "@storybook/addon-knobs";
import React from "react";
import { Button, Size } from "./button";

const buttonSize = {
  big: Size.BIG,
  medium: Size.MEDIUM,
  little: Size.LITTLE,
}

export function TestButton() {
  const handle = () => undefined;

  return (
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
      >
        <Button name={text("Название","Кнопка")} size={select("Размер",buttonSize,Size.BIG)} onClick={handle}/>
      </div>
    )
}