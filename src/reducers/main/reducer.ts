import { ActionType, createReducer } from "typesafe-actions";
import * as a from "./actions";
import { IMainStore, initialState } from "./types";

export const exportMainReducer = createReducer<IMainStore, ActionType<typeof a>>(initialState)
  .handleAction(a.menuIsOpen, (state, action) => {
    return {
      ...state,
      menuIsOpen: action.payload,
    };
  })
;