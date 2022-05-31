export const userApi = {
  register: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
        });
      }, 3000);
    });
  },

  login: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          userId: "abc123",
        });
      }, 3000);
    });
  },
};
