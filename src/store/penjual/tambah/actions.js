import {
  INPUT_NAMA_PENJUAL,
  INPUT_KOTA_PENJUAL,
  ERROR_INPUT_TAMBAH_PENJUAL,
  IS_DISABLED_BUTTON_TAMBAH_PENJUAL,
} from "./actionsTypes";
import axios from "../../../lib/axios";

export const actionsAddSeller = () => async (dispatch, getState) => {
  dispatch({
    type: IS_DISABLED_BUTTON_TAMBAH_PENJUAL,
    payload: {
      isDisabledButton: true,
    },
  });
  const payload = {
    nama: getState().tambahPenjual.namaPenjual,
    kota: getState().tambahPenjual.kota,
  };
  axios.post("/addSeller", payload).then((response) => {
    const responseData = response.data;
    let error = {
      type: "",
      message: "",
    };
    if (responseData.code === 400) {
      error.type = responseData.status;
      error.message = responseData.message;
    } else if (responseData.code === 200) {
      const listSeller = JSON.parse(window.localStorage.getItem("listSeller"));
      listSeller.push(responseData.data);
      window.localStorage.setItem("listSeller", JSON.stringify(listSeller));
      dispatch(actionsResetFormInputPenjual());
      error.type = responseData.status;
      error.message = "Added Successfuly";
    }
    dispatch({
      type: ERROR_INPUT_TAMBAH_PENJUAL,
      payload: error,
    });
    dispatch({
      type: IS_DISABLED_BUTTON_TAMBAH_PENJUAL,
      payload: {
        isDisabledButton: false,
      },
    });
  });
};

export const actionsChangeInputAddSeller =
  (e) => async (dispatch, getState) => {
    const { name, value } = e.target;
    if (name === "nama") {
      dispatch({
        type: INPUT_NAMA_PENJUAL,
        payload: {
          namaPenjual: value,
        },
      });
    } else if (name === "kota") {
      dispatch({
        type: INPUT_KOTA_PENJUAL,
        payload: {
          kota: value,
        },
      });
    }
  };

export const actionsResetFormInputPenjual =
  () => async (dispatch, getState) => {
    dispatch({
      type: INPUT_NAMA_PENJUAL,
      payload: {
        namaPenjual: "",
      },
    });
    dispatch({
      type: INPUT_KOTA_PENJUAL,
      payload: {
        kota: "",
      },
    });
  };
