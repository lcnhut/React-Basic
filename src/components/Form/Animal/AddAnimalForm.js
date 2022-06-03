import { Form, Input, InputNumber, Modal, Select } from "antd";
import React from "react";
const { Option } = Select;

const AddAnimalForm = (props) => {
  const [form] = Form.useForm();
  const { handleSubmitForm, visible, onCancel, confirmLoading } = props;

  const handleCancel = () => {
    onCancel();
  };

  const onFinish = (values) => {
    handleSubmitForm(values);
  };

  return (
    <Modal
      title="Add Animal Form"
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
      <Form form={form} name="control-hooks">
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
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddAnimalForm;
