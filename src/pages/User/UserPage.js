import { useNavigate } from "react-router-dom";

import "./UserPage.scss";
const UserPage = () => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    navigate("/");
  };

  return (
    <div className="user__container">
      <div>
        <h2>Welcome back Le Chanh Nhut!!!</h2>
      </div>

      <button className="button" onClick={onClickLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
