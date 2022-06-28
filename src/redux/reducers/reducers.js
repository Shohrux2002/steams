import { SIGN_IN, SIGN_OUT } from "../actions/actions";

export const initialState = {
  kirganmi: null,
};
export const reducers = (state = initialState, action) => {
  if (action.type === SIGN_IN) {
    console.log("sign");
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
  }
  return state;
};
