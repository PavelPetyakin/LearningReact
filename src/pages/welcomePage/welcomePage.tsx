import { Avatar } from "assets/jpg";
import React, { useState } from "react";
import { Balance, Currencies, ICurrency, IElement, IUser, Menu, User } from "./components";
import s from "./style.scss";

interface IBigData {
  user: IUser;
  balanceInfo: IBalanceInfo;
}

interface IBalanceInfo {
  balance: number;
  currencies: ICurrency[];
  recentOperations: IElement[];
}

const data: ICurrency[] = [
  {
    amount: 22,
    type: "Crypto",
  },
  {
    amount: 135,
    type: "Dollars",
  },
];

const bigData: IBigData = {
  user: {
    name: "Ivanka Trampovna",
    avatarUrl: Avatar,
  },
  balanceInfo: {
    balance: 162.0,
    currencies: data,
    recentOperations: [
      {
        title: "Grocery",
        description: "Treasure island mall",
        summary: 12,
      },
      {
        title: "Petrol",
        description: "Essar petrol pump",
        summary: 9,
      },
    ],
  },
};

export function WelcomePage() {
  const { user, balanceInfo } = bigData;
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const handle = () => setIsClosed(!isClosed);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.background}>
          <User avatarUrl={user.avatarUrl} name={user.name} />
          <Balance balance={balanceInfo.balance} />
          <Currencies currencies={balanceInfo.currencies} />
        </div>
        <Menu isClosed={isClosed} handle={handle} recentOperations={balanceInfo.recentOperations} />
      </div>
    </div>
  );
}
