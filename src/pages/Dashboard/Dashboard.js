import "./Dashboard.scss";

const Dashboard = () => {
  const user = window.localStorage.getItem("userName");

  return (
    <div className="dashboard__container">
      <h2>Welcome back {user}!!!</h2>
    </div>
  );
};

export default Dashboard;
