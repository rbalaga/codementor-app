import {
  LOGIN_FAILED,
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_REQUESTED,
  REGISTRATION_SUCCESS,
  LOGOUT_USER,
  CLEAR_MESSAGE
} from "./actions";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  success: false,
  status: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MESSAGE:
      return { ...initialState, status: "", success: false, loading: false };
    case LOGOUT_USER:
      localStorage.removeItem("AuthToken");
      return initialState;
    case LOGIN_REQUESTED:
      return { ...initialState, loading: true, status: "Authenticating..." };
    case LOGIN_SUCCESS:
      const { user, accessToken } = action.payload;
      localStorage.setItem("authToken", accessToken);
      return {
        ...state,
        user: { ...user, accessToken },
        isAuthenticated: true,
        loading: false,
        success: true,
        status: action.payload.status
      };
    case LOGIN_FAILED:
      return { ...initialState, status: action.payload.status };

    case REGISTRATION_REQUESTED:
      return {
        ...initialState,
        loading: true,
        status: "Registering..."
      };
    case REGISTRATION_SUCCESS:
      return {
        ...initialState,
        success: true,
        status: action.payload.status
      };
    case REGISTRATION_FAILED:
      return {
        ...initialState,
        status: action.payload.status
      };
    default:
      return { ...state };
  }
};

export default userReducer;
