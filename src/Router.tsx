import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import Faq from "./screens/Faq/Faq";
import SyaratKetentuan from "./screens/SyaratKetentuan/SyaratKetentuan";
import Auth from "./layouts/Auth/Auth";
import Admin from "./layouts/Admin/Admin";
import Partner from "./layouts/Partner/Partner";
// ---- AUTENTIKASI ---- //
import { ForgetPass, Login, NewPass, Register } from "./screens/Auth";
// ---- ADMIN ---- //
import {
  Activity,
  BarangPenyediaJasa,
  DaftarPengguna,
  Dashboard,
  PenggunaSewa,
  PenyediaJasa,
  RiwayatPenggunaSewa,
  RiwayatSewaBarang,
  Transaksi,
  ViewPenggunaSewa,
  ViewPenyediaJasa,
  ViewTransaksi,
} from "./screens/Admin";

// ---- PARTNER ---- //
import {
  BarangArsip,
  BarangSaya,
  Batal,
  DashboardPartner,
  EditBarang,
  EditProfile,
  PengajuanSewa,
  ProsesPembayaran,
  Saldo,
  SaldoProses,
  SaldoTransfer,
  SedangDisewa,
  Selesai,
  TambahBarang,
} from "./screens/Partner";
import Team from "./screens/Team/Team";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ------------------- LANDING PAGE ---------------------------- */}
        <Route path="/" element={<LandingPage />} />

        {/* ---------------------- SYARAT KETENTUAN --------------------- */}
        <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />

        {/* -------------------------- FAQ ------------------------------ */}
        <Route path="/faq" element={<Faq />} />

        {/* -------------------------- Team ------------------------------ */}
        <Route path="/team" element={<Team />} />

        {/* ------------------- AUTENTIKASI ----------------------------- */}

        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forget-pass" element={<ForgetPass />} />
          <Route path="/auth/new-pass" element={<NewPass />} />
        </Route>

        {/* ------------------- ADMIN ---------------------------- */}

        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/activity" element={<Activity />} />

          <Route path="/admin/daftar-pengguna" element={<DaftarPengguna />}>
            <Route
              path="/admin/daftar-pengguna/pengguna-sewa"
              element={<PenggunaSewa />}
            />
            <Route
              path="/admin/daftar-pengguna/penyedia-jasa"
              element={<PenyediaJasa />}
            />
          </Route>
          <Route
            path="/admin/daftar-pengguna/view-pengguna-sewa/:id"
            element={<ViewPenggunaSewa />}
          />
          <Route
            path="/admin/daftar-pengguna/riwayat-pengguna-sewa"
            element={<RiwayatPenggunaSewa />}
          />
          <Route
            path="/admin/daftar-pengguna/view-penyedia-jasa"
            element={<ViewPenyediaJasa />}
          />
          <Route
            path="/admin/daftar-pengguna/barang-penyedia-jasa"
            element={<BarangPenyediaJasa />}
          />
          <Route
            path="/admin/riwayat-sewa-barang"
            element={<RiwayatSewaBarang />}
          />

          <Route path="/admin/transaksi" element={<Transaksi />} />
          <Route
            path="/admin/transaksi/view-transaksi"
            element={<ViewTransaksi />}
          />
        </Route>

        {/* ------------------- PARTNER ---------------------------- */}

        <Route path="/partner" element={<Partner />}>
          <Route path="/partner/dashboard" element={<DashboardPartner />} />
          <Route
            path="/partner/dashboard/persetujuan"
            element={<PengajuanSewa />}
          />
          <Route
            path="/partner/dashboard/proses-pembayaran"
            element={<ProsesPembayaran />}
          />
          <Route
            path="/partner/dashboard/sedang-disewa"
            element={<SedangDisewa />}
          />
          <Route path="/partner/dashboard/selesai" element={<Selesai />} />
          <Route path="/partner/dashboard/batal" element={<Batal />} />
          <Route path="/partner/barang-saya" element={<BarangSaya />} />
          <Route path="/partner/barang-arsip" element={<BarangArsip />} />
          <Route path="/partner/tambah-barang" element={<TambahBarang />} />
          <Route path="/partner/saldo" element={<Saldo />} />
          <Route path="/partner/saldo-diproses" element={<SaldoProses />} />
          <Route path="/partner/saldo-ditransfer" element={<SaldoTransfer />} />
          <Route path="/partner/edit-barang/" element={<EditBarang />} />
          <Route path="/partner/edit-profile" element={<EditProfile />} />
          <Route
            path="/partner/syarat-ketentuan"
            element={<SyaratKetentuan />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
