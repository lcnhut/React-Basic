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

  getById: (animalId) => {
    return axios
      .get(`${API_URL}/${animalId}`)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  add: (animal) => {
    return axios
      .post(API_URL, {
        name: animal.name,
        type: animal.type,
        age: animal.age,
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  edit: (animal) => {
    return axios
      .put(`${API_URL}/${animal.id}`, {
        name: animal.name,
        type: animal.type,
        age: animal.age,
      })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },

  delete: (animalId) => {
    return axios
      .delete(`${API_URL}/${animalId}`)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
