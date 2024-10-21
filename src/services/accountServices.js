import { API } from "./api";

export const accountService = {
    loginUser(data) {
        return API.post("/Auth/sign-in", data);
      },
    registerUser(data) {
        return API.post("/Auth/customers", data);
      },
      fetchUserByToken(data) {
        return API.get("/Auth/FetchUserByToken", {
          params: {
            token: data
          },
        })
      }
    //   getRole() {
    //     return API.get("/roles");
    //   },
    //   fetchMe: (token) => {
    //     return API.get("/users/fetchMe", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //   },
}