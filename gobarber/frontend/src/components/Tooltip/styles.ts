import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  span {
    background: #ff9000;
    padding: 8px;
    width: 160px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    visibility: hidden;
    transition: 0.4s;

    position: absolute;
    bottom: calc(100% + 10px);
    left: calc(-100% + 58px);
    transform: translateX(-100%);

    color: #312e38;

    &::before {
      content: "";
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;
      top: 100%;
      position: absolute;
      right: 22px;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
