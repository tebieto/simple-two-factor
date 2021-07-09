import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

interface CustomButtonProps {
  children: string;
  handleSubmit: { (): void };
}
const CustomButton = (props: CustomButtonProps) => {
  return (
    <CustomButtonContainer onClick={props.handleSubmit}>
      {props.children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
