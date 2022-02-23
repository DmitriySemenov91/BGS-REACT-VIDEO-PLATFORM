import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import BlankTemplate from "src/components/commons/BlankTemplate";
import Loading from "src/components/commons/Loading";
import { loginAction } from "src/redux/actions/auth.actions";
import { AppTypes } from "src/redux/types/app.types";
import AuthTypes from "src/redux/types/auth.types";
import { globalDispatch } from "src/redux/utils/globalDispatch";

const Login = () => {
  const { isLoading, errorMessage }: AuthTypes = useSelector(
    (state: AppTypes) => state.auth
  );

  const handleValidation = () => {
    return Yup.object().shape({
      username: Yup.string().required("This field is required!"),
      password: Yup.string().required("This field is required!").min(7),
    });
  };

  const handleLogin = (formValue: object) => {
    globalDispatch(loginAction(formValue));
  };

  const initialValues = { username: "", password: "" };

  return (
    <BlankTemplate>
      <>
        <div className="wrapper-login">
          <h1>Login</h1>

          <div className="form">
            <Formik
              initialValues={initialValues}
              validationSchema={handleValidation}
              onSubmit={handleLogin}
            >
              <Form>
                <div className="form-group">
                  <label>username</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="badge bg-warning text-dark"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <span className="forget-password">Forget password?</span>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="badge bg-warning text-dark"
                  />
                </div>

                {errorMessage && (
                  <div className="form-group">
                    <div className="alert-error">{errorMessage}</div>
                  </div>
                )}

                <button type="submit" className="btn-blue" disabled={isLoading}>
                  <span>Login</span>
                </button>
                {isLoading && <Loading title="Checking" />}
              </Form>
            </Formik>
          </div>
        </div>
      </>
    </BlankTemplate>
  );
};

export default Login;
