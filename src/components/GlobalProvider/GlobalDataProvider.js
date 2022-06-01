import React, { useContext, useState } from "react";
import { userApi } from "../../apis";
import checkIcon from "../../assets/check.svg";
import errorIcon from "../../assets/error.svg";
import infoIcon from "../../assets/info.svg";
import warningIcon from "../../assets/warning.svg";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [toastProperties, setToastProperties] = useState({});

  const register = async () => {
    setIsLoading(true);
    setIsNotify(false);
    const response = await userApi.register();
    if (response.status === 200) {
      setIsLoading(false);
      return;
    }
  };

  const login = async () => {
    setIsLoading(true);
    const response = await userApi.login();
    if (response.status === 200) {
      setIsLoading(false);
      return response.userId;
    }
  };

  const notifyMessage = {
    success: (title, description) => {
      setIsNotify(false);
      setToastProperties({
        id: Math.floor(Math.random() * 101 + 1),
        title: title,
        description: description,
        backgroundColor: "#5cb85c",
        icon: checkIcon,
      });
      setIsNotify(true);
    },
    error: (title, description) => {
      setToastProperties({
        id: Math.floor(Math.random() * 101 + 1),
        title: title,
        description: description,
        backgroundColor: "#d9534f",
        icon: errorIcon,
      });
      setIsNotify(true);
    },
    info: (title, description) => {
      setToastProperties({
        id: Math.floor(Math.random() * 101 + 1),
        title: title,
        description: description,
        backgroundColor: "#5bc0de",
        icon: infoIcon,
      });
      setIsNotify(true);
    },
    warn: (title, description) => {
      setToastProperties({
        id: Math.floor(Math.random() * 101 + 1),
        title: title,
        description: description,
        backgroundColor: "#f0ad4e",
        icon: warningIcon,
      });
      setIsNotify(true);
    },
  };

  const providerValues = {
    isLoading,
    isNotify,
    toastProperties,
    notifyMessage,
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
