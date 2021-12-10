import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import { Heading } from "../core/atoms/Heading";
import InputFormBase from "../core/atoms/FormInputBase";
import SendButton from "../core/atoms/SendButton";
import { Box, InputAdornment } from "@material-ui/core";
import FormSelectBase from "../core/atoms/FormSelectBase";
import { getAccounts } from "../common/Inquiries/Accounts";
import { postLinking } from "../common/Inquiries/Transactions";

const OtcLinking = () => {
  const [values, setValues] = useState({
    amount0: "",
    account0: "",
    amount1: "",
    account1: "",
    comments: "",
  });


  const [accounts, setAccounts] = useState(null as any);

  useEffect(() => {
    handleAccounts();
  }, []);

  const handleAccounts = async () => {
    const res = await getAccounts();
    setAccounts(res.data);
  }

  const validations = (values: any) => {
    let errors: FormikErrors<any> = {};

    if (!values.amount0) {
      errors.amount0 = "Required";
    } else if (!values.amount0) {
      errors.amount0 = "Invalid comeOut";
    }
    return errors;
  };

  const [valueSelect, setSelect] = React.useState("");

  const handleChange = (event: any, setFieldValue: any, field: any) => {
    console.log(`event.target.value`, event.target)
    // setSelect(event.target.value as string);
    setFieldValue(field, event.target.value)
  };

  const onSubmit = async (values: any) => {
    const {account0, account1, amount0, amount1, comments} = values;
    const res = await postLinking(amount0 * 100, account0, amount1 * 100, account1, undefined, comments);
    console.log(`res`, res)
  }


  return (
    <div className="otc-single container">
      <Heading className="heading">OTC Linking</Heading>
      <Formik
        initialValues={values}
        validate={validations}
        onSubmit={(values, actions) => {
          onSubmit(values)
        }}
      >
        {(props: any) => (
          <Form className="form-pages">
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="amount0">
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
                {accounts && (
                  <Field name="account0">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      label="UAN"
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'account0')}
                    />
                  )}
                  </Field>
                )}
              </Box>
            </Box>

            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="amount1">
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
                {accounts && (
                  <Field name="account1">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      label="UAN"
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'account1')}
                    />
                  )}
                  </Field>
                )}
              </Box>
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

            <SendButton>Send</SendButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OtcLinking;
