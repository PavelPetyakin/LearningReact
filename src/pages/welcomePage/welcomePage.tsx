import React from "react";
import s from "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMenuIsOpen } from "reducers/main/selectors";
import cx from "classnames";
import { menuIsOpen } from "reducers/main/actions";

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const stateMenu = useSelector(getMenuIsOpen);
  const handleClick = () => {
    dispatch(menuIsOpen(!stateMenu));
  };

  return (
    <div className={cx(s.container, { [s.active]: stateMenu })} onClick={handleClick}>
      Привет, Артем!
    </div>
  );
};
