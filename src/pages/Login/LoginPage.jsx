import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, LoginForm, RegisterForm } from "../../components";
import { useGlobalData } from "../../components/GlobalProvider/GlobalDataProvider";
import "./LoginPage.scss";

const LoginPage = () => {
  const globalData = useGlobalData();
  const { isLoading, register, login } = globalData;

  const [isActiveForm, setActiveForm] = useState(true);
  const navigate = useNavigate();

  const handleOnSwitchForm = () => {
    setActiveForm(!isActiveForm);
  };

  const handleOnSubmitRegisterForm = () => {
    register();
    if (!isLoading) {
      setActiveForm(!isActiveForm);
    }
  };

  const handleOnSubmitLoginForm = async () => {
    const data = await login();
    if (!isLoading && data) {
      navigate(`/user/${data}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
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
export default LoginPage;
