import { Logo } from "assets/jpg";
import React, { ReactElement } from "react";
import { menuList } from "routing/directions";
import { MenuNavigation } from "../components";
import s from "./style.scss";

interface IMainLayout {
  children: ReactElement;
}

export function MainLayout(props: IMainLayout) {
  return (
    <section className={s.container}>
      <header className={s.header}>
        <img className={s.logo} src={Logo}/>
        <MenuNavigation className={s.test} list={menuList} />
      </header>
      {props.children}
    </section>
  )
}