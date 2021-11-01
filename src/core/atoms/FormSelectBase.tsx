import {
    Box,
    FormControl,
    FormLabel,
    InputLabel,
    MenuItem,
    NativeSelect,
    Select,
} from "@material-ui/core";
import React from "react";

interface FormSelectProps {
    className?: string;
    handleChange: any;
    value: string | number;
    label?: string;
    heightLabel?: boolean

    menuItem: Array<string | number>;
}

const FormSelectBase: React.FC<FormSelectProps> = ({
                                                       className,
                                                       handleChange,
                                                       value,
                                                       heightLabel=true,
                                                       label,
                                                       menuItem,
                                                   }) => {


    return (
        <FormControl fullWidth className={`form-input-base__select ${className}`}>
            <FormLabel className={`form-input-base__label ${heightLabel && 'form-input-base__not-label'}`}>
                {label}
            </FormLabel>
            <Select
                variant="outlined"
                className={`form-input-base__input `}
                defaultValue={menuItem[0]}
                onChange={handleChange}
            >
                {menuItem.map((element, index) => (
                    <MenuItem value={menuItem[0]}>{element}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FormSelectBase;
