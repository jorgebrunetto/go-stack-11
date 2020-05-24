import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  place-items: center;

  border: 2px solid #232129;
  color: #666360;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  & + div {
    margin-top: 8px;
  }
  input {
    color: #f4ede8;
    flex: 1;
    font-size: 13.39px;
    background: transparent;
    padding: 16px 0;
    border: 0;
    font-family: sans-serif;
    &::placeholder {
      color: #666360;
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: #f4ede8;
      -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
      transition: background-color 5000s ease-in-out 0s;
      &:hover,
      &:focus {
        -webkit-text-fill-color: #f4ede8;
        -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
