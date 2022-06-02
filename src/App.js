import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGlobalData } from "./components";
import { LoginPage, Dashboard, SettingPage, NotFoundPage } from "./pages";
import { ProtectedRoute, Toast } from "./components";
import "./App.scss";

function App() {
  const { isNotify, toastProperties } = useGlobalData();
  const [isShowNoti, setIsShowNoti] = useState(isNotify);

  const role = window.localStorage.getItem("userRole");

  useEffect(() => {
    setIsShowNoti(isNotify);
  }, [isNotify]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          {role === "admin" ? (
            <>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="setting" element={<SettingPage />} />
            </>
          ) : (
            <Route path="dashboard" element={<Dashboard />} />
          )}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
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
