import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid whitesmoke;
    width: 400px;
    height: 400px;
    input {
      margin-bottom: 20px;
    }

    button {
      border: none;
      background-color: yellow;
      padding: 10px;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
