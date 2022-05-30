import React from "react";
import { useState } from "react";
import "./Login.scss";
import RegisterForm from "../../components/Register/RegisterForm";
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  const [isActiveForm, setActiveForm] = useState(true);

  const handleOnSwitchForm = () => {
    setActiveForm(!isActiveForm);
  };

  const handleOnSubmitForm = () => {
    console.log("Form submit: ");
  };

  return (
    <div className="login__page__container">
      <div className="login__page__wrapper">
        <div className="login__page__heading">
          <a href="#">Logdy</a>
          <div>
            <button
              onClick={handleOnSwitchForm}
              className={isActiveForm ? "active" : ""}
            >
              Login
            </button>
            <button
              onClick={handleOnSwitchForm}
              className={!isActiveForm ? "active" : ""}
            >
              Register
            </button>
          </div>
        </div>
        {isActiveForm ? (
          <LoginForm handleOnSubmitForm={handleOnSubmitForm} />
        ) : (
          <RegisterForm handleOnSubmitForm={handleOnSubmitForm} />
        )}
      </div>
    </div>
  );
};
export default Login;
