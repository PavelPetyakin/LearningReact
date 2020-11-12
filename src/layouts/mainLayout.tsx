import React from "react";
import { MenuNavigation } from "../components";
import { menuList } from "routing/directions";
import s from "./style.scss";

export function MainLayout(props) {
  return(
    <section className={s.container}>
      <header className={s.header}>
        <MenuNavigation className={s.test} list={menuList} />
      </header>
      {props.children}
    </section>
  )
}