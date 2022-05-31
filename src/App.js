import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/User/UserPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
