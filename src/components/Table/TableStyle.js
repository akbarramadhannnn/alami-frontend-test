import styled from "styled-components";

const Table = styled.table`
  position: relative;
  color: #333;
  background: white;
  //   border: 1px solid #333;
  font-size: 12pt;
  border-collapse: collapse;
  width: 100%;
`;

export const Tr = styled.tr`
  width: 100%;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export const Th = styled.th`
  box-sizing: border-box;
  padding: 13px;
  border-top: none;
  background: #013c50;
  color: #fff;
`;

export const Thead = styled.thead`
  width: 100%;
`;

export const Tbody = styled.tbody`
  text-align: center;
`;

export const Td = styled.td`
  box-sizing: border-box;
  padding: 13px;
`;

export default Table;
