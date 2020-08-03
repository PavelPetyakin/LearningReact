import React from "react";
import s from "./style.scss";

export function WelcomePage() {
  const rec = (
    <>
      <div className={s.box}>
        <div className={s.red}/>
        <div className={s.text}>Красный</div>
      </div>
      <div className={s.box}>
        <div className={s.orange}/>
        <div className={s.text}>Оранжевый</div>
      </div>
      <div className={s.box}>
        <div className={s.yellow}/>
        <div className={s.text}>Жёлтый</div>
      </div>
      <div className={s.box}>
        <div className={s.green}/>
        <div className={s.text}>Зелёный</div>
      </div>
      <div className={s.box}>
        <div className={s.skyblue}/>
        <div className={s.text}>Голубой</div>
      </div>
      <div className={s.box}>
        <div className={s.blue}/>
        <div className={s.text}>Синий</div>
      </div>
      <div className={s.box}>
        <div className={s.purple}/>
        <div className={s.text}>Фиалетовый</div>
      </div>
    </>
  )

  return (
    <div className={s.container}>
      {rec}
    </div>
  );
}
