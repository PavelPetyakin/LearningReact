import { RootStore } from "store";


// export const getMenuIsOpen = (state: RootStore): boolean => state.main.menuIsOpen;

export const getCount = (state: RootStore): number => state.main.count;

export const getValue = (state: RootStore): any => {
  return {
    valueDec: state.main.valueDec,
    valueInc: state.main.valueInc,
  };
}

export const getDarkMode = (state: RootStore): boolean => state.main.darkMode;

export const getUserBalanceState = (state: RootStore): any => {
  return {
    user: state.main.user,
    balanceInfo: state.main.balanceInfo,
  }
}