import React from "react";
import s from "./style.scss";

interface IButton {
  text: string;
  onClickButton: () => void;
  colorBorder: string;
}

export function Button(props: IButton) {
  const {text, onClickButton, colorBorder} = props;

  return (
    <div className={s.button} onClick={onClickButton} style={{borderColor: colorBorder}}>{text}</div>
  )
}