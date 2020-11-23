import cx from "classnames";
import React from "react";
import s from "./style.scss";

interface IButton {
  name: string;
  onClick: () => void;
  size: ButtonSize;
  color?: ButtonColor;
  Icon?: SvgComponent;
}

type ButtonSize = Size.BIG | Size.MEDIUM | Size.LITTLE;
type ButtonColor = Color.WHITE | Color.SKYBLUE | Color.LIGHTCORAL;

export enum Size {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  LITTLE = "LITTLE",
}

export enum Color {
  WHITE = "WHITE",
  LIGHTCORAL = "LIGHTCORAL",
  SKYBLUE = "SKYBLUE",
}

export function Button(props: IButton) {
  const { name, onClick, size, color = Color.WHITE, Icon } = props;
  return (
    <button className={cx(s.button, s[size], s[color])} onClick={onClick}>
      {Icon && <Icon className={s.add} />}
      {name}
    </button>
  );
}
