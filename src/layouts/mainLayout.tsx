import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.scss";

const menu = [
  {
    title: "главная",
    link: "/",
  },
  {
    title: "проект",
    link: "/project",
  },
]

export function MainLayout(props) {
  return(
    <div className={s.container}>
      <div className={s.menu}>
        {menu.map((el, i) => {
          return(
            <NavLink key={i} className={s.link} to={el.link} activeClassName={s.active} children={el.title} />
          )
        })}
      </div>
      {props.children}
    </div>
  )
}