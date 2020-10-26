import React, { SyntheticEvent } from "react";
import s from "./style.scss";

interface IPropsInput {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export function Input(props: IPropsInput) {
  const { value, onChange, placeholder = "" } = props;
  const onChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return(
  <input className={s.input} value={value} placeholder={placeholder} onChange={onChangeHandler} />
)
}
