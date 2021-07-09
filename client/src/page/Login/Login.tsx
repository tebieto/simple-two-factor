import React from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginContainer } from "./Login.styles";

const Login = () => {
  return (
    <LoginContainer>
      <Header />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;
