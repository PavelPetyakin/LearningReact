import React from "react";
import s from "./style.scss";

export function WelcomePage() {

  return (
    <div className={s.container}>
      <div className={s.red}>Красный</div>
      <div className={s.orange}>Оранжевый</div>
      <div className={s.yellow}>Желтый</div>
      <div className={s.green}>Зеленый</div>
      <div className={s.skyblue}>Голубой</div>
      <div className={s.blue}>Синий</div>
      <div className={s.purple}>Фиолетовый</div>
    </div>
  );
}
