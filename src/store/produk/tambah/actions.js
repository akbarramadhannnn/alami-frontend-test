import axios from "../../../lib/axios";
import {
  ID_PENJUAL_TAMBAH_PRODUK,
  NAMA_BARANG_TAMBAH_PRODUK,
  SATUAN_TAMBAH_PRODUK,
  HARGA_SATUAN_TAMBAH_PRODUK,
  DESKRIPSI_TAMBAH_PRODUK,
  ERROR_INPUT_TAMBAH_PRODUK,
  IS_DISABLED_BUTTON_TAMBAH_PRODUK,
} from "./actionsTypes";

export const actionsTambahDataProduk = () => async (dispatch, getState) => {
  dispatch({
    type: IS_DISABLED_BUTTON_TAMBAH_PRODUK,
    payload: {
      isDisabledButton: true,
    },
  });
  const data = getState().tambahProduk;
  const payload = {
    sellerId: data.idPenjual,
    nama: data.namaBarang,
    satuan: data.satuan,
    hargaSatuan: data.hargaSatuan,
    deskripsi: data.deskripsi,
  };
  try {
    const result = await axios.post("/addProduct", payload);
    if (result.data !== undefined) {
      const responseData = result.data;
      let error = {
        type: "",
        message: "",
      };
      if ((responseData.code === 400 || responseData.code === 404)) {
        error.type = responseData.status;
        error.message = responseData.message;
      } else if (responseData.code === 200) {
        dispatch(actionsResetFormInputProduk());
        error.type = responseData.status;
        error.message = "Added Successfuly";
      }
      dispatch({
        type: IS_DISABLED_BUTTON_TAMBAH_PRODUK,
        payload: {
          isDisabledButton: false,
        },
      });
      dispatch({
        type: ERROR_INPUT_TAMBAH_PRODUK,
        payload: error,
      });
    } else {
      console.log("result error", result.response.data);
    }
  } catch (err) {
    console.log("err", err);
    dispatch({
      type: IS_DISABLED_BUTTON_TAMBAH_PRODUK,
      payload: {
        isDisabledButton: false,
      },
    });
  }
};

export const actionsChangeInputProduk = (e) => async (dispatch, getState) => {
  const { name, value } = e.target;
  if (name === "idPenjual") {
    dispatch({
      type: ID_PENJUAL_TAMBAH_PRODUK,
      payload: {
        idPenjual: value,
      },
    });
  } else if (name === "namaBarang") {
    dispatch({
      type: NAMA_BARANG_TAMBAH_PRODUK,
      payload: {
        namaBarang: value,
      },
    });
  } else if (name === "satuan") {
    dispatch({
      type: SATUAN_TAMBAH_PRODUK,
      payload: {
        satuan: value,
      },
    });
  } else if (name === "hargaSatuan") {
    if (isNaN(value)) return false;
    dispatch({
      type: HARGA_SATUAN_TAMBAH_PRODUK,
      payload: {
        hargaSatuan: value,
      },
    });
  } else if (name === "deskripsi") {
    dispatch({
      type: DESKRIPSI_TAMBAH_PRODUK,
      payload: {
        deskripsi: value,
      },
    });
  }
};

export const actionsResetFormInputProduk = () => async (dispatch, getState) => {
  dispatch({
    type: ID_PENJUAL_TAMBAH_PRODUK,
    payload: {
      idPenjual: "",
    },
  });
  dispatch({
    type: NAMA_BARANG_TAMBAH_PRODUK,
    payload: {
      namaBarang: "",
    },
  });
  dispatch({
    type: SATUAN_TAMBAH_PRODUK,
    payload: {
      satuan: "",
    },
  });
  dispatch({
    type: HARGA_SATUAN_TAMBAH_PRODUK,
    payload: {
      hargaSatuan: "",
    },
  });
  dispatch({
    type: DESKRIPSI_TAMBAH_PRODUK,
    payload: {
      deskripsi: "",
    },
  });
};
