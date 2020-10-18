import React from "react";
import { Currency, ICurrency } from "./currency";
import s from "./style.scss";

interface ICurrencies {
  currencies: ICurrency[];
}

export function Currencies(props: ICurrencies) {
  const currencies = props.currencies.map((elem, index) => {
    return <Currency key={index} amount={elem.amount} type={elem.type} />;
  });

  return <div className={s.currencies}>{currencies}</div>;
}
