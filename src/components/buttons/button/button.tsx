import cx from "classnames";
import React from "react";
import s from "./style.scss";

interface IButton {
  name: string;
  onClick: () => void;
  size: ButtonSize;
}

type ButtonSize = Size.BIG | Size.MEDIUM | Size.LITTLE;

export enum Size {
  BIG = "BIG",
  MEDIUM = "MEDIUM",
  LITTLE = "LITTLE",
}

export function Button(props:IButton) {
  const { name, onClick, size } = props;
  return (
    <div className={cx(s.button,s[size])} onClick={onClick}>
      <span>{name}</span>
    </div>
  )
}