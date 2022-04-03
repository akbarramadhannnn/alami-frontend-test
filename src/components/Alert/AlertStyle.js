import styled from "styled-components";

export const Alert = styled.div`
  background: ${(props) =>
    props.type === "Error"
      ? "#ff4040"
      : props.type === "Success"
      ? "#228b22"
      : "#333"};
  padding: 10px 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;

export const Text = styled.p`
  color: #fff;
  margin: 0px;
`;
