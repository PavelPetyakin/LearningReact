import { Icon } from "assets/svg";
import React, { useState } from "react";
import s from "./style.scss";

export function TaskPage() {

  return (
    <div className={s.container}>
      <div className={s.submetric}>
        <div className={s.title}>
          <h1>Увлеченность работой</h1>
          <Icon.Cross className={s.cross}/>
        </div>
        <div className={s.list}>второй</div>
        <button className={s.button}>
          <Icon.Add className={s.add}/>
          <div>Добавить субметрику</div>
        </button>
      </div>
    </div>
  );
}