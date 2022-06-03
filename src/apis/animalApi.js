import axios from "axios";
const API_URL = "https://629836b0f2decf5bb73d67d4.mockapi.io/animals";

export const animalApi = {
  getAll: () => {
    return axios
      .get(API_URL)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
