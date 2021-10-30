import React, {useEffect} from "react";
import {useState} from "react";
import {Field, FieldProps, Form, Formik, FormikErrors} from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import {
    FormHelperText,
    TextField,
    ButtonBase,
    FormLabel,
} from "@material-ui/core";
import logo from "../images/icon/logo.svg";
import {Link, useHistory} from "react-router-dom";
import {authUser, AuthModel, newUser} from "../common/Inquiries/User";
import {useGlobalState} from "../globalState";

interface EntranceProps {
    typePage: "login" | "registration";
}

interface FormValues extends AuthModel {
    confirmPassword?: string | number;
    recaptcha: string;
    error?: string;
}

const Entrance: React.FC<EntranceProps> = (props) => {
    const [, setLoginFollow] = useGlobalState("login");
    const [errorsFromServer, setErrorsFromServer] = useState("");
    const history = useHistory();

    const authorization = ({login, password}: AuthModel) => {
        const fetchData = async () => {
            const response = await authUser({login, password});
            console.log('response', response);

            if (response?.errors) {
                console.log('response errors', response.errors)
                setErrorsFromServer(response?.errors.non_field_errors[0])
            } else {
                localStorage.setItem('token', response.data.token.toString())
                setLoginFollow(response);
                history.push("/pages/profit-log");
            }
        };
        fetchData();
    };

    const registration = (values: AuthModel) => {
        const fetchData = async () => {
            const res = await newUser(values);
            console.log("res ", res);
            if (res.errors) {
                res.errors?.password && setErrorsFromServer(res.errors.password[0]);
                res.errors?.username && setErrorsFromServer(res.errors.username[0]);
            } else {
                setLoginFollow(true);
                history.push("/pages/profit-log");
            }
        };
        fetchData();
    };

    const onChange = (value: FormValues) => {
        console.log("Captcha value:", value);
    };

    const onSubmit = (values: FormValues) => {
        props.typePage === "login" ? authorization(values) : registration(values);
    };

    const validations = (values: FormValues) => {
        let errors: FormikErrors<FormValues> = {};

        if (!values.login) {
            // errors.login = "Invalid username ";
            errors.login = "Invalid username and/or password";
        }
        if (!values.password) {
            // errors.password = "Invalid  password";
            errors.password = "Invalid username and/or password";
        }
        if (props.typePage === "registration") {
            if (
                !values.confirmPassword ||
                values.confirmPassword !== values.password
            ) {
                // errors.confirmPassword = "Invalid  confirm password";
                errors.confirmPassword = "Invalid username and/or password";
            }
        }

        return errors;
    };

    return (
        <div className="form-container">
            <Link to="/" className="logo">
                <img src={logo} alt="logo__icon"/>
            </Link>
            <h2 className="heading">
                {props.typePage === "login" ? "Log In" : "Sign In"}
            </h2>

            <Formik
                initialValues={{
                    login: "",
                    password: "",
                    confirmPassword: "",
                    recaptcha: "",
                }}
                validate={validations}
                onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <Form className="form-container__form">
                        <Field name="login">
                            {({field, form: {touched, errors}}: FieldProps) => (
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
                                        placeholder="Username*"
                                        error={touched.login && !!errors.login}
                                        onFocus={() => setErrorsFromServer('')}
                                    />
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({field, form: {touched, errors}}: FieldProps) => (
                                <div className="input-container">
                                    <FormLabel className="input-container__label">
                                        Password
                                    </FormLabel>
                                    <TextField
                                        {...field}
                                        id="outlined-error"
                                        className="input-container__input"
                                        variant="outlined"
                                        type="password"
                                        placeholder="Password*"
                                        error={touched.password && !!errors.password}
                                        onFocus={() => setErrorsFromServer('')}

                                    />
                                </div>
                            )}
                        </Field>
                        {props.typePage === "registration" && (
                            <Field name="confirmPassword">
                                {({field, form: {touched, errors}}: FieldProps) => (
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
                                        // onChange={onChange}
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
                            {(touched.login && errors.login) ||
                            (touched.password && errors.password) ||
                            (touched.confirmPassword && errors.confirmPassword) ||
                            errorsFromServer}
                        </FormHelperText>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Entrance;
