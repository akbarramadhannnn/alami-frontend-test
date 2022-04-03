import Beranda from "../views/beranda";
import Produk from "../views/produk";
import TambahProduk from "../views/produk/tambah";
import TambahPenjual from "../views/penjual/tambah";

const Routes = [
  {
    exact: true,
    path: "/",
    component: Beranda,
  },
  {
    exact: true,
    path: "/produk",
    component: Produk,
  },
  {
    exact: true,
    path: "/produk/tambah",
    component: TambahProduk,
  },
  {
    exact: true,
    path: "/tambah-penjual",
    component: TambahPenjual,
  },
];

export default Routes;
