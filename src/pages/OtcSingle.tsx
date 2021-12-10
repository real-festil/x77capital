import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import React, { useEffect, useState } from "react";
import { Heading } from "../core/atoms/Heading";
import InputFormBase from "../core/atoms/FormInputBase";
import SendButton from "../core/atoms/SendButton";
import { Box, InputAdornment } from "@material-ui/core";
import FormSelectBase from "../core/atoms/FormSelectBase";
import { getAccounts } from "../common/Inquiries/Accounts";
import { postSingle } from "../common/Inquiries/Transactions";
// import { SelectChangeEvent } from "@material-ui/core";

const OtcSingle = () => {
  const [values, setValues] = useState({
    comeOut1: "",
    account1: "",
    comeOut2: "",
    account2: "",
    comeOut3: "",
    account3: "",
    comeIn1: "",
    comeInAccount1: "",
    uanRate: "",
    fee: "",
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

  console.log(`accounts`, accounts)

  const validations = (values: any) => {
    let errors: FormikErrors<any> = {};

    if (!values.comeOut1) {
      errors.comeOut1 = "Required";
    } else if (!values.comeOut1) {
      errors.comeOut1 = "Invalid comeOut";
    }

    if (!values.comeIn1) {
      console.log("test comeIn", values.comeIn1);

      errors.comeIn1 = "Invalid comeIn";
    }
    if (!values.comments) {
      console.log("test comments", values.comments);

      errors.comments = "Invalid comments";
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
    const {account1, account2, account3, comeOut1, comeOut2, comeOut3, comeIn1, comeInAccount1, uanRate, fee, comments} = values;
    const res = await postSingle("0", comeOut1 * 100, account1, comeOut2 * 100, account2,  fee * 100, uanRate * 100, comments, comeOut3 * 100, account3, comeInAccount1 * -100);
    console.log(`res`, res)
  }

  return (
    <div className="otc-single container" style={{maxHeight: 'calc(100vh - 138px)', overflow: 'auto'}}>
      <Heading className="heading">OTC Single</Heading>
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
                <Field name="comeOut1">
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
              <Box className="form-pages__box">
                <Field name="comeOut2">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      type="text"
                      placeholder="Еnter the amount in USDT*"
                      field={field}
                      errors={
                        touched.comeOut && errors.comeOut && errors.comeOut
                      }
                    />
                  )}
                </Field>
                {accounts && (
                  <Field name="account2">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      heightLabel={false}
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'account2')}
                    />
                  )}
                  </Field>
                )}
              </Box>
              <Box className="form-pages__box">
                <Field name="comeOut3">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      type="text"
                      placeholder="Еnter the amount in USDT*"
                      field={field}
                      errors={
                        touched.comeOut && errors.comeOut && errors.comeOut
                      }
                    />
                  )}
                </Field>
                {accounts && (
                  <Field name="account3">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      heightLabel={false}
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'account3')}
                    />
                  )}
                  </Field>
                )}
              </Box>
            </Box>
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="comeIn1">
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
                  <Field name="comeInAccount1">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <FormSelectBase
                      label="USDT"
                      menuItem={accounts.map((acc:any) => ({value: acc.id, label: acc.bec.name}))}
                      handleChange={(e: any) => handleChange(e, props.setFieldValue, 'comeInAccount1')}
                    />
                  )}
                  </Field>
                )}
              </Box>
            </Box>
            <Box className="form-pages__sector">
              <Box className="form-pages__box">
                <Field name="uanRate">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      type="text"
                      label="UAH Rate:"
                      placeholder="26.75*"
                      field={field}
                      errors={
                        touched.uanRate && errors.uanRate && errors.uanRate
                      }
                    />
                  )}
                </Field>
                <Field name="fee">
                  {({ field, form: { touched, errors } }: FieldProps) => (
                    <InputFormBase
                      className="form-input-base__width"
                      type="text"
                      label="Fee:"
                      placeholder="0.12*"
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

export default OtcSingle;
