import React, { useState } from "react";
import s from "./style.scss";
import { ColorBox, IColorBox } from "./components/colorBox/colorBox";
import { Button } from "./components/button/button";
import { Text } from "./components/text/text";

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
  const [state, setState] = useState<number | null>(null);

  const handleClick = (value: number) => () => {
    if (value === state) {
      setState(null);
    } else {
      setState(value);
    }
  };

  const colors = dataArray.map((element: Pick<IColorBox, "text" | "color">, index: number) => {
    return (
      <ColorBox
        key={index}
        text={element.text}
        color={element.color}
        activeColor={state === index}
        onClick={handleClick(index)}
      />
    )
  })

  const currentElement = state !== null ? dataArray[state] : null;

  return (
    <div className={s.container}>
      <h1 children={"Выберите цвет!"} />
      <div className={s.colors}>{colors}</div>
      <Text currentElement={currentElement} />
      {state !== null && <div className={s.buttons}>
        <Button name={"Предыдущий цвет"} buttonColor={dataArray[getPrevColor(dataArray, state)].color}
                onClickButton={() => setState(getPrevColor(dataArray, state))}/>
        <Button name={"Следующий цвет"} buttonColor={dataArray[getNextColor(dataArray, state)].color}
                onClickButton={() => setState(getNextColor(dataArray, state))}/>
      </div>}
    </div>
  );
}

function getNextColor(colors: Pick<IColorBox, "text" | "color">[], activeColor: number | null) {
  let index: number;
  if (activeColor !== null) {
    index = activeColor === colors.length - 1 ? 0 : activeColor + 1;
  } else {
    index = 0;
  }
  return index
}

function getPrevColor(colors: Pick<IColorBox, "text" | "color">[], activeColor: number | null) {
  let index: number;
  if (activeColor !== null) {
    index = activeColor === 0 ? colors.length - 1 : activeColor - 1;
  } else {
    index = colors.length - 1;
  }
  return index
}