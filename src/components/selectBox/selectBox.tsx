import { Icon } from "assets/svg";
import cx from "classnames";
import React, { useState } from "react";
import s from "./style.scss";

interface ISelectBox {
  value: string;
  options: IOption[];
  handle: (val: string) => void;
}

export interface IOption {
  id: number;
  name: string;
}

export function SelectBox(props: ISelectBox) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { value, options, handle } = props;
  const handleOpen = () => setShowOptions(true);
  const handleClick = (id) => () => {
    handle(id);
    setShowOptions(false);
  };

  return (
    <div>
      <div className={s.box} onClick={handleOpen}>
        <div className={s.value}>{value}</div>
        <Icon.Jackdaw className={cx(s.jackdaw, { [s.open]: showOptions })} />
      </div>
      {showOptions && (
        <div className={s.options}>
          {options.map((opt, i) => {
            return (
              <div className={s.option} key={i} onClick={handleClick(opt.name)}>
                {opt.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
