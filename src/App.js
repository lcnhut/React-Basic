import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/User/UserPage";
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
