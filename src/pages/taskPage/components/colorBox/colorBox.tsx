import React from "react";
import s from "./style.scss";
import cx from "classnames";

export interface IColorBox {
  text: string;
  color: string;
  activeColor: string;
  onClick: () => void;
}

export function ColorBox(props: IColorBox) {
  const { text, color, activeColor, onClick } = props;
  const isActive = activeColor === text;

  return (
    <div className={cx(s.box,{[s.active]: isActive})}>
      <div className={s[color]} onClick={onClick}/>
      <div className={s.colorName}>{color}</div>
    </div>
  );
}