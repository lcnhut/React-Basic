import { AutoComplete, Input, List, Space, Typography, Button } from "antd";
import { useState } from "react";
import { searchApi } from "../../api";
import "./Dashboard.scss";

const _ = require("lodash");
const { Title, Text } = Typography;

const Dashboard = () => {
  const user = window.localStorage.getItem("userName");
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  const search = _.debounce(async (e) => {
    const response = await searchApi.search(e);
    setOptions(
      response.data.hits.map((item) => {
        return {
          label: item.title && item.title,
          value: item.title && item.title,
        };
      })
    );
  }, 500);

  const handleSearch = (value) => {
    if (value && value !== "") {
      search(value);
    } else {
      setOptions([]);
    }
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
    setSelectedValue([...selectedValue, value]);
  };

  const onClickDelete = (deleteIndex) => {
    const filterValue = selectedValue.filter(
      (item, index) => index !== deleteIndex
    );

    setSelectedValue(filterValue);
  };

  return (
    <div className="dashboard__container">
      <h2>Welcome back {user}!!!</h2>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
          display: "block",
          marginBottom: "20px",
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
      <Space direction="vertical">
        <Title level={5} style={{ display: "block" }}>
          Your selected:
        </Title>
        <List
          dataSource={selectedValue}
          renderItem={(item, index) => (
            <List.Item>
              <Text style={{ marginRight: "50px" }}>{item}</Text>
              <Button onClick={() => onClickDelete(index)}>X</Button>
            </List.Item>
          )}
        />
      </Space>
    </div>
  );
};

export default Dashboard;
