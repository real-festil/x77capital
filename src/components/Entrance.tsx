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
import { authUser } from "../common/Inquiries/User";
import useFetch from "use-http";
import { API_URL } from "../evn";

interface EntranceProps {}
interface FormValues {
  login: string;
  password: string | number;
  confirmPassword?: string | number;
  recaptcha: string;
  error?: string;
}

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

  return errors;
};

const Entrance: React.FC<EntranceProps> = () => {
  const hookFetchData = useFetch(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      const res = await authUser(hookFetchData);
      console.log("res", res);
    };
    fetchData();
  }, []);

  const [values, setValues] = useState<FormValues>({
    login: "",
    password: "",
    recaptcha: "",
  });

  const onChange = (value: any) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="form-container">
      <Link to="/" className="logo">
        <img src={logo} alt="logo__icon" />
      </Link>
      <h2 className="heading">Log In</h2>

      <Formik
        initialValues={values}
        validate={validations}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
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
              <span className="button-continuum__text">Sign in</span>
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
