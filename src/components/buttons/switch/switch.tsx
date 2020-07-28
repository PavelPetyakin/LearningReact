import cx from "classnames";
import React from "react";
import s from "./style.scss";

export interface ISwitchProps {
  isActive: boolean;
  onClick: () => void;
}

export function Switch(props: ISwitchProps) {
  const { isActive, onClick } = props;

  return (
    <div className={s["LIGHT"]}>
      <div className={s.container} onClick={onClick}>
        <div className={cx(s.circle, { [s.open]: isActive })} />
      </div>
    </div>
  );
}
