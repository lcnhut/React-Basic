import React, { useState } from "react";
import Input from "../../Input";
import { useGlobalData } from "../../index.js";
import "../Form.scss";
import { Button } from "antd";

const LoginForm = (props) => {
  const { isLoading } = useGlobalData();

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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("This field is required");
    }
    if (password === "") {
      setPasswordError("This field is required");
    } else if (emailError === "" && passwordError === "") {
      handleOnSubmitLoginForm({
        email,
        password,
      });
    }
  };

  return (
    <form className="form__wrapper" onSubmit={(e) => handleSubmitForm(e)}>
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
          <Button
            loading={isLoading}
            className="submit__button"
            htmlType="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
