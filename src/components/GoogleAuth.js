import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "../style.css";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "413370428016-luuibqe989m11nlbraetgpo2t1jjeseu.apps.googleusercontent.com",
          plugin_name: "Twitch Clone",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.changeIsSignedIn(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.changeIsSignedIn);
        });
    });
  }
  changeIsSignedIn = (ar) => {
    console.log(ar);
    if (ar) {
      this.props.signInAction();
    } else if (!ar) {
      this.props.signOutAction();
    }
  };

  signInClick = () => {
    this.auth.signIn();
  };
  signOutClick = () => {
    this.auth.signOut();
  };

  renderHtml = () => {
    console.log(this.props);
    if (this.props.kirganmi === null) {
      return <div>Kuting...</div>;
    }
    if (this.props.kirganmi === true) {
      return (
        <div>
          <button onClick={this.signOutClick} className="ui button google red">
            <i className="ui google icon" />
            Sing Out
          </button>
          <div className=""></div>
          <img
            src={this.auth.currentUser.get().getBasicProfile().getImageUrl()}
          ></img>
          <h2>{this.auth.currentUser.get().getBasicProfile().getName()}</h2>
        </div>
      );
    }
    if (this.props.kirganmi === false) {
      return (
        <div>
          <button
            style={{ color: "#333", width: "100%" }}
            onClick={this.signInClick}
            className="ui button google white"
          >
            <GoogleOutlined /> Sing Up width Google
          </button>
        </div>
      );
    }
    return <></>;
  };
  render() {
    return <div>{this.renderHtml()}</div>;
  }
}
export default GoogleAuth;
