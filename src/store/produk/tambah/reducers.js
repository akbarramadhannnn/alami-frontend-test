import {
  ID_PENJUAL_TAMBAH_PRODUK,
  NAMA_BARANG_TAMBAH_PRODUK,
  SATUAN_TAMBAH_PRODUK,
  HARGA_SATUAN_TAMBAH_PRODUK,
  DESKRIPSI_TAMBAH_PRODUK,
  ERROR_INPUT_TAMBAH_PRODUK,
  IS_DISABLED_BUTTON_TAMBAH_PRODUK
} from "./actionsTypes";

const initialState = {
  idPenjual: "",
  namaBarang: "",
  satuan: "",
  hargaSatuan: "",
  deskripsi: "",
  error: {
    type: "",
    message: "",
  },
  isDisabledButton: false,
};

const tambahProduk = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ID_PENJUAL_TAMBAH_PRODUK:
      state = {
        ...state,
        idPenjual: payload.idPenjual,
      };
      break;
    case NAMA_BARANG_TAMBAH_PRODUK:
      state = {
        ...state,
        namaBarang: payload.namaBarang,
      };
      break;
    case SATUAN_TAMBAH_PRODUK:
      state = {
        ...state,
        satuan: payload.satuan,
      };
      break;
    case HARGA_SATUAN_TAMBAH_PRODUK:
      state = {
        ...state,
        hargaSatuan: payload.hargaSatuan,
      };
      break;
    case DESKRIPSI_TAMBAH_PRODUK:
      state = {
        ...state,
        deskripsi: payload.deskripsi,
      };
      break;
    case ERROR_INPUT_TAMBAH_PRODUK:
      state = {
        ...state,
        error: {
          ...state.error,
          type: payload.type,
          message: payload.message,
        },
      };
      break;
    case IS_DISABLED_BUTTON_TAMBAH_PRODUK:
      state = {
        ...state,
        isDisabledButton: payload.isDisabledButton,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default tambahProduk;
