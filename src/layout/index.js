import React, { Fragment, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, Menu, List, Content } from "./LayoutStyle";

const Index = ({ children }) => {
  const location = useLocation();
  const isActive = useCallback(
    (url) => {
      if (url === location.pathname) {
        return "active";
      }
      return "";
    },
    [location]
  );
  return (
    <Fragment>
      <Header>
        <Menu>
          <List>
            <Link to="/" className={isActive("/")}>
              Beranda
            </Link>
          </List>
          <List>
            <Link to="/produk" className={isActive("/produk")}>
              Produk
            </Link>
          </List>
          <List>
            <Link to="/tambah-penjual" className={isActive("/tambah-penjual")}>
              Tambah Penjual
            </Link>
          </List>
        </Menu>
      </Header>
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Index;
