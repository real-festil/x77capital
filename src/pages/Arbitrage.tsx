import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import { Heading } from "../core/atoms/Heading";
import InputFormBase from "../core/atoms/FormInputBase";
import SendButton from "../core/atoms/SendButton";
import { Box, InputAdornment } from "@material-ui/core";
import FormSelectBase from "../core/atoms/FormSelectBase";
import { getAccounts } from "../common/Inquiries/Accounts";
import { postArbitrage } from "../common/Inquiries/Transactions";

const Arbitrage = () => {
  const [values, setValues] = useState<any>({
    amount1: "",
    account1: "",
    amount2: "",
    account2: "",
    payOut: "",
    commission: "",
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

    return errors;
  };

  const [valueSelect, setSelect] = React.useState("0");

  const handleChange = (event: any, setFieldValue: any, field: any) => {
    console.log(`event.target.value`, event.target)
    // setSelect(event.target.value as string);
    setFieldValue(field, event.target.value)
  };

  const onSubmit = async (values: any) => {
    const {account1, account2, amount1, amount2, profit, payOut, commission, comments} = values;
    const res = await postArbitrage(amount1 * 100, account1, amount2 * 100, account2, profit, payOut, commission, comments);
    console.log(`res`, res)
  }

  return (
    <div className="otc-single container">
      <Heading className="heading">Arbitrage</Heading>
      <Formik
        initialValues={values}
        validate={validations}
        onSubmit={(values, actions) => {
          onSubmit(values);
        }}
      >
        {(props: any) => (
          <Form className="form-pages">
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="amount1">
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
                <Field name="amount2">
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
                  <Field name="account2">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      label="UAN"
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'account2')}
                    />
                  )}
                  </Field>
                )}
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
