import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return props.type ? (
    <StyledButton onClick={props.clicked} disabled={props.disabled} success>
      {props.children}
    </StyledButton>
  ) : (
    <StyledButton onClick={props.clicked} disabled={props.disabled} danger>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  font-weight: bold;
  margin: 0 3px;

  ${(props) =>
    props.success &&
    css`
      color: #5c9210;
    `}
  ${(props) =>
    props.danger &&
    css`
      color: #944317;
    `}
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
