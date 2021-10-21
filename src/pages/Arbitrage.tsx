import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import React, { useState } from "react";
import { Heading } from "../core/atoms/Heading";
import InputFormBase from "../core/atoms/FormInputBase";
import SendButton from "../core/atoms/SendButton";
import { Box, InputAdornment } from "@material-ui/core";
import FormSelectBase from "../core/atoms/FormSelectBase";

interface FormValues {
  comeOut: string;
  comeIn: string;
  uanRate: string;
  comments: string;
}

const Arbitrage = () => {
  const [values, setValues] = useState<FormValues>({
    comeOut: "",
    comeIn: "",
    uanRate: "",
    comments: "",
  });

  const validations = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.comeOut) {
      errors.comeOut = "Required";
    } else if (!values.comeOut) {
      errors.comeOut = "Invalid comeOut";
    }

    if (!values.comeIn) {
      console.log("test comeIn", values.comeIn);

      errors.comeIn = "Invalid comeIn";
    }
    if (!values.comments) {
      console.log("test comments", values.comments);

      errors.comments = "Invalid comments";
    }
    return errors;
  };

  const [valueSelect, setSelect] = React.useState("");

  const handleChange = (event: any) => {
    setSelect(event.target.value as string);
  };

  return (
    <div className="otc-single container">
      <Heading className="heading">Arbitrage</Heading>
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
        {(props: FormValues) => (
          <Form className="form-pages">
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="comeOut">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      type="text"
                      label="Come out:"
                      placeholder="Еnter the amount in USDT*"
                      field={field}
                      errors={
                        touched.comeOut && errors.comeOut && errors.comeOut
                      }
                    />
                  )}
                </Field>
                <Field name="comeOut">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      menuItem={["Exchange-1"]}
                      value={valueSelect}
                      handleChange={handleChange}
                    />
                  )}
                </Field>
              </Box>
            </Box>

            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="comeIn">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      type="text"
                      label="Come in:"
                      placeholder="Еnter the amount in USDT*"
                      field={field}
                      errors={touched.comeIn && errors.comeIn && errors.comeIn}
                    />
                  )}
                </Field>
                <Field name="comeIn">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      menuItem={["Exchange-2"]}
                      value={valueSelect}
                      handleChange={handleChange}
                    />
                  )}
                </Field>
              </Box>
            </Box>
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="profit">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      className="full-width"
                      endAdornment="USDT"
                      type="text"
                      label="Profit:"
                      placeholder="Profit will be calculated automatically"
                      field={field}
                      errors={
                        touched.uanRate && errors.uanRate && errors.uanRate
                      }
                    />
                  )}
                </Field>
              </Box>
            </Box>
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="payOut">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      className="full-width margin-center"
                      endAdornment="%"
                      type="text"
                      label="PayOut:"
                      placeholder="0"
                      field={field}
                      errors={
                        touched.uanRate && errors.uanRate && errors.uanRate
                      }
                    />
                  )}
                </Field>
                <Field name="commission">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      className="full-width"
                      endAdornment="USDT"
                      type="text"
                      label="Commission"
                      placeholder="0"
                      field={field}
                      errors={
                        touched.uanRate && errors.uanRate && errors.uanRate
                      }
                    />
                  )}
                </Field>
              </Box>
              <Box className="form-pages__sector">
                <Box className="form-pages__box">
                  <Field name="comments">
                    {({ field, form: { touched, errors } }: FieldProps) => (
                      <InputFormBase
                        className="form-input-base__comments"
                        type="text"
                        label="Comments:"
                        placeholder="Message"
                        field={field}
                        errors={
                          touched.comments && errors.comments && errors.comments
                        }
                      />
                    )}
                  </Field>
                </Box>
              </Box>
            </Box>
            <SendButton>Send</SendButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Arbitrage;
