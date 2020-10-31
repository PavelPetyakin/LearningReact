import { ActionType, createReducer } from "typesafe-actions";
import * as a from "./actions";
import { IMainStore, initialState } from "./types";

// export const exportMainReducer = createReducer<IMainStore, ActionType<typeof a>>(initialState)
//   .handleAction(a.menuIsOpen, (state, action) => {
//     return {
//       ...state,
//       menuIsOpen: action.payload,
//     };
//   })
// ;

export function exportMainReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1};
    case "decrement":
      return {...state, count: state.count - 1};
    case "inputInc":
      return {...state, valueInc: action.payload};
    case "inputDec":
      return {...state, valueDec: action.payload};
    case "darkMode":
      return {...state, darkMode: !state.darkMode};
    case "userName":
      return {...state, user: {...state.user, name: action.payload}};
    default:
      return state;
  }
}
