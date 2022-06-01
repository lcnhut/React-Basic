import React, { useState } from "react";
import Input from "../../Input";
import "../Form.scss";

const LoginForm = (props) => {
  const { handleOnSubmitLoginForm } = props;
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
    } else if (email !== "" && password !== "") {
      setEmail("");
      setPassword("");
      handleOnSubmitLoginForm({
        email,
        password,
      });
    }
  };

  return (
    <div className="form__wrapper">
      <div className="form__content">
        <div className="form__content__heading">
          <h1>Welcome back!</h1>
          <h3>SIGN INTO YOUR ACCOUNT</h3>
        </div>
        <div className="form__content__body">
          <Input
            label="Email"
            value={email}
            placeholder="Email Address"
            type="text"
            onChange={handleOnChangeEmail}
            onBlur={handleOnBlurEmail}
            error={emailError}
          />
          <Input
            label="Password"
            value={password}
            placeholder="Password"
            type="password"
            onChange={handleOnChangePassword}
            onBlur={handleOnBlurPassword}
            error={passwordError}
          />
          <button className="submit__button" onClick={handleSubmitForm}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
