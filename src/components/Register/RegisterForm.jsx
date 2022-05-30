import React, { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = (props) => {
  const { handleOnSubmitRegisterForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("password");

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

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmitForm = () => {
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
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      handleOnSubmitRegisterForm();
    }
  };
  return (
    <div className="register__wrapper">
      <div className="register__content">
        <div className="register__content__heading">
          <h1>Welcome!</h1>
          <h3>create an account</h3>
        </div>
        <div className="register__content__body">
          <div className="input__field">
            <label htmlFor="">Full name</label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => handleOnChangeName(e)}
              onBlur={handleOnBlurName}
            />
            <span className="error__message">{nameError}</span>
          </div>
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
            <div className="input__wrapper">
              <input
                type={passwordType}
                placeholder="Password"
                value={password}
                onChange={(e) => handleOnChangePassword(e)}
                onBlur={handleOnBlurPassword}
              />
              {passwordType === "password" ? (
                <i className="fas fa-eye-slash" onClick={togglePassword}></i>
              ) : (
                <i className="fas fa-eye" onClick={togglePassword}></i>
              )}
            </div>
            <span className="error__message">{passwordError}</span>
          </div>
          <div className="input__field">
            <label htmlFor="">Confirm password</label>
            <div className="input__wrapper">
              <input
                type={passwordType}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => handleOnChangeConfirmPassword(e)}
                onBlur={handleOnBlurConfirmPassword}
              />
              {passwordType === "password" ? (
                <i className="fas fa-eye-slash" onClick={togglePassword}></i>
              ) : (
                <i className="fas fa-eye" onClick={togglePassword}></i>
              )}
            </div>
            <span className="error__message">{confirmPasswordError}</span>
          </div>
          <button className="submit__button" onClick={handleSubmitForm}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
