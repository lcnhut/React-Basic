import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animalApi } from "../../apis";
const PetDetailPage = () => {
  const [petDetailData, setPetDetailData] = useState({});
  const params = useParams();
  const petId = params.id;

  const getData = async (petId) => {
    const response = await animalApi.getById(petId);
    setPetDetailData(response.data);
  };

  useEffect(() => {
    getData(petId);
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>ID:{petDetailData.id}</h1>
      <h1>Name: {petDetailData.name}</h1>
      <h1>Type: {petDetailData.type}</h1>
      <h1>Age: {petDetailData.age}</h1>
    </div>
  );
};

export default PetDetailPage;
