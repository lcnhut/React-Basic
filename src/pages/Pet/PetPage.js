import { Button, message, Space, Spin, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animalApi } from "../../api";
import {
  useGlobalData,
  AddAnimalForm,
  EditAnimalForm,
  ButtonDelete,
} from "../../components";

const PetPage = () => {
  const [petData, setPetData] = useState([]);
  const { isLoading, setLoading } = useGlobalData();
  const [visibleAddForm, setVisibleAddForm] = useState(false);
  const [visibleEditForm, setVisibleEditForm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [animalData, setAnimalData] = useState({});

  const navigate = useNavigate();
  const role = window.localStorage.getItem("userRole");

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
      // setLoading(!isLoading);
    }
  };

  //   Call API to get data
  useEffect(() => {
    getPetData();
  }, [confirmLoading, visibleAddForm, visibleEditForm]);

  const handleClickRow = (id) => {
    navigate(`${id}`);
  };

  const handleOnDelete = async (animal) => {
    setConfirmLoading(true);
    const response = await animalApi.delete(animal.id);
    if (response.status === 200) {
      setConfirmLoading(false);
      message.success(`${animal.name} is deleted!!!`);
    }
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
      sorter: (a, b) => a.age - b.age,
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
      render: (_, record) =>
        role === "admin" && (
          <Space size="middle">
            <Button type="primary" onClick={() => handleOnClickEdit(record)}>
              Edit
            </Button>
            <ButtonDelete handleOnConfirm={() => handleOnDelete(record)} />
          </Space>
        ),
    },
  ];

  const showModalAddForm = () => {
    setVisibleAddForm(true);
  };

  const onCancelAddForm = () => {
    setVisibleAddForm(false);
  };

  const handleSubmitAddForm = async (values) => {
    setConfirmLoading(true);
    const response = await animalApi.add(values);
    if (response.status === 201) {
      setConfirmLoading(false);
      setVisibleAddForm(false);
      message.success("A new animal is added!!!");
    }
  };

  const handleOnClickEdit = (data) => {
    setAnimalData(data);
    setVisibleEditForm(true);
  };

  const onCloseEditForm = () => {
    setVisibleEditForm(false);
  };

  const handleOnSubmitEditForm = async (values) => {
    setConfirmLoading(true);
    const response = await animalApi.edit(values);
    if (response.status === 200) {
      setConfirmLoading(false);
      setVisibleEditForm(false);
      message.success(`${values.name} is updated!!!`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <div style={{ marginTop: "70px" }}>
          <AddAnimalForm
            handleSubmitForm={handleSubmitAddForm}
            showModal={showModalAddForm}
            visible={visibleAddForm}
            confirmLoading={confirmLoading}
            onCancel={onCancelAddForm}
          />
          <EditAnimalForm
            handleSubmitForm={handleOnSubmitEditForm}
            showModal={handleOnClickEdit}
            visible={visibleEditForm}
            confirmLoading={confirmLoading}
            onCancel={onCloseEditForm}
            animalData={animalData}
          />

          <Table
            dataSource={petData}
            columns={columns}
            style={{ marginTop: "20px" }}
          />
          {role === "admin" && (
            <Button
              type="primary"
              onClick={showModalAddForm}
              style={{ width: "100%" }}
            >
              Add new animal
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default PetPage;
