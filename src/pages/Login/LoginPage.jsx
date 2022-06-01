import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader, LoginForm, RegisterForm } from "../../components";
import { useGlobalData } from "../../components/GlobalProvider/GlobalDataProvider";
import "./LoginPage.scss";

const LoginPage = () => {
  const { isLoading, register, login, notification, showNoti, hideNoti } =
    useGlobalData();

  const [isActiveForm, setActiveForm] = useState(true);
  const navigate = useNavigate();

  const handleOnSwitchForm = () => {
    setActiveForm(!isActiveForm);
  };

  const handleOnSubmitRegisterForm = async () => {
    hideNoti();
    await register();
    if (!isLoading) {
      setActiveForm(!isActiveForm);
      notification.success("Success", "Register Successfully!!!");
      showNoti();
    }
  };

  const handleOnSubmitLoginForm = async (user) => {
    hideNoti();
    const data = await login(user);
    if (!isLoading && data.userId) {
      navigate(`/user/${data.userId}`);
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
