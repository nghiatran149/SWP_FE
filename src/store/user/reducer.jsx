import { FETCH_USER, LOGIN_ACCOUNT, LOGOUT_USER } from "./action";

const initialState = {
  idCustomer: "",
  idOwner: "",
  token: "",
  username: "",
  avatar: "",
  uid: "",
  idEmployee: "",
  refreshToken: "",
  phoneNumber:'',
  email:"",
  address:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACCOUNT:
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("accessToken", action.payload.accessToken);
    //   localStorage.setItem("role", action.payload.roleName);
      // "Customer", "SalonOwner", "SalonEmployee"
      return {
        ...state,
        token: action.payload.accessToken,
        username:
          action.payload?.salonOwnerResponse?.fullName ||
          action.payload?.customerResponse?.fullName ||
          action.payload?.salonEmployeeResponse?.fullName,
        uid: action.payload.accountId,
        idOwner: action.payload?.salonOwnerResponse?.id,
        idCustomer: action.payload?.customerResponse?.id,
        idEmployee: action.payload?.salonEmployeeResponse?.id,
        refreshToken: action.payload.refreshToken,
      };

    case FETCH_USER:
      localStorage.setItem("role", action.payload.roleName);
      return {
        ...state,
        // token: action.payload.accessToken,
        username:
          action.payload?.fullName,
        avatar:
          action.payload?.salonOwnerResponse?.img ||
          action.payload?.customerResponse?.img ||
          action.payload?.salonEmployeeResponse?.img,
        uid: action.payload.id,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        address: action.payload.address
        // idOwner: action.payload?.salonOwnerResponse?.id,
        // idCustomer: action.payload?.customerResponse?.id,
        // idEmployee: action.payload?.salonEmployeeResponse?.id,
        // refreshToken: action.payload.refreshToken,
      };
      case LOGOUT_USER:
       
        return {
          ...state,
          username:
            action.payload?.fullName,
          avatar:
            action.payload?.salonOwnerResponse?.img ||
            action.payload?.customerResponse?.img ||
            action.payload?.salonEmployeeResponse?.img,
          uid: action.payload.uid,

        };

    default:
      return state;
  }
};

export default reducer;
