import React from "react";
import { HTMLInputEvent } from "../../interface";
import { CustomInputContainer } from "./CustomInput.styles";

interface CustomInputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange?: { (e: HTMLInputEvent): void };
}

const CustomInput = (props: CustomInputProps) => {
  return (
    <CustomInputContainer>
      <input {...props} />
    </CustomInputContainer>
  );
};

export default CustomInput;
