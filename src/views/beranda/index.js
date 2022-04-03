import React, { Fragment, memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionsChangeInputListProduk,
  getListDataProduk,
  actionsChangeLoadingListProduk
} from "../../store/actions";
import { Table, Input } from "../../components";

const Beranda = () => {
  const namaBarang = useSelector(
    ({ listProduk }) => listProduk.filter.namaBarang
  );
  const { dataProduk, isLoading, error } = useSelector(
    ({ listProduk }) => listProduk
  );
  console.log('error [beranda]', error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsChangeLoadingListProduk(true))
    let timeout;
    timeout = setTimeout(() => {
      dispatch(getListDataProduk("keyowrd", namaBarang));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, namaBarang]);

  const handleChangeInput = useCallback(
    (e) => {
      dispatch(actionsChangeInputListProduk(e));
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
          <h2>Beranda</h2>
        </div>
      </div>

      <div style={{ marginBottom: 15, width: 200 }}>
        <Input
          placeholder="cari nama barang..."
          name="searchBarang"
          value={namaBarang}
          onChange={handleChangeInput}
        />
      </div>

      <Table
        column={["Nama Barang", "Satuan", "Harga", "Deskripsi"]}
        data={dataProduk}
        isLoading={isLoading}
        error={error}
      />
    </Fragment>
  );
};

export default memo(Beranda);
