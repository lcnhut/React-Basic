import React, { useContext, useState } from "react";
import { userApi } from "../../apis";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [isLoading, setIsLoading] = useState(false);

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
      return response.userId;
    }
  };

  const providerValues = {
    isLoading,
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
