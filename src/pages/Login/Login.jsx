import React from "react";
import { useState } from "react";
import { LoginForm, RegisterForm, Loading } from "../../components";
import "./Login.scss";

const Login = () => {
  const [isActiveForm, setActiveForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSwitchForm = () => {
    setActiveForm(!isActiveForm);
  };

  const handleOnSubmitRegisterForm = () => {
    setIsLoading(true);
    console.log("loading");

    setTimeout(() => {
      setIsLoading(false);
      setActiveForm(!isActiveForm);
    }, 5000);
  };

  const handleOnSubmitLoginForm = () => {
    setIsLoading(true);
    console.log("loading");

    setTimeout(() => {
      setIsLoading(false);
      alert("Login successfully!!!");
    }, 5000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
              <LoginForm handleOnSubmitLoginForm={handleOnSubmitLoginForm} />
            ) : (
              <RegisterForm
                handleOnSubmitRegisterForm={handleOnSubmitRegisterForm}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
