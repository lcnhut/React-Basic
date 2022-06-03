import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components";
import {
  Dashboard,
  LoginPage,
  NotFoundPage,
  PetPage,
  SettingPage,
} from "./pages";
import "./App.scss";

function App() {
  const role = window.localStorage.getItem("userRole");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          {role === "admin" && (
            <Route path="setting" element={<SettingPage />} />
          )}
          <Route path="pet" element={<PetPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
