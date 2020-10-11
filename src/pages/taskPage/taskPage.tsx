import { Icon } from "assets/svg";
import cx from "classnames";
import React, { useState } from "react";
import {Switch} from "../../components/buttons";
import { initialState } from "../../reducers/main/types";
import s from "./style.scss";

const array: string[] = [
  "Вовлечённость",
  "Интерес к содержанию работы"
]


export function TaskPage() {
  const [data, updateData] = useState<string[]>(array);
  const [num, setNam] = useState<number>(0);
  const [check, setCheck] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [select, setSelect] = useState<string>("2");
  const [shutdown, setsShutdown] = useState<boolean>(false);

  const handleIncrement = ()  => {
    setNam(num + 1);
  }

  const handleAdd = () => {
    const arr = [...data];
    arr.push("Привет");
    updateData(arr);
  }

  const switchingOn = () => {
    setsShutdown(!shutdown);
  }

  const handleCheck = () => {
    setCheck(!check);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
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
            return (
              <div className={s.frame} key={i}>
                <span>{item}</span>
                <Icon.Cross className={s.cross} onClick={deleteElement(i)}/>
              </div>
            )
          })}
        </div>
        <div className={s.buttons}>
          <button className={s.button} onClick={handleAdd}>
          <Icon.Add className={s.add}/>
          <div>Добавить субметрику</div>
          </button>
          <div>
            <Switch isActive={shutdown} onClick={switchingOn}/>
          </div>
          <button className={s.button} onClick={handleIncrement}>
            <Icon.Add className={s.add}/>
          <div>Нажал на кнопку: {num}</div>
        </button>
        </div>
      </div>
    </div>
  );
}