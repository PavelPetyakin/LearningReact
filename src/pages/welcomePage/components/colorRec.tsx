import React from "react";
import s from "./style.scss";
import cx from "classnames";

export interface IColorRec {
  text: string;
  color: string;
  activeColor: string;
  onClickColor: () => void;
}

export function ColorRec(props: IColorRec) {
  const { text, color, activeColor, onClickColor } = props;
  const isActive: boolean = activeColor === text;

  return (
    <div className={cx(s.box,{[s.active]:isActive})}>
      <div className={s[color]} onClick={onClickColor}/>
      <div className={s.text}>{text}</div>
    </div>
  )
}