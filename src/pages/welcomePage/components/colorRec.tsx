import React from "react";
import style from "./style.scss";

export interface IColorRec {
  text: string;
  color: string;
  activeColor: string;
  onClick: () => void;
}

export function ColorRec(props: IColorRec) {
  const { text, color, activeColor, onClick } = props;
  const isActive: boolean = activeColor === text;

  return (
    <div className={style.box}>
      <div className={style[color]}/>
      <div className={style.text}>{text}</div>
    </div>
  )
}