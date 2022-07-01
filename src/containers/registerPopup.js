import { connect } from "react-redux";
import RegisterPopup from "../components/RegiterPopup";
import { formDataAction } from "../redux/actions/actions";

const getMyState = (state) => {
  return state;
};

const RegisterPopupContainer = connect(getMyState, { formDataAction })(
  RegisterPopup
);
export default RegisterPopupContainer;
