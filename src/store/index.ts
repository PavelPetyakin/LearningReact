import { rootReducer } from "reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";


let mwModules = [thunk];


const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: false,
  diff: true,
});

mwModules = [...mwModules, logger];



const middleware = applyMiddleware(...mwModules);

// @ts-ignore
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, reduxDevTools(middleware));

export { store };
export type RootStore = ReturnType<typeof rootReducer>;
