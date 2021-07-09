import React, { useCallback, useState } from "react";
import { HTMLInputEvent } from "../../interface";
import { post } from "../../request";
import CustomButton from "../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import { LoginFormContainer } from "./LoginForm.styles";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [validate, setValidate] = useState(false);
  const [hideForm, setHideForm] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const handleChangePhoneNumber = useCallback((e: HTMLInputEvent) => {
    const { value } = e.target;
    setPhoneNumber(value);
  }, []);

  const handleSubmitPhoneNumber = useCallback(() => {
    post({ path: "authenticate", data: { phoneNumber } }).then((res) => {
      console.log({ res });
      setValidate(true);
    });
  }, [phoneNumber]);

  const handleChangeOTP = useCallback((e: HTMLInputEvent) => {
    const { value } = e.target;
    setOTP(value);
  }, []);

  const handleSubmitOTP = useCallback(() => {
    post({ path: "validate", data: { phoneNumber, otp } }).then((res) => {
      if (res.valid) {
        setHideForm(true);
        setIsValid(res.valid);
      } else {
        alert("Invalid OTP try again...");
      }
    });
  }, [otp, phoneNumber]);

  return (
    <LoginFormContainer>
      {hideForm ? (
        <div className="outcome">
          {isValid && <span>Logged in successfully</span>}
        </div>
      ) : (
        <div className="form">
          <CustomInput
            type="number"
            placeholder={validate ? "Enter OTP" : "Enter Phone Number"}
            value={validate ? otp : phoneNumber}
            onChange={validate ? handleChangeOTP : handleChangePhoneNumber}
          />
          <CustomButton
            handleSubmit={validate ? handleSubmitOTP : handleSubmitPhoneNumber}
          >
            {validate ? "Validate" : "Login"}
          </CustomButton>
        </div>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
