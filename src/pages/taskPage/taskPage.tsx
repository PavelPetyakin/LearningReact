import React from "react";
import s from "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenuIsOpen } from "reducers/main/selectors";
import cx from "classnames";
import { menuIsOpen } from "reducers/main/actions";

export function TaskPage() {
  const dispatch = useDispatch();
  const stateMenu = useSelector(getMenuIsOpen);
  const handleClick = () => {
    dispatch(menuIsOpen(!stateMenu));
  };

  return (
    <div className={cx(s.container, { [s.active]: stateMenu })} onClick={handleClick}>
      <div className={s.red}>Red</div>
      <div className={s.orange}>Orange</div>
      <div className={s.yellow}>Yellow</div>
      <div className={s.green}>Green</div>
      <div className={s.skyblue}>Skyblue</div>
      <div className={s.blue}>Blue</div>
      <div className={s.purple}>Purple</div>
    </div>
  );
}