import { apiLogin } from "../../services/auth/";
import {
  LOADING,
  LOGIN,
  LOGOUT,
  REQUEST_ERROR,
} from "../reducers/auth.reducer";
import { AppDispatch } from "../utils/appDispatch";

const _LOGIN = (data: any[]) => ({
  type: LOGIN,
  payload: {
    data,
  },
});

const _LOGOUT = () => ({
  type: LOGOUT,
});

const _LOADING = () => ({
  type: LOADING,
});

const _REQUEST_ERROR = ({
  response: {
    data: { error = "Error" },
  },
}): any => ({
  type: REQUEST_ERROR,
  payload: {
    error,
  },
});

export const loginAction = (form: object) => (dispatch: AppDispatch) => {
  dispatch(_LOADING());
  // @ts-ignore
  apiLogin(form)
    .then((res: any) => dispatch(_LOGIN(res.data)))
    .catch((error) => dispatch(_REQUEST_ERROR(error)));
};

export const logoutAction = () => (dispatch: AppDispatch) => {
  dispatch(_LOGOUT());
};
