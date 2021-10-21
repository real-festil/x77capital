import React from "react";
import { Field, FieldProps, Form, Formik, FormikErrors } from "formik";
import {
  FormControl,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@material-ui/core";

interface InputProps {
  field: FieldProps["field"];
  label?: string;
  type: string;
  className?: string;
  placeholder: string;
  errors: any;
  endAdornment?: string;
}

const FormInputBase: React.FC<InputProps> = ({
  className,
  placeholder,
  label,
  field,
  type,
  endAdornment,
  errors,
}) => {
  return (
    <div className={`form-input-base ${className}`}>
      <FormLabel className="form-input-base__label">{label}</FormLabel>

      {!endAdornment ? (
        <TextField
          id="outlined-basic"
          variant="outlined"
          type={type}
          className={`form-input-base__input`}
          placeholder={placeholder}
          error={errors}
          helperText={errors}
          {...field}
        />
      ) : (
        <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            className={`form-input-base__input`}
            placeholder={placeholder}
            type={type}
            endAdornment={
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            error={errors}
            {...field}
          />
        </FormControl>
      )}
    </div>
  );
};

export default FormInputBase;
