import React, { useContext, useState } from "react";
import { userApi } from "../../apis";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [toastProperties, setToastProperties] = useState({});

  const register = async () => {
    setIsLoading(true);
    const response = await userApi.register();
    if (response.status === 200) {
      setIsLoading(false);
    }
  };

  const login = async () => {
    setIsLoading(true);
    const response = await userApi.login();
    if (response.status === 200) {
      setIsLoading(false);
      setToastProperties({
        id: Math.floor(Math.random() * 101 + 1),
        title: "Success",
        description: "Login successfully!!!",
        backgroundColor: "#5cb85c",
        icon: checkIcon,
      });
      return response.userId;
    }
  };

  const providerValues = {
    isLoading,
    toastProperties,
    register,
    login,
  };

  return (
    <GlobalDataContext.Provider value={providerValues}>
      {props.children}
    </GlobalDataContext.Provider>
  );
}

function useGlobalData() {
  return useContext(GlobalDataContext);
}

export default GlobalDataContext;
export { GlobalDataProvider, useGlobalData };
