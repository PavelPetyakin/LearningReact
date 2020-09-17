import React from "react";
import s from "./style.scss";

export interface IElement {
  title: string;
  description: string;
  summary: number;
}

export function Element(props: IElement) {
  const { title, description, summary } = props;

  return (
    <div className={s.recentElement}>
      <div>
        <div className={s.recentTitle}>{title}</div>
        <div className={s.recentDescription}>{description}</div>
      </div>
      <div>{`$${summary}.00`}</div>
    </div>
  )
}