import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/User/UserPage";
import { useGlobalData } from "./components/GlobalProvider/GlobalDataProvider";
import Toast from "./components/Toast/Toast";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const globalData = useGlobalData();
  const { toastProperties } = globalData;
  const [isNotify, setIsNotify] = useState(globalData.isNotify);

  useEffect(() => {
    setIsNotify(globalData.isNotify);
  }, [globalData.isNotify]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
      </Routes>

      {isNotify && (
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
