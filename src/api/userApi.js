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
            token:
              "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ",
            role: "admin",
            userName: user.email,
          });
        }, 3000);
      } else if (
        user.email === "admin@gmail.com" &&
        user.password !== "Admin@123"
      ) {
        setTimeout(() => {
          resolve({
            status: 403,
            message: "Password is invalid!!!",
          });
        }, 3000);
      } else if (
        user.email === "nhut@gmail.com" &&
        user.password === "Nhut@123"
      ) {
        setTimeout(() => {
          resolve({
            status: 200,
            token:
              "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImxlIGNoYW5oIG5odXQiLCJpYXQiOjE1MTYyMzkwMjJ9",
            role: "regular",
            userName: user.email,
          });
        }, 3000);
      } else if (
        user.email === "nhut@gmail.com" &&
        user.password !== "Nhut@123"
      ) {
        setTimeout(() => {
          resolve({
            status: 403,
            message: "Password is invalid!!!",
          });
        }, 3000);
      } else {
        setTimeout(() => {
          resolve({
            status: 403,
            message: "Account is not exist!!!",
          });
        }, 3000);
      }
    });
  },
};
