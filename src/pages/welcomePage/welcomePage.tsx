import React from "react";
import s from "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenuIsOpen } from "reducers/main/selectors";
import cx from "classnames";
import { menuIsOpen } from "reducers/main/actions";

export function WelcomePage() {
  const dispatch = useDispatch();
  const stateMenu = useSelector(getMenuIsOpen);
  const handleClick = () => {
    dispatch(menuIsOpen(!stateMenu));
  };

  function sayHi(x: number, y: number): number {
    return x + y
  }
  const sayBye = (arg: number | string): string => {
    if("number" === typeof arg) {
      return "isNumber"
    } else {
      return "isString"
    }
  }
  const name: number[] = [123, 321]
  console.log("SomeText:", sayHi(11, 22));
  console.log("-- 1 --:", sayBye("ghjhgj"));



  return (
    <div className={cx(s.container, { [s.active]: stateMenu })} onClick={handleClick}>
      {name.map((el, i) => <div key={i}>{el}</div>)}
    </div>
  );
};
