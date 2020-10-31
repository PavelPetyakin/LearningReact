import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserBalanceState } from "../../reducers/main/selectors";
import { Balance, Currencies, Menu, User } from "./components";
import s from "./style.scss";

export function WelcomePage() {
  const { user, balanceInfo } = useSelector(getUserBalanceState);
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
