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

  const colors = <>
    <div className={s.box}>
      <div className={s.red}/>
      <div className={s.colorName}>Red</div>
    </div>
    <div className={s.box}>
      <div className={s.orange}/>
      <div className={s.colorName}>Orange</div>
    </div>
    <div className={s.box}>
      <div className={s.yellow}/>
      <div className={s.colorName}>Yellow</div>
    </div>
    <div className={s.box}>
      <div className={s.green}/>
      <div className={s.colorName}>Green</div>
    </div>
    <div className={s.box}>
      <div className={s.skyblue}/>
      <div className={s.colorName}>Skyblue</div>
    </div>
    <div className={s.box}>
      <div className={s.blue}/>
      <div className={s.colorName}>Blue</div>
    </div>
    <div className={s.box}>
      <div className={s.purple}/>
      <div className={s.colorName}>Purple</div>
    </div>
  </>

  return (
    <div className={cx(s.container, { [s.active]: stateMenu })} onClick={handleClick}>
      {colors}
    </div>
  );
}