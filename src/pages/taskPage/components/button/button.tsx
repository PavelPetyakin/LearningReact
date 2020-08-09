import React from "react";
import s from "./style.scss";

export interface IButton {
  name: string;
  onClickButton: () => void;
  buttonColor: string;
}

export function Button(props: IButton) {
  const { name, onClickButton, buttonColor } = props;

  return (
    <div className={s.button} style={{borderColor: buttonColor}} onClick={onClickButton}>{name}</div>
  )
}