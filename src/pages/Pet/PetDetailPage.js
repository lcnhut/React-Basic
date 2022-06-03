import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { animalApi } from "../../api";
import { PageHeader, Descriptions } from "antd";
import moment from "moment";

const PetDetailPage = () => {
  const [petDetailData, setPetDetailData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const petId = params.id;

  const getData = async (petId) => {
    const response = await animalApi.getById(petId);
    if (response.data) {
      const dataFormatted = {
        ...response.data,
        createdAt: moment(response.data.createdAt).format("DD/MM/YYYY"),
      };
      setPetDetailData(dataFormatted);
    }
  };

  useEffect(() => {
    getData(petId);
  }, []);

  return (
    <div
      className="site-page-header-ghost-wrapper"
      style={{ padding: "24px", backgroundColor: "#f5f5f5" }}
    >
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Pet Information"
        subTitle={petDetailData.name}
      >
        <Descriptions size="small" column={2}>
          <Descriptions.Item label="Name">
            {petDetailData.name}
          </Descriptions.Item>
          <Descriptions.Item label="Type">
            {petDetailData.type}
          </Descriptions.Item>
          <Descriptions.Item label="Age">{petDetailData.age}</Descriptions.Item>
          <Descriptions.Item label="Created At">
            {petDetailData.createdAt}
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
};

export default PetDetailPage;
