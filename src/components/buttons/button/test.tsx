import { select, text } from "@storybook/addon-knobs";
import React from "react";
import { Button, Color, Size } from "./button";

const buttonSize = {
  big: Size.BIG,
  medium: Size.MEDIUM,
  little: Size.LITTLE,
};

const buttonColor = {
  white: Color.WHITE,
  lightcoral: Color.LIGHTCORAL,
  skyblue: Color.SKYBLUE,
};

export function TestButton() {
  const handle = () => undefined;

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}
    >
      <Button
        name={text("Название", "Кнопка")}
        size={select("Размер", buttonSize, Size.BIG)}
        color={select("Цвет", buttonColor, Color.SKYBLUE)}
        onClick={handle}
      />
    </div>
  );
}
