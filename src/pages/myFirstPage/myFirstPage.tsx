import { Button } from "components/buttons";
import React from "react";
import { Link } from "react-router-dom";
import { Color, Size } from "../../components/buttons/button/button";
import s from "./style.scss";

export function MyFirstPage() {
  return (
    <div className={s.container}>
      <Link to={"/"} className={s.link}>
        <Button size={Size.BIG} name={"Главная страница"} onClick={() => undefined}/>
      </Link>
      <Link to={"/task"} className={s.link}>
        <Button size={Size.BIG} name={"Задачи"} color={Color.LIGHTCORAL} onClick={() => undefined}/>
      </Link>
    </div>
  )
}
