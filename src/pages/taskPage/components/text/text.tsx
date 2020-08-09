import React from "react";
import s from "./style.scss";
import { IColorBox } from "../colorBox/colorBox";

interface IText {
  currentElement: Pick<IColorBox, "text" | "color"> | null;
}

export function Text(props: IText) {
  const { currentElement } = props;

  return currentElement !== null ? <p className={s.text} style={{color: currentElement.color}}>{currentElement.text} &#128515;</p> : <p className={s.text}>&#128564;</p>;
}