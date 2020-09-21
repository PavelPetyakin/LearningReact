import { Icon } from "assets/svg";
import React, { useState } from "react";
import s from "./style.scss";

export function TaskPage() {

  return (
    <div className={s.container}>
      <div className={s.submetric}>
        <div className={s.title}>
          <div className={s.text}>Увлечённость работой</div>
          <Icon.Cross className={s.cross}/>
        </div>
        <div className={s.list}>
          <div className={s.frame}>Вовлечённость</div>
          <div className={s.frame}>Интерес к содержанию работы</div>
        </div>
        <button className={s.button}>
          <Icon.Add className={s.add}/>
          <div>Добавить субметрику</div>
        </button>
      </div>
    </div>
  );
}