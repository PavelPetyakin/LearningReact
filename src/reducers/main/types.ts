// export interface IMainStore {
//   menuIsOpen: boolean
// }
//
// export const initialState: IMainStore = {
//   menuIsOpen: false
// };

import { Avatar } from "../../assets/jpg";
import { ICurrency, IElement, IUser } from "../../pages/welcomePage/components";

export interface IMainStore {
  count: number,
  valueDec: string,
  valueInc: string,
  darkMode: boolean,
  user: IUser,
  balanceInfo: IBalanceInfo,
}

export const initialState: IMainStore = {
  count: 0,
  valueDec: "-",
  valueInc: "+",
  darkMode: false,
  user: {
    name: "Ivanka Trampovna",
    avatarUrl: Avatar,
  },
  balanceInfo: {
    balance: 162.0,
    currencies: [
      {
        amount: 22,
        type: "Crypto",
      },
      {
        amount: 135,
        type: "Dollars",
      },
    ],
    recentOperations: [
      {
        title: "Grocery",
        description: "Treasure island mall",
        summary: 12,
      },
      {
        title: "Petrol",
        description: "Essar petrol pump",
        summary: 9,
      },
    ],
  },
};

interface IBalanceInfo {
  balance: number;
  currencies: ICurrency[];
  recentOperations: IElement[];
}

