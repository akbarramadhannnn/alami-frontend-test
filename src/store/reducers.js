import { combineReducers } from "redux";
import listProduk from "./produk/list/reducers";
import tambahProduk from "./produk/tambah/reducers";
import tambahPenjual from "./penjual/tambah/reducers";

const rootReducer = combineReducers({
  listProduk,
  tambahProduk,
  tambahPenjual,
});

export default rootReducer;
