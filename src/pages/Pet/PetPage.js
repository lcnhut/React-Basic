import { Button, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { animalApi } from "../../apis";

const PetPage = () => {
  const [petData, setPetData] = useState([]);

  const getPetData = async () => {
    const response = await animalApi.getAll();
    setPetData(response.data);
  };

  //   Call API to get data
  useEffect(() => {
    getPetData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "id",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "id",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={petData} columns={columns} />;
};

export default PetPage;
