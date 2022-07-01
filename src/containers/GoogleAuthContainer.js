import { connect } from "react-redux";
import GoogleAuth from "../components/GoogleAuth";
import { signInAction, signOutAction } from "../redux/actions/actions";
const getMyState = (state) => {
  return state.red;
};

const GoogleAuthContainer = connect(getMyState, {
  signInAction,
  signOutAction,
})(GoogleAuth);
export default GoogleAuthContainer;
