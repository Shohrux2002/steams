import analytics from "./configs/faribase-config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { GithubOutlined } from "@ant-design/icons";
import "../style.css";
const GitHubAuht = () => {
  const SocialMediaAuth = () => {
    const provider = new GithubAuthProvider();
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
        className="ui button github black w-100 "
        style={{ width: "100%" }}
        onClick={SocialMediaAuth}
      >
        <GithubOutlined /> Sign up with GitHub
      </button>
    </div>
  );
};
export default GitHubAuht;
