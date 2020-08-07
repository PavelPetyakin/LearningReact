import React, { useState } from "react";
import s from "./style.scss";
import { ColorBox, IColorBox } from "./components/colorBox/colorBox";

const dataArray: Pick<IColorBox, "text" | "color">[] = [
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
  {
    color: "purple",
    text: "Фиолетовый"
  },
  {
    color: "darkred",
    text: "Бордовый",
  },
  {
    color: "coral",
    text: "Кораловый",
  },
  {
    color: "gold",
    text: "Золотой",
  },
  {
    color: "lightgreen",
    text: "Светло-зеленый"
  },
  {
    color: "lightblue",
    text: "Светло-синий"
  },
  {
    color: "darkblue",
    text: "Темно-синий"
  },
  {
    color: "pink",
    text: "Розовый"
  }
]

export function TaskPage() {
  const [state, setState] = useState<string>("");

  const handleClick = (value: string) => () => {
    if (value === state) {
      setState("");
    } else {
      setState(value);
    }
  };

  const renderText = state ? <p>{state} &#128515;</p> : <p>&#128564;</p>;

  const colors = dataArray.map((element: Pick<IColorBox, "text" | "color">, index: number) => {
    return (
      <ColorBox
        key={index}
        text={element.text}
        color={element.color}
        activeColor={state}
        onClick={handleClick(element.text)}
      />
    )
  })

  return (
    <div className={s.container}>
      <h1 children={"Выберите цвет!"} />
      <div className={s.colors}>{colors}</div>
      <div className={s.text}>{renderText}</div>
    </div>
  );
}