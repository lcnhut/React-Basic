import { Button, Space, Spin, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animalApi } from "../../apis";
import { useGlobalData } from "../../components";

const PetPage = () => {
  const [petData, setPetData] = useState([]);

  const navigate = useNavigate();
  const { isLoading, setLoading } = useGlobalData();

  const getPetData = async () => {
    const response = await animalApi.getAll();
    if (response.data) {
      const dataFormatted = response.data.map((item) => {
        return {
          ...item,
          createdAt: moment(item.createdAt).format("DD/MM/YYYY"),
        };
      });
      setPetData(dataFormatted);
    }
  };

  //   Call API to get data
  useEffect(() => {
    getPetData();
  }, []);

  const handleClickRow = (id) => {
    navigate(`${id}`);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <a onClick={() => handleClickRow(record.id)}>{record.name}</a>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="danger">Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <Table
          dataSource={petData}
          columns={columns}
          style={{ marginTop: "50px" }}
        />
      )}
    </>
  );
};

export default PetPage;
