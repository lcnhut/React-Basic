import {
  HomeOutlined,
  LogoutOutlined,
  SettingOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Menu, Popconfirm } from "antd";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const url = pathname.slice(1);

  const handleActiveItem = (value) => {
    switch (value) {
      case "pet":
        window.localStorage.setItem("activeSidebar", "2");
        break;
      case "setting":
        window.localStorage.setItem("activeSidebar", "3");

        break;
      default:
        window.localStorage.setItem("activeSidebar", "1");
        break;
    }
  };
  handleActiveItem(url);

  const activeItem = window.localStorage.getItem("activeSidebar");

  const confirm = () => {
    navigate("/");
    window.localStorage.clear();
  };
  const cancel = (e) => {
    console.log(e);
  };

  const role = window.localStorage.getItem("userRole");

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[activeItem.toString()]}
    >
      <Menu.Item key={"1"} icon={<HomeOutlined />}>
        <NavLink to="dashboard">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key={"2"} icon={<TableOutlined />}>
        <NavLink to="pet">Pet</NavLink>
      </Menu.Item>
      {role === "admin" && (
        <Menu.Item key={"3"} icon={<SettingOutlined />}>
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
