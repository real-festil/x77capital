import React, { useEffect } from "react";
import { useState } from "react";
import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FormHelperText,
  TextField,
  ButtonBase,
  FormLabel,
} from "@material-ui/core";
import logo from "../images/icon/logo.svg";
import { Link } from "react-router-dom";
import { authUser, AuthModel, newUser } from "../common/Inquiries/User";
import useFetch from "use-http";
import { API_URL } from "../evn";

interface EntranceProps {
  typePage: "login" | "registration";
}
interface FormValues extends AuthModel {
  confirmPassword?: string | number;
  recaptcha: string;
  error?: string;
}

const Entrance: React.FC<EntranceProps> = (props) => {
  const [values] = useState<FormValues>({
    login: "",
    password: "",
    confirmPassword: "",
    recaptcha: "",
  });

  const hookFetchData = useFetch(API_URL);

  const authorization = ({ login, password }: AuthModel) => {
    const fetchData = async () => {
      const res = await authUser({ login, password }, hookFetchData);
    };
    fetchData();
  };

  const registration = (values: any) => {
    const fetchData = async () => {
      const res = await newUser(values, hookFetchData);
    };
    fetchData();
  };

  const onChange = (value: any) => {
    console.log("Captcha value:", value);
  };

  const validations = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.login) {
      errors.login = "Invalid username ";
      errors.error = "Invalid username and/or password";
    }

    if (!values.password) {
      errors.password = "Invalid  password";
      errors.error = "Invalid username and/or password";
    }

    if (props.typePage === "registration") {
      if (
        !values.confirmPassword ||
        values.confirmPassword !== values.password
      ) {
        errors.confirmPassword = "Invalid  confirm password";
        errors.error = "Invalid username and/or password";
      }
    }

    return errors;
  };

  return (
    <div className="form-container">
      <Link to="/" className="logo">
        <img src={logo} alt="logo__icon" />
      </Link>
      <h2 className="heading">
        {props.typePage === "login" ? "Log In" : "Sign In"}
      </h2>

      <Formik
        initialValues={values}
        validate={validations}
        onSubmit={(values) =>
          props.typePage === "login"
            ? authorization(values)
            : registration(values)
        }
      >
        {({ errors, touched }) => (
          <Form className="form-container__form">
            <Field name="login">
              {({ field, form: { touched, errors } }: FieldProps) => (
                <div className="input-container">
                  <FormLabel className="input-container__label">
                    Login
                  </FormLabel>
                  <TextField
                    {...field}
                    type="login"
                    id="outlined-error"
                    className="input-container__input"
                    variant="outlined"
                    error={touched.login && !!errors.login}
                    placeholder="Username*"
                  />
                </div>
              )}
            </Field>
            <Field name="password">
              {({ field, form: { touched, errors } }: FieldProps) => (
                <div className="input-container">
                  <FormLabel className="input-container__label">
                    Password
                  </FormLabel>
                  <TextField
                    {...field}
                    id="outlined-error"
                    className="input-container__input"
                    variant="outlined"
                    error={touched.password && !!errors.password}
                    type="password"
                    placeholder="Password*"
                  />
                </div>
              )}
            </Field>
            {props.typePage === "registration" && (
              <Field name="confirmPassword">
                {({ field, form: { touched, errors } }: FieldProps) => (
                  <div className="input-container">
                    <FormLabel className="input-container__label">
                      Confirm Password
                    </FormLabel>
                    <TextField
                      {...field}
                      id="outlined-error"
                      className="input-container__input"
                      variant="outlined"
                      error={
                        touched.confirmPassword && !!errors.confirmPassword
                      }
                      type="password"
                      placeholder="Confirm Password*"
                    />
                  </div>
                )}
              </Field>
            )}

            <Field name="recaptcha">
              {() => (
                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                  />
                </div>
              )}
            </Field>

            <ButtonBase type="submit" className="button-continuum">
              <span className="button-continuum__text">
                {props.typePage === "login" ? "Log In" : "Sign In"}
              </span>
            </ButtonBase>
            <FormHelperText className="text-helper" error={true}>
              {errors.error}
            </FormHelperText>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Entrance;
