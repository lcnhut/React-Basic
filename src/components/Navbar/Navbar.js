import {
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu, Popconfirm } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const confirm = () => {
    navigate("/");
    window.localStorage.clear();
  };
  const cancel = (e) => {
    console.log(e);
  };

  const role = window.localStorage.getItem("userRole");

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key={"1"} icon={<HomeOutlined />}>
        <NavLink to="dashboard">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item icon={<TableOutlined />}>
        <NavLink to="pet">Pet</NavLink>
      </Menu.Item>
      {role === "admin" && (
        <Menu.Item icon={<SettingOutlined />}>
          <NavLink to="setting">Setting</NavLink>
        </Menu.Item>
      )}
      <Menu.Item icon={<LogoutOutlined />}>
        <Popconfirm
          title="Are you sure to logout?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Logout</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
