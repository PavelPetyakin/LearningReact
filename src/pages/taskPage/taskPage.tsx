import { Icon } from "assets/svg";
import React, { useState } from "react";
import { Button } from "../../components/buttons";
import { Size } from "../../components/buttons/button/button";
import { Input } from "../../components/input/input";
import { IOption, SelectBox } from "../../components/selectBox/selectBox";
import s from "./style.scss";

const array: string[] = ["Вовлечённость", "Интерес к содержанию работы"];
const options: IOption[] = [
  {
    id: 1,
    name: "Имя",
  },
  {
    id: 2,
    name: "Имя 2",
  },
  {
    id: 3,
    name: "Имя 3",
  },
];

export function TaskPage() {
  const [data, updateData] = useState<string[]>(array);
  const [value, setValue] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  const handleAdd = () => {
    const arr = [...data];
    arr.push("Привет");
    updateData(arr);
  };

  const deleteElement = (orderParam) => () => {
    const newArr = [...data];
    newArr.splice(orderParam, 1);
    updateData(newArr);
  };

  return (
    <div className={s.container}>
      <div className={s.submetric}>
        <div className={s.title}>
          <div className={s.text}>Увлечённость работой</div>
          <Icon.Cross className={s.cross} />
        </div>
        <div className={s.list}>
          {data.map((item, i) => {
            return (
              <div className={s.frame} key={i}>
                <span>{item}</span>
                <Icon.Cross className={s.cross} onClick={deleteElement(i)} />
              </div>
            );
          })}
        </div>
        <div className={s.buttons}>
          <Button name={"Кнопка"} size={Size.MEDIUM} onClick={handleAdd} Icon={Icon.Add}/>
          <Input value={value} onChange={(v) => setValue(v)}/>
          <SelectBox value={select} options={options} onClick={(v) => setSelect(v)}/>
        </div>
      </div>
    </div>
  );
}
