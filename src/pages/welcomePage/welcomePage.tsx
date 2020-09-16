import { number } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { Button } from "./components/button/button"
import { ColorRec, IColorRec } from "./components/colorRec/colorRec";
import s from "./style.scss";
import { Avatar } from "assets";
import cx from "classnames";

interface IBigData {
  user: IUser;
  balanceInfo: IBalanceInfo;
}

interface IBalanceInfo {
  balance: number;
  currencies: ICurrency[];
}

const data: ICurrency[] = [
  {
    amount: 22,
    type: "Crypto",
  },
  {
    amount: 135,
    type: "Dollars",
  }
];

const bigData: IBigData = {
  user: {
    name: "Ivanka Trampovna",
    avatarUrl: Avatar,
  },
  balanceInfo: {
    balance: 162.00,
    currencies: data,
  }
}

export function WelcomePage() {
  const { user, balanceInfo } = bigData;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handle = () => setIsOpen(!isOpen);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.background}>
          <User avatarUrl={user.avatarUrl} name={user.name}/>
          <Balance balance={balanceInfo.balance}/>
          <Currencies currencies={balanceInfo.currencies}/>
        </div>
        <div className={cx(s.wrap, {[s.closed]: isOpen})}>
          <div className={s.menu}>
            <div className={s.line} onClick={handle}/>
            <div className={s.recent}>Recent transactions</div>
            <div className={s.recentList}>
              <div className={s.recentElement}>
                <div>
                  <div className={s.recentTitle}>Grocery</div>
                  <div className={s.recentDescription}>Treasure island mall</div>
                </div>
                <div>$12.00</div>
              </div>
              <div className={s.recentElement}>
                <div>
                  <div className={s.recentTitle}>Petrol</div>
                  <div className={s.recentDescription}>Essar petrol pump</div>
                </div>
                <div>$09.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface IUser {
  avatarUrl: string;
  name: string;
}

function User(props: IUser) {
  const { avatarUrl, name } = props;

  return (
    <div className={s.user}>
      <img className={s.userAvatar} src={avatarUrl}/>
      <div className={s.userName}>{name}</div>
    </div>
  )
}

interface IBalance {
  balance: number;
}

function Balance(props: IBalance) {
  const amount: string = "$" + props.balance + ".00";

  return (
    <div className={s.balance}>
      <div className={s.balanceTitle}>Your total balance is</div>
      <div className={s.balanceAmount}>{amount}</div>
    </div>
  )
}

interface ICurrency {
  amount: number;
  type: string;
}

function Currency(props: ICurrency) {
  const { amount, type } = props;

  return (
    <div className={s.currency}>
      <div className={s.currencyAmount}>{`$${amount}.00`}</div>
      <div className={s.currencyType}>{type}</div>
    </div>
  )
}

interface ICurrencies {
  currencies: ICurrency[];
}

function Currencies(props: ICurrencies) {
  const currencies = props.currencies.map((elem, index) => {
    return <Currency key={index} amount={elem.amount} type={elem.type}/>
  })

  return (
    <div className={s.currencies}>
      {currencies}
    </div>
  )
}