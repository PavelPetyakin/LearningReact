import React from "react";
import s from "./style.scss";

interface IBalance {
  balance: number;
}

export function Balance(props: IBalance) {
  const amount: string = "$" + props.balance + ".00";

  return (
    <div className={s.balance}>
      <div className={s.balanceTitle}>Your total balance is</div>
      <div className={s.balanceAmount}>{amount}</div>
    </div>
  )
}