import React, { useState } from "react";
import { ColorRec, IColorRec } from "./components/colorRec";
import s from "./style.scss";

const array: Pick<IColorRec, "text" | "color" >[] = [
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
  const [activeColorState, setActiveColor] = useState<string>("");

  const handle = (newColor: string) => () => {
    if (newColor === activeColorState) {
      setActiveColor("");
    } else {
      setActiveColor(newColor);
    }
  }

  const renderText = activeColorState ?
    <p>{activeColorState} &#128515;</p> :
    <p>&#128564;</p>;

  const colorRecs = array.map((el,index) => {
    return (
      <ColorRec
        key={index}
        text={el.text}
        color={el.color}
        activeColor={activeColorState}
        onClickColor={handle(el.text)}
      />
    )
  })

  return (
    <div className={s.container} >
      <h1>Выбирети цвет</h1>
      <div className={s.row}>{colorRecs}</div>
      <div className={s.text}>{renderText}</div>
    </div>
  );
}

