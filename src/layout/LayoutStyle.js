import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  background: #013c50;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
  padding: 0px 80px;
`;

export const Menu = styled.ul`
  background: transparent;
  display: flex;
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0px;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
`;

export const List = styled.li`
  margin-right: 20px;

  a {
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;

    &.active {
      color: #00c3ad;
    }
  }
`;

export const Content = styled.div`
  padding: 30px 80px;
`;
