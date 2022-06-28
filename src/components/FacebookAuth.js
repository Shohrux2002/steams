// import { facebookProvider } from "./configs/AuthMethod";
import analytics from "./configs/faribase-config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { FacebookOutlined } from "@ant-design/icons";
import "../style.css";

const FacebookAuht = () => {
  const SocialMediaAuth = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(analytics, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button
        className="ui button google blue w-100 "
        style={{ width: "100%" }}
        onClick={SocialMediaAuth}
      >
        <FacebookOutlined className="facebook-icon" /> Sign up with Facebook
      </button>
    </div>
  );
};
export default FacebookAuht;
