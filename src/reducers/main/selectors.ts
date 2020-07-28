import { RootStore } from "store";


export const getMenuIsOpen = (state: RootStore): boolean => state.main.menuIsOpen;
