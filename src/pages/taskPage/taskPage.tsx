import { Icon } from "assets/svg";
import React, { useState } from "react";
import s from "./style.scss";

const array: string[] = [
  "Вовлечённость",
  "Интерес к содержанию работы Интерес к содержанию работы Интерес к содержанию работы "
]


export function TaskPage() {
  const [data, updateData] = useState<string[]>(array);
  const [num, setNam] = useState<number>(0);

  const handleIncrement = ()  => {
    setNam(num + 1);
  }

  const handleAdd = () => {
    const arr = [...data];
    arr.push("Привет");
    updateData(arr);
  }

  const deleteElement = (orderParam) => () => {
    const newArr = [...data];
    newArr.splice(orderParam, 1);
    updateData(newArr);
  }

  return (
    <div className={s.container}>
      <div className={s.submetric}>
        <div className={s.title}>
          <div className={s.text}>Увлечённость работой</div>
          <Icon.Cross className={s.cross}/>
        </div>
        <div className={s.list}>
          {data.map((item, i) => {
            console.log(i);
            return (
              <div className={s.frame} key={i}>
                <span>{item}</span>
                <Icon.Cross className={s.cross} onClick={deleteElement(i)}/>
              </div>
            )
          })}
        </div>
        <button className={s.button} onClick={handleAdd}>
          <Icon.Add className={s.add}/>
          <div>Добавить субметрику</div>
        </button>
        <button className={s.button} onClick={handleIncrement}>
          <div>Нажал на кнопку: {num}</div>
        </button>
      </div>
    </div>
  );
}