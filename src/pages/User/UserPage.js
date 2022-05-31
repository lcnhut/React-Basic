import Toast from "../../components/Toast/Toast";
import { useGlobalData } from "../../components/GlobalProvider/GlobalDataProvider";
import "./UserPage.scss";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
  const globalData = useGlobalData();
  const { toastProperties } = globalData;
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
      <Toast
        toast={toastProperties}
        position="top-right"
        autoDelete={true}
        autoDeleteTime={3000}
      />
    </div>
  );
};

export default UserPage;
