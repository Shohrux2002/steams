import { applyMiddleware, compose, createStore } from "redux";
import { allReducers, initialState } from "./reducers/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware())
);
export default store;
