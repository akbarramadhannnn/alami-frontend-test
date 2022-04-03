import {
  IS_LOADING_LIST_PRODUK,
  ID_PENJUAL_FILTER_PRODUK,
  NAMA_BARANG_FILTER_PRODUK,
  ERROR_PRODUK,
  LIST_DATA_PRODUK,
} from "./actionsTypes";

const initialState = {
  isLoading: true,
  dataProduk: [],
  filter: {
    idPenjual: "",
    namaBarang: "",
  },
  error: {
    status: "",
    type: "",
    message: "",
  },
};

const listProduk = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_DATA_PRODUK:
      state = {
        ...state,
        dataProduk: payload.dataProduk,
      };
      break;
    case IS_LOADING_LIST_PRODUK:
      state = {
        ...state,
        isLoading: payload.isLoading,
      };
      break;
    case ID_PENJUAL_FILTER_PRODUK:
      state = {
        ...state,
        filter: {
          ...state.filter,
          idPenjual: payload.idPenjual,
        },
      };
      break;
    case NAMA_BARANG_FILTER_PRODUK:
      state = {
        ...state,
        filter: {
          ...state.filter,
          namaBarang: payload.namaBarang,
        },
      };
      break;
    case ERROR_PRODUK:
      state = {
        ...state,
        error: {
          ...state.error,
          status: payload.status,
          type: payload.type,
          message: payload.message,
        },
      };
      break;
    default:
      return state;
  }
  return state;
};

export default listProduk;
