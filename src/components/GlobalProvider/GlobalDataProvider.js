import React, { useContext, useState } from "react";
import { userApi } from "../../api";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    setIsLoading(true);
    const response = await userApi.register();
    if (response.status === 200) {
      setIsLoading(false);
      return;
    }
  };

  const login = async (user) => {
    setIsLoading(true);
    const response = await userApi.login(user);
    if (response.status === 200) {
      setIsLoading(false);
      window.localStorage.setItem("userToken", response.token);
      window.localStorage.setItem("userRole", response.role);
      window.localStorage.setItem("userName", response.userName);
      return {
        userId: response.token,
      };
    } else if (response.status === 403) {
      setIsLoading(false);
      return {
        message: response.message,
      };
    }
  };

  const setLoading = () => {
    setIsLoading(!isLoading);
  };

  const providerValues = {
    isLoading,
    register,
    login,
    setLoading,
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
