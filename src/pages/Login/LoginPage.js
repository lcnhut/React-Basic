import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Loader,
  LoginForm,
  RegisterForm,
  useGlobalData,
} from "../../components";
import "./LoginPage.scss";

const LoginPage = () => {
  const { isLoading, register, login, notification, showNoti, hideNoti } =
    useGlobalData();

  const [isActiveLoginForm, setIsActiveLoginForm] = useState(true);
  const [isActiveRegisterForm, setIsActiveRegisterForm] = useState(false);
  const navigate = useNavigate();

  const handleOnSwitchToLogin = () => {
    setIsActiveLoginForm(true);
    setIsActiveRegisterForm(false);
  };

  const handleOnSwitchToRegister = () => {
    setIsActiveLoginForm(false);
    setIsActiveRegisterForm(true);
  };

  const handleOnSubmitRegisterForm = async () => {
    hideNoti();
    await register();
    if (!isLoading) {
      handleOnSwitchToLogin();
      notification.success("Success", "Register Successfully!!!");
      showNoti();
    }
  };

  const handleOnSubmitLoginForm = async (user) => {
    hideNoti();
    const data = await login(user);
    if (!isLoading && data.userId) {
      navigate("/dashboard");
      notification.success("Success", "Login Successfully!!!");
      showNoti();
    } else if (!isLoading && data.message) {
      notification.error("Failure", data.message);
      showNoti();
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
                  onClick={handleOnSwitchToLogin}
                  className={isActiveLoginForm ? "active" : ""}
                >
                  Login
                </button>
                <button
                  onClick={handleOnSwitchToRegister}
                  className={isActiveRegisterForm ? "active" : ""}
                >
                  Register
                </button>
              </div>
            </div>
            {isActiveLoginForm ? (
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
