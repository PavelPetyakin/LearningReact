import { Icon } from "assets/svg";
import React, { useState } from "react";
import s from "./style.scss";
import cx from "classnames"

interface ISelectBox {
  value: string;
  options: IOption[];
  onClick: (val: string) => void;
}

interface IOption {
  id: number;
  name: string;
}

export function SelectBox(props: ISelectBox) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { value, options, onClick } = props;
  const handleOpen = () => setShowOptions(true);
  const handleClick = (id) => () => {
    onClick(id);
    setShowOptions(false);
  };

  return(
    <div>
      <div className={s.box} onClick={handleOpen}>
        <div className={s.value}>{value}</div>
        <Icon.Triangle className={cx(s.triangle,{[s.open]: showOptions})}/>
      </div>
      {showOptions && (
        <div className={s.options}>
          {options.map((opt, i) => {
            return <div className={s.option} key={i} onClick={handleClick(opt.name)}>{opt.name}</div>
          })}
        </div>
      )}
    </div>
  )
}