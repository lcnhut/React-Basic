import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/User/UserPage";
import { useGlobalData } from "./components/GlobalProvider/GlobalDataProvider";
import Toast from "./components/Toast/Toast";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const { isNotify, toastProperties } = useGlobalData();
  const [isShowNoti, setIsShowNoti] = useState(isNotify);

  useEffect(() => {
    setIsShowNoti(isNotify);
  }, [isNotify]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
      </Routes>

      {isShowNoti && (
        <Toast
          toast={toastProperties}
          position="top-right"
          autoDelete={true}
          autoDeleteTime={3000}
        />
      )}
    </div>
  );
}

export default App;
