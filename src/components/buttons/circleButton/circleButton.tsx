import React from "react";
import s from "./style.scss";

interface ICircleButton {
  name: number;
  onClick: (num: number) => void;
}

export function CircleButton(props: ICircleButton) {
  const { name, onClick } = props;
  const handle = () => {
    onClick(name + 3)
  }

  return (
    <div className={s.circleButton} onClick={handle}>
      {name}
    </div>
  )
}