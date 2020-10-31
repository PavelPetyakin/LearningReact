import { createAction } from "typesafe-actions";

// export const menuIsOpen = createAction("$root/menuIsOpen")<boolean>();

export const setIncrement = () => ({type: "increment"});

export const setDecrement = () => ({type: "decrement"});

export const setValueInc = (e: string) => ({type: "inputInc",payload: e});

export const setValueDec = (e: string) => ({type: "inputDec",payload: e});

export const changeDarkMode = () => ({type: "darkMode"});

export const changeUserName = (value: string) => ({type: "userName", payload: value});