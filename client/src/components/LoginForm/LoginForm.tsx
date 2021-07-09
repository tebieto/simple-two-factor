import React, { useCallback, useState } from "react";
import { HTMLInputEvent } from "../../interface";
import { post } from "../../request";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import { LoginFormContainer } from "./LoginForm.styles";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = useCallback((e: HTMLInputEvent) => {
    const { value } = e.target;
    setPhoneNumber(value);
  }, []);

  const handleSumit = useCallback(() => {
    const data = new FormData();
    data.append("phoneNumber", phoneNumber);
    post({ path: "/authenticatee", data });
  }, [phoneNumber]);

  return (
    <LoginFormContainer>
      <CustomInput
        type="number"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={handleChange}
      />
      <CustomButton handleSubmit={handleSumit}>Login</CustomButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
