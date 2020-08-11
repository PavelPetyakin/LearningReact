import React, { useState } from "react";
import { Button } from "./components/button/button"
import { ColorRec, IColorRec } from "./components/colorRec/colorRec";
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
  const [activeColorState, setActiveColor] = useState<number | null>(null);

  const handle = (newColor: number) => () => {
    if (newColor === activeColorState) {
      setActiveColor(null);
    } else {
      setActiveColor(newColor);
    }
  }

  const renderText = activeColorState !== null ?
    <p>{array[activeColorState].text} &#128515;</p> :
    <p>&#128564;</p>;

  const colorRecs = array.map((el,index) => {
    return (
      <ColorRec
        key={index}
        text={el.text}
        color={el.color}
        activeColor={activeColorState === index}
        onClickColor={handle(index)}
      />
    )
  })

  return (
    <div className={s.container} >
      <h1>Выбирети цвет</h1>
      <div className={s.row}>{colorRecs}</div>
      <div className={s.text}>{renderText}</div>
      <div className={s.buttons}>
        <Button text={"prev color"} onClickButton={() => setActiveColor(getPrevColor(array, activeColorState))} colorBorder={array[getPrevColor(array, activeColorState)].color}/>
        <Button text={"next color"} onClickButton={() => setActiveColor(getNextColor(array, activeColorState))} colorBorder={array[getNextColor(array, activeColorState)].color}/>
      </div>
    </div>
  );
}

function getNextColor(colors, activeColor) {
  let index: number;
  if (activeColor !== null) {
    index = activeColor === colors.length - 1 ? 0 : activeColor + 1;
  } else {
    index = 0;
  }
  return index;

}

function getPrevColor(colors, activeColor) {
  let index: number;
  if (activeColor !== null) {
    index = activeColor === 0 ? colors.length - 1 : activeColor - 1;
  } else {
    index = colors.length - 1;
  }
  return index;

}