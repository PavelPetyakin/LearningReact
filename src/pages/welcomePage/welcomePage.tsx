import React, { useState } from "react";
import { MainLayout } from "../../layouts/mainLayout";
import s from "./style.scss";

export function WelcomePage() {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const handle = () => setIsClosed(!isClosed);

  return (
    <MainLayout>
      <div className={s.wrapper}>
        123
      </div>
    </MainLayout>
  );
}
