import React from "react";
import GoogleAuthContainer from "../containers/GoogleAuthContainer";

import RegisterPopupContainer from "./../containers/registerPopup";
// import FacebookAuth from "./FacebookAuth";

const Header = () => {
  return (
    <>
      <div className="ui pointing menu container">
        <a className="item">Streamer</a>

        <div className="right menu">
          <a className="item">Stremer</a>
          <a className="item"> </a>
        </div>

        {/* <RegisterPopupContainer   /> */}
      </div>
    </>
  );
};
export default Header;
