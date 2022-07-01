import { reduxForm } from "redux-form";
import StreamCreate from "../components/spteams/StreamCreate";
import { connect } from "react-redux";
const getMyState = (state) => {
  return state;
};
const StreamCreateContainer = reduxForm({ form: "streamCreate" })(StreamCreate);
export default StreamCreateContainer;
