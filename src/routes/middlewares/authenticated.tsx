import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AuthTypes from "../../redux/types/auth.types";
import { AppTypes } from "../../redux/types/app.types";

const Authenticated = ({ component: Component, ...rest }: any) => {
  const { user }: AuthTypes = useSelector((state: AppTypes) => state.auth);
  const { User } = user || {};

  return (
    <Route
      {...rest}
      render={(props) =>
        User?.Id ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default Authenticated;
