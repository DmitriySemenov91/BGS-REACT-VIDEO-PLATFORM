import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthTypes from "../../redux/types/auth.types";
import { AppTypes } from "../../redux/types/app.types";
import axios from "../../services/https";

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const { user }: AuthTypes = useSelector((state: AppTypes) => state.auth);
  const { User, AuthorizationToken } = user || {};
  if (AuthorizationToken)
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${AuthorizationToken.Token}`;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          User?.Id ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    </>
  );
};

export default AuthRoute;
