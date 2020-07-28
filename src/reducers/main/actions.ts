import { createAction } from "typesafe-actions";

export const menuIsOpen = createAction("$root/menuIsOpen")<boolean>();
