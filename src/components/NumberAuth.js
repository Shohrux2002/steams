import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import analytics from "./configs/faribase-config";
import { useState } from "react";

const NumberAuth = () => {
  const [phoneNumber, setNumber] = useState();
  const generateRekapch = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      },
      analytics
    );
  };
  const requestOTP = (e) => {
    console.log("salom");
    e.preventDefault();
    generateRekapch();
    let appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(analytics, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setNumber(e.target.value);
        }}
      />
      <button onClick={requestOTP}>sms</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};
export default NumberAuth;
