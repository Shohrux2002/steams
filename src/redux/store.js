import { createStore } from "redux";
import { initialState, reducers } from "./reducers/reducers";

const store = createStore(reducers, initialState);
export default store;
