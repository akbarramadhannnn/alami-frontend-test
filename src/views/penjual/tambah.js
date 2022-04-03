import React, { Fragment, memo, useCallback, useEffect } from "react";
import {
  actionsAddSeller,
  actionsChangeInputAddSeller,
} from "../../store/actions";
import { ERROR_INPUT_TAMBAH_PENJUAL } from "../../store/penjual/tambah/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Alert, Label } from "../../components";

const TambahPenjual = () => {
  const dispatch = useDispatch();
  const { namaPenjual, kota, isDisabledButton, error } = useSelector(
    ({ tambahPenjual }) => tambahPenjual
  );

  useEffect(() => {
    if (error.message) {
      setTimeout(() => {
        dispatch({
          type: ERROR_INPUT_TAMBAH_PENJUAL,
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
      dispatch(actionsChangeInputAddSeller(e));
    },
    [dispatch]
  );

  const handleSimpanPenjual = useCallback(() => {
    dispatch(actionsAddSeller());
  }, [dispatch]);

  return (
    <Fragment>
      <div style={{ marginBottom: 15 }}>
        <h2>Tambah Penjual</h2>
      </div>
      {error.message && <Alert type={error.type}>{error.message}</Alert>}
      <div style={{ display: "gird", marginBottom: 15 }}>
        <div style={{ marginBottom: 15 }}>
          <Label>Name</Label>
          <Input
            type="text"
            name="nama"
            placeholder="isikan nama penjual"
            value={namaPenjual}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <Label>Kota</Label>
          <Input
            label="Kota"
            type="text"
            name="kota"
            placeholder="isikan kota pnejual"
            value={kota}
            onChange={handleChangeInput}
          />
        </div>
      </div>

      <div>
        <Button
          onClick={handleSimpanPenjual}
          disabled={isDisabledButton}
          color="primary"
        >
          Simpan Penjual
        </Button>
      </div>
    </Fragment>
  );
};

export default memo(TambahPenjual);
