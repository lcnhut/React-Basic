import "./Dashboard.scss";

const Dashboard = () => {
  const user = window.localStorage.getItem("userName");

  return (
    <div className="dashboard__container">
      <div>
        <h2>Welcome back {user}!!!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
