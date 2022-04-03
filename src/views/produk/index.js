import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListDataProduk,
  actionsChangeLoadingListProduk,
} from "../../store/actions";
import { Table, Button, Select } from "../../components";

const Index = ({ history }) => {
  const dispatch = useDispatch();
  const [optionPenjual, setOptionPenjual] = useState([]);
  const { dataProduk, isLoading, error } = useSelector(
    ({ listProduk }) => listProduk
  );
  const idPenjual = useSelector(
    ({ listProduk }) => listProduk.filter.idPenjual
  );

  useEffect(() => {
    dispatch(actionsChangeLoadingListProduk(true));
    let id;
    const listSeller = JSON.parse(window.localStorage.getItem("listSeller"));
    if (listSeller.length > 0) {
      id = listSeller[0].id;
      const arrPenjual = [];
      for (let i = 0; i < listSeller.length; i++) {
        arrPenjual.push({
          value: listSeller[i].id,
          label: listSeller[i].nama,
        });
      }
      setOptionPenjual(arrPenjual);
    } else {
      id = "";
    }
    dispatch(getListDataProduk("user", id));
  }, [dispatch]);

  const handleTambahProduk = useCallback(() => {
    history.push("/produk/tambah");
  }, [history]);

  const handleChangePenjual = useCallback(
    (e) => {
      dispatch(actionsChangeLoadingListProduk(true));
      dispatch(getListDataProduk("user", e.target.value));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: 15 }}>
          <h2>List Produk</h2>
        </div>

        {(error.status === 404 || error.status === "") && (
          <div style={{ marginBottom: 15 }}>
            <Button onClick={handleTambahProduk} color="primary">
              Tambah Produk
            </Button>
          </div>
        )}
      </div>

      {!isLoading && error.status === 400 ? (
        <div
          style={{
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 20, color: "#808080" }}>
            Mohon maaf halaman tidak bisa diakses, silahkan tambahkan data
            penjual terlebih dahulu
          </p>
        </div>
      ) : (
        <Fragment>
          <div style={{ marginBottom: 15, width: 200 }}>
            <Select
              value={idPenjual}
              option={optionPenjual}
              onChange={handleChangePenjual}
            />
          </div>

          <Table
            column={[
              "Nama Penjual",
              "Nama Barang",
              "Satuan",
              "Harga",
              "Deskripsi",
            ]}
            data={dataProduk}
            isLoading={isLoading}
            error={error}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Index;
