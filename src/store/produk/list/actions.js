import axios from "../../../lib/axios";
import {
  IS_LOADING_LIST_PRODUK,
  ID_PENJUAL_FILTER_PRODUK,
  NAMA_BARANG_FILTER_PRODUK,
  ERROR_PRODUK,
  LIST_DATA_PRODUK,
} from "./actionsTypes";
import DataSatuan from "../../../data/satuan";

export const getListDataProduk = (type, key) => async (dispatch, getState) => {
  try {
    let url;
    if (type === "user") {
      url = `listProductBySellerId?seller_id=${key}`;
      dispatch({
        type: ID_PENJUAL_FILTER_PRODUK,
        payload: {
          idPenjual: key,
        },
      });
    } else if (type === "keyowrd") {
      url = `searchProductByKeyword?keyword=${key}`;
    }
    const result = await axios.get(url);
    const resultData = result.data;
    if (resultData !== undefined) {
      let error = {};
      let dataProduk = [];
      if (resultData.code === 200) {
        for (let i = 0; i < resultData.data.length; i++) {
          if (type === "user") {
            const listSeller = JSON.parse(
              window.localStorage.getItem("listSeller")
            );
            const namaPenjual = listSeller.find(
              (d) => d.id === resultData.data[i].sellerId
            ).nama;
            const satuan = DataSatuan.find(
              (d) => d.value === resultData.data[i].satuan
            ).label;
            dataProduk.push({
              namaPenjual: namaPenjual,
              namaBarang: resultData.data[i].nama,
              satuan: satuan,
              harga: resultData.data[i].hargaSatuan,
              deskripsi: resultData.data[i].deskripsi,
            });
          } else if (type === "keyowrd") {
            dataProduk.push({
              namaBarang: resultData.data[i].nama,
              satuan: resultData.data[i].satuan,
              harga: resultData.data[i].hargaSatuan,
              deskripsi: resultData.data[i].deskripsi,
            });
          }
        }
        error.status = "";
        error.type = "";
        error.message = "";
      } else {
        dataProduk = [];
        error.status = resultData.code;
        error.type = resultData.status;
        error.message = resultData.message;
      }
      dispatch({
        type: LIST_DATA_PRODUK,
        payload: {
          dataProduk: dataProduk,
        },
      });
      dispatch({
        type: ERROR_PRODUK,
        payload: error,
      });
    }

    if (result.response) {
      const dataError = result.response.data;
      console.log("dataError", result.response);
      dispatch({
        type: ERROR_PRODUK,
        payload: {
          status: dataError.status,
          type: dataError.error,
          message: dataError.message,
        },
      });
    }
    dispatch(actionsChangeLoadingListProduk(false));
  } catch (err) {
    const dataError = err.response.data;
    dispatch({
      type: ERROR_PRODUK,
      payload: {
        status: dataError.status,
        type: dataError.error,
        message: dataError.message,
      },
    });
    dispatch(actionsChangeLoadingListProduk(false));
  }
};

export const actionsChangeInputListProduk =
  (e) => async (dispatch, getState) => {
    const { name, value } = e.target;
    if (name === "searchBarang") {
      dispatch({
        type: NAMA_BARANG_FILTER_PRODUK,
        payload: {
          namaBarang: value,
        },
      });
    }
  };

export const actionsChangeLoadingListProduk =
  (isValue) => async (dispatch, getState) => {
    dispatch({
      type: IS_LOADING_LIST_PRODUK,
      payload: {
        isLoading: isValue,
      },
    });
  };
