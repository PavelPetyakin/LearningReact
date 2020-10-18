import React from "react";
import s from "./style.scss";

export interface ICurrency {
  amount: number;
  type: string;
}

export function Currency(props: ICurrency) {
  const { amount, type } = props;

  return (
    <div className={s.currency}>
      <div className={s.currencyAmount}>{`$${amount}.00`}</div>
      <div className={s.currencyType}>{type}</div>
    </div>
  );
}
