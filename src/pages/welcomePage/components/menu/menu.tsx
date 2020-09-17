import cx from "classnames";
import React from "react";
import { Element, IElement } from "..";
import s from "./style.scss";

interface IMenu {
  isClosed: boolean;
  handle: () => void;
  recentOperations: IElement[];
}

export function Menu(props: IMenu) {
  const { isClosed, recentOperations, handle } = props;
  return (
    <div className={cx(s.wrap, {[s.closed]: isClosed})}>
      <div className={s.menu}>
        <div className={s.line} onClick={handle}/>
        <div className={s.recent}>Recent transactions</div>
        <div className={s.recentList}>
          {recentOperations.map((elem, i) => {
            return <Element key={i} title={elem.title} description={elem.description} summary={elem.summary}/>
          })}
        </div>
      </div>
    </div>
  )
}