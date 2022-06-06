import { Button, Popconfirm } from "antd";

const ButtonDelete = ({ handleOnConfirm }) => {
  const confirm = () => {
    handleOnConfirm();
  };

  const cancel = (e) => {
    console.log(e);
  };
  return (
    <Popconfirm
      title="Are you sure to delete this item?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Button type="danger" ghost>
        Delete
      </Button>
    </Popconfirm>
  );
};

export default ButtonDelete;
