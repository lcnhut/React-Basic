import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm, RegisterForm, useGlobalData } from "../../components";
import { notification } from "antd";
import "./LoginPage.scss";

const LoginPage = () => {
  const { isLoading, register, login } = useGlobalData();

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
    await register();
    if (!isLoading) {
      handleOnSwitchToLogin();
      notification["success"]({
        message: "Success",
        description: "Register Successfully!!!",
      });
    }
  };

  const handleOnSubmitLoginForm = async (user) => {
    const data = await login(user);
    if (!isLoading && data.userId) {
      navigate("/dashboard");
      notification["success"]({
        message: "Success",
        description: "Login Successfully!!!",
      });
    } else if (!isLoading && data.message) {
      notification["error"]({
        message: "Notification Title",
        description: data.message,
      });
    }
  };

  return (
    <>
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
    </>
  );
};
export default LoginPage;
