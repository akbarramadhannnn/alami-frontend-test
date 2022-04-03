import {
  INPUT_NAMA_PENJUAL,
  ERROR_INPUT_TAMBAH_PENJUAL,
  INPUT_KOTA_PENJUAL,
  IS_DISABLED_BUTTON_TAMBAH_PENJUAL,
} from "./actionsTypes";

const initialState = {
  namaPenjual: "",
  kota: "",
  error: {
    type: "",
    message: "",
  },
  isDisabledButton: false,
};

const tambahPenjual = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INPUT_NAMA_PENJUAL:
      state = {
        ...state,
        namaPenjual: payload.namaPenjual,
      };
      break;
    case INPUT_KOTA_PENJUAL:
      state = {
        ...state,
        kota: payload.kota,
      };
      break;
    case IS_DISABLED_BUTTON_TAMBAH_PENJUAL:
      state = {
        ...state,
        isDisabledButton: payload.isDisabledButton,
      };
      break;
    case ERROR_INPUT_TAMBAH_PENJUAL:
      state = {
        ...state,
        error: {
          ...state.error,
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

export default tambahPenjual;
