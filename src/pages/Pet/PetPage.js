import { Button, message, Space, Spin, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animalApi } from "../../api";
import { useGlobalData, AddAnimalForm } from "../../components";

const PetPage = () => {
  const [petData, setPetData] = useState([]);
  const { isLoading, setLoading } = useGlobalData();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const navigate = useNavigate();

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

  const showModal = () => {
    setVisible(true);
  };

  const onCancel = () => {
    setVisible(false);
  };

  const handleSubmitForm = async (values) => {
    setConfirmLoading(true);
    const response = await animalApi.add(values);
    if (response.status === 201) {
      setConfirmLoading(false);
      setVisible(false);
      message.success("A new animal is added!!!");
    }
  };

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div style={{ marginTop: "70px" }}>
          <AddAnimalForm
            handleSubmitForm={handleSubmitForm}
            showModal={showModal}
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
          />
          <Table
            dataSource={petData}
            columns={columns}
            style={{ marginTop: "20px" }}
          />
          <Button type="primary" onClick={showModal} style={{ width: "100%" }}>
            Add new animal
          </Button>
        </div>
      )}
    </>
  );
};

export default PetPage;
