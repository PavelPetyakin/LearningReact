import { ActionType, createReducer } from "typesafe-actions";
import * as a from "./actions";
import { initialState, IMainStore } from "./types";

export const exportMainReducer = createReducer<IMainStore, ActionType<typeof a>>(initialState)
  .handleAction(a.menuIsOpen, (state, action) => {
    return {
      ...state,
      menuIsOpen: action.payload,
    };
  })
;
