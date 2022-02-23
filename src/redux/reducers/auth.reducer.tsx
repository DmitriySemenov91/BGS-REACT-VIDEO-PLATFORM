import AuthTypes from "../types/auth.types";

export const LOADING = "auth/LOADING";
export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";
export const REQUEST_ERROR = "auth/REQUEST_ERROR";

const userHydrate = (): object => {
  const user: string = localStorage.getItem("auth_user") || "{}";
  return JSON.parse(user);
};

const initialState: AuthTypes = {
  user: userHydrate(),
  errorMessage: null,
  isLoading: false,
  AuthorizationToken: {},
  User: {},
};

const AuthReducer = (state = initialState, action: any): AuthTypes => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case LOGIN:
      localStorage.setItem("auth_user", JSON.stringify(action.payload.data));
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.data.AuthorizationToken.Token)
      );
      return {
        ...state,
        user: action.payload.data,
        isLoading: false,
      };
    case LOGOUT:
      localStorage.removeItem("auth_user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        errorMessage: null,
        isLoading: false,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
