import React from "react";
import style from "../style.scss";

export interface IColorRec {
  text: string;
  color: string;
  order: number;
  children: React.ReactNode;
  title: string;
}

export function ColorRec(props: IColorRec) {
  const { text, title, color, order, children } = props;
  const renderMessage: string = order % 2 === 0 ? "Первый" : "Второй";

  return (
    <div className={style.box}>
      <div children={renderMessage}/>
      <div className={style[color]}/>
      <div className={style.text}>{text}</div>
      {children}
    </div>
  )
}