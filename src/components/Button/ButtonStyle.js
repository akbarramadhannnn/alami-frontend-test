import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  color: ${(props) => (props.color === "primary" ? "#fff" : "")};
  background: ${(props) => (props.color === "primary" ? "#013c50" : "")};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};
  cursor: pointer;

  &:disabled {
    background: #e5e4e2;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;

export default Button;
