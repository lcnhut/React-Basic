import axios from "axios";
const API_URL = "https://hn.algolia.com/api/v1/search?query=";

export const searchApi = {
  search: (params) => {
    return axios
      .get(`${API_URL}${params}`)
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
