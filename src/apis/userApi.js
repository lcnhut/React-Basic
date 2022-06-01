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

  login: (user) => {
    return new Promise((resolve) => {
      if (user.email === "admin@gmail.com" && user.password === "Admin@123") {
        setTimeout(() => {
          resolve({
            status: 200,
            userId: "abc123",
          });
        }, 3000);
      } else if (
        user.email === "admin@gmail.com" &&
        user.password !== "Admin@123"
      ) {
        setTimeout(() => {
          resolve({
            status: 400,
            message: "Password is invalid!!!",
          });
        }, 3000);
      } else {
        setTimeout(() => {
          resolve({
            status: 500,
            message: "Account is not exist!!!",
          });
        }, 3000);
      }
    });
  },
};
