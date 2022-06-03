import { Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useEffect } from "react";
const { Option } = Select;

const EditAnimalForm = (props) => {
  const [form] = Form.useForm();
  const { handleSubmitForm, visible, onCancel, confirmLoading, animalData } =
    props;

  useEffect(() => {
    form.setFieldsValue({
      name: animalData.name,
      type: animalData.type,
      age: animalData.age,
    });
  }, [animalData]);

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    const submitValues = {
      ...values,
      id: animalData.id,
    };
    handleSubmitForm(submitValues);
  };

  return (
    <Modal
      title="Edit Animal Form"
      visible={visible}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onFinish(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        name="control-hooks"
        initialValues={{
          name: animalData.name,
          age: animalData.age,
          type: animalData.type,
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="dog">dog</Option>
            <Option value="cat">cat</Option>
            <Option value="dinosaur">dinosaur</Option>
            <Option value="lion">lion</Option>
            <Option value="platypus">platypus</Option>
            <Option value="crocodile">crocodile</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditAnimalForm;
