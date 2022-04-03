import React, { Fragment, useCallback, useEffect, memo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actionsChangeInputProduk,
  actionsTambahDataProduk,
} from "../../store/actions";
import { ERROR_INPUT_TAMBAH_PRODUK } from "../../store/produk/tambah/actionsTypes";
import {
  Button,
  Input,
  Alert,
  Select,
  TextArea,
  Label,
} from "../../components";
import DataSatuan from "../../data/satuan";

const TambahProduk = () => {
  const [optionPenjual, setOptionPenjual] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    idPenjual,
    namaBarang,
    satuan,
    hargaSatuan,
    deskripsi,
    error,
    isDisabledButton,
  } = useSelector(({ tambahProduk }) => tambahProduk);

  useEffect(() => {
    const listSeller = JSON.parse(window.localStorage.getItem("listSeller"));
    if (listSeller.length > 0) {
      const arrPenjual = [];
      for (let i = 0; i < listSeller.length; i++) {
        arrPenjual.push({
          value: listSeller[i].id,
          label: listSeller[i].nama,
        });
      }
      setOptionPenjual(arrPenjual);
    }
  }, []);

  useEffect(() => {
    if (error.message) {
      setTimeout(() => {
        dispatch({
          type: ERROR_INPUT_TAMBAH_PRODUK,
          payload: {
            type: "",
            message: "",
          },
        });
      }, 5000);
    }
  }, [error, dispatch]);

  const handleChangeInput = useCallback(
    (e) => {
      dispatch(actionsChangeInputProduk(e));
    },
    [dispatch]
  );

  const handleBack = useCallback(() => {
    history.push("/produk");
  }, [history]);

  const handleSubmit = useCallback(() => {
    dispatch(actionsTambahDataProduk());
  }, [dispatch]);

  return (
    <Fragment>
      <div style={{ marginBottom: 15 }}>
        <h2>Tambah Produk</h2>
      </div>
      {error.message && <Alert type={error.type}>{error.message}</Alert>}
      <div style={{ display: "grid", marginBottom: 15 }}>
        <div style={{ marginBottom: 15 }}>
          <Label>Nama Penjual</Label>
          <Select
            name="idPenjual"
            placeholder="Pilih Nama Penjual"
            onChange={handleChangeInput}
            value={idPenjual}
            option={optionPenjual}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Label>Nama Barang</Label>
          <Input
            type="text"
            name="namaBarang"
            placeholder="isikan nama barang"
            value={namaBarang}
            onChange={handleChangeInput}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Label>Satuan</Label>
          <Select
            name="satuan"
            placeholder="Pilih Satuan"
            onChange={handleChangeInput}
            value={satuan}
            option={DataSatuan}
          />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Label>Harga Satuan</Label>
          <Input
            type="text"
            name="hargaSatuan"
            placeholder="isikan harga satuan"
            value={hargaSatuan}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label>Deskripsi</Label>
          <TextArea
            name="deskripsi"
            placeholder="deskripsi"
            value={deskripsi}
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <div>
        <Button onClick={handleBack} marginRight="15px">
          Kembali
        </Button>

        <Button
          onClick={handleSubmit}
          disabled={isDisabledButton}
          color="primary"
        >
          Simpan Produk
        </Button>
      </div>
    </Fragment>
  );
};

export default memo(TambahProduk);
