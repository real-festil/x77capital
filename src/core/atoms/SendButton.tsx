import { ButtonBase } from "@material-ui/core";
import React from "react";

interface SendButtonProps {
  className?: string;
  children: string | JSX.Element;
}

const SendButton = ({ children, className }: SendButtonProps) => {
  return (
    <ButtonBase className={`send-button ${className}`} type="submit">
      {children}
    </ButtonBase>
  );
};

export default SendButton;
