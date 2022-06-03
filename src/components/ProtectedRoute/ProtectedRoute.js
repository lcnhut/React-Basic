import { Layout } from "antd";
import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./ProtectedRoute.scss";

const { Sider, Content } = Layout;

const ProtectedRoute = () => {
  const [collapsed, setCollapsed] = useState(false);

  const token = window.localStorage.getItem("userToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">LOGO</div>
          <Navbar />
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
};

export default ProtectedRoute;
