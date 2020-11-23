import cx from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { IMenuElement } from "routing/directions";
import s from "./style.scss";

interface IMenuNavigation {
  list: IMenuElement[];
  className?: string;
}

export function MenuNavigation(props: IMenuNavigation) {
  const { list, className } = props;
  const menuList = list.map((element, index: number) => {
    return (
      <NavLink
        key={index}
        to={element.link}
        className={cx(s.element,className)}
        activeClassName={s.elementActive}
        exact={true}
        children={element.title}
      />
    )
  })

  return <nav className={className} children={menuList} />;
}