import { accountService } from "../../services/accountServices";

export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
export const FETCH_USER = "FETCH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const LOGIN = (list) => {
  return {
    type: LOGIN_ACCOUNT,
    payload: list,
  };
};
export const fetchUser = (list) => {
  return {
    type: FETCH_USER,
    payload: list,
  };
};
export const LogoutUser = (list) => {
    return {
      type: LOGOUT_USER,
      payload: list,
    };
  };

export function loginAccount(data, navigate) {
    return async (dispatch) => {
      const result = accountService.loginUser(data);
      await result
        .then((response) => {
            console.log("res",response.data);
            
          if (response.status === 200 || response.status === 201) {
            dispatch(LOGIN(response.data?.result));
            navigate("/")
            message.success("Đăng nhập thành công");
          } else if (response.status === 401) {
            // console.log('err',response);
            // message.error("Đăng nhập không thành công");
          }
        })
        .catch((error) => {
          message.error(error.response.data.message);
          // Xử lý lỗi nếu có
        });
    };
  }
  

  export function fetchUserByTokenApi(data, navigate) {
    return async (dispatch) => {
      try {
        const response = await accountService.fetchUserByToken(data);
        if (response.status === 200 || response.status === 201) {
            console.log("ress", response.data);
            
          dispatch(fetchUser(response.data?.result));
          return response; // Return the response so that .then can be used
        } else {
        //   message.error("Session hết hạn");
          navigate("/login");
          return Promise.reject("Session expired"); // Return rejection for error handling in .then
        }
      } catch (error) {
        // Handle the error if needed
        return Promise.reject(error); // Ensure the error is propagated to the .catch
      }
    };
  }

  export function Logout() {
    return async (dispatch) => {
      try {
        let data= {
            uid:''
        }
       dispatch(LogoutUser(data))
      } catch (error) {
        // Handle the error if needed
        return Promise.reject(error); // Ensure the error is propagated to the .catch
      }
    };
  }