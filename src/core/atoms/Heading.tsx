import { Typography } from "@material-ui/core";
import React from "react";

interface IProps {
  text?: string;
  className?: string;
}

export const Heading: React.FC<IProps> = (props, { className }) => {
  return (
    <Typography className={`heading ${className}`}>
      {props?.text}
      {props.children}
    </Typography>
  );
};
