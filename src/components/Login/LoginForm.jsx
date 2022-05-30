import React, { useState } from "react";
import "./LoginForm.scss";

const LoginForm = (props) => {
  const { handleOnSubmitForm } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnBlurEmail = () => {
    if (email === "") {
      setEmailError("This field is required");
    } else if (!email.match(emailRegex)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleOnBlurPassword = () => {
    if (password === "") {
      setPasswordError("This field is required");
    } else if (!password.match(passwordRegex)) {
      setPasswordError(
        "Password must contain a lowercase letter, a uppercase letter, a number, minimum 8 character"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmitForm = () => {
    if (email === "") {
      setEmailError("This field is required");
    }
    if (password === "") {
      setPasswordError("This field is required");
    } else {
      alert("Login Successfully!!!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login__wrapper">
      <div className="login__content">
        <div className="login__content__heading">
          <h1>Welcome back!</h1>
          <h3>SIGN INTO YOUR ACCOUNT</h3>
        </div>
        <div className="login__content__body">
          <div className="input__field">
            <label htmlFor="">Email address</label>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => handleOnChangeEmail(e)}
              onBlur={handleOnBlurEmail}
            />
            <span className="error__message">{emailError}</span>
          </div>
          <div className="input__field">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleOnChangePassword(e)}
              onBlur={handleOnBlurPassword}
            />
            <span className="error__message">{passwordError}</span>
          </div>

          <button className="submit__button" onClick={handleSubmitForm}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
