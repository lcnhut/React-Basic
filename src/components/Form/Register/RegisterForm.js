import React, { useState } from "react";
import Input from "../../Input";
import { Button } from "antd";
import "../Form.scss";
import { useGlobalData } from "../../index.js";

const RegisterForm = (props) => {
  const { isLoading } = useGlobalData();

  const { handleOnSubmitRegisterForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOnBlurName = () => {
    if (name === "") {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
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

  const handleOnBlurConfirmPassword = () => {
    if (confirmPassword === "") {
      setConfirmPasswordError("This field is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password did not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError("This field is required");
    }
    if (email === "") {
      setEmailError("This field is required");
    }
    if (password === "") {
      setPasswordError("This field is required");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("This field is required");
    } else if (
      nameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === ""
    ) {
      handleOnSubmitRegisterForm();
    }
  };
  return (
    <form className="form__wrapper" onSubmit={(e) => handleSubmitForm(e)}>
      <div className="form__content">
        <div className="form__content__heading">
          <h1>Welcome!</h1>
          <h3>create an account</h3>
        </div>
        <div className="form__content__body">
          <Input
            label="Full Name"
            value={name}
            placeholder="Full name"
            type="text"
            onChange={handleOnChangeName}
            onBlur={handleOnBlurName}
            error={nameError}
          />
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
          <Input
            label="Confirm Password"
            value={confirmPassword}
            placeholder="Confirm Password"
            type="password"
            onChange={handleOnChangeConfirmPassword}
            onBlur={handleOnBlurConfirmPassword}
            error={confirmPasswordError}
          />
          {/* <button className="submit__button" type="submit">
            Register
          </button> */}
          <Button
            className="submit__button"
            loading={isLoading}
            htmlType="submit"
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
