import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 10px;
  background-color: black;
  border-radius: 5px;
  color: white;
  width: 220px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.4 backround ease-in;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
