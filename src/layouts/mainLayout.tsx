import React from "react";
import { NavLink } from "react-router-dom";
import { directions } from "../routing/directions";
import s from "./style.scss";

const menu = [
  {
    title: "главная",
    link: directions.home,
  },
  {
    title: "проекты",
    link: directions.projects,
  },
]

export function MainLayout(props) {
  return(
    <div className={s.container}>
      <div className={s.menu}>
        {menu.map((el, i) => {
          return(
            <NavLink
              key={i}
              to={el.link}
              className={s.link}
              activeClassName={s.active}
              exact={true}
              children={el.title}
            />
          )
        })}
      </div>
      {props.children}
    </div>
  )
}