import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { FORM_DATA, SIGN_IN, SIGN_OUT } from "../actions/actions";

export const initialState = {
  // kirganmi: null,
  // users: {},
};
export const reducers = (state = initialState, action) => {
  if (action.type === SIGN_IN) {
    // console.log("sign");
    return {
      ...state,
      kirganmi: true,
    };
  } else if (action.type === SIGN_OUT) {
    console.log("signout");
    return {
      ...state,
      kirganmi: false,
    };
  } else if (action.type === FORM_DATA) {
    return { ...state, users: action.payload };
  }

  return state;
};
export const allReducers = combineReducers({
  form: formReducer,
  red: reducers,
});
