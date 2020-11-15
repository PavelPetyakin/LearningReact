import { Home_1 } from "assets/jpg";
import React from "react";
import s from "./style.scss";

export function WelcomePage() {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <div className={s.imageInfo}>
          <div className={s.news}>ОБНОВЛЕНИЕ 2020</div>
          <div className={s.size}>221 м<sup>2</sup></div>
          <div className={s.desc}>Красота и надёжность камня</div>
          <button>Подробнее</button>
        </div>
      </div>
      welcome page!!
    </div>
  );
}
