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
    label?: string;
    heightLabel?: boolean
    menuItem: {[value: string]: string | number}[];
}

const FormSelectBase: React.FC<FormSelectProps> = ({
                                                       className,
                                                       handleChange,
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
                defaultValue={1}
                onChange={handleChange}
            >
                {menuItem.map((element, index) => (
                    <MenuItem key={index} value={element.value}>
                        {element.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FormSelectBase;
