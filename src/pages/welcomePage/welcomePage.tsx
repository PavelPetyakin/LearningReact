import React from "react";
import { ColorRec, IColorRec } from "./components/colorRec";
import s from "./style.scss";

const array: Omit<IColorRec, "children" | "title" | "order">[] = [
  {
    color: "red",
    text: "Красный",
  },
  {
    color: "orange",
    text: "Оранжевый",
  },
  {
    color: "yellow",
    text: "Жёлтый",
  },
  {
    color: "green",
    text: "Зелёный"
  },
  {
    color: "skyblue",
    text: "Голубой"
  },
  {
    color: "blue",
    text: "Синий"
  },
]

export function WelcomePage() {
  const colorRecs = array.map((el,index) => {
    return (
      <ColorRec
        key={index}
        text={el.text}
        color={el.color}
        order={index}
        title={"hello1"}
        children={<p>Hello</p>}
      />
    )
  })

  return (
    <div className={s.container} children={colorRecs}/>
  );
}

