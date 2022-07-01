export const SIGN_IN = "signin/action";
export const SIGN_OUT = "signout/action";
export const USER_DATE = "user/data";
export const FORM_DATA = "form/data";
export const signInAction = () => {
  return {
    type: SIGN_IN,
  };
};
export const signOutAction = () => {
  return {
    type: SIGN_OUT,
  };
};
export const userDateAction = (name, email) => {
  return {
    type: SIGN_OUT,
  };
};

export const formDataAction = (email, name) => {
  return {
    type: FORM_DATA,
    payload: {
      username: name,
      useremail: email,
    },
  };
};
