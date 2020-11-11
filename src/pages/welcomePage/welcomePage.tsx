import React, { useState } from "react";
import s from "./style.scss";

export function WelcomePage() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const handle = () => setIsClosed(!isClosed);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        123
      </div>
    </div>
  );
}
