import React from "react";
import { Link } from "react-router-dom";
import "./Transaksi.css";

const Transaksi: React.FC = () => {
  return (
    <div className="transaksi">
      <h2 className="title">Transaksi</h2>
      <div className="input-radio-transaksi">
        <input type="radio" id="semua" name="filtertransaksi" value="" />
        <label htmlFor="semua">semua</label> <br />
        <input type="radio" id="minggu-ini" name="filtertransaksi" value="" />
        <label htmlFor="minggu-ini">Minggu Ini</label> <br />
        <input
          type="radio"
          id="minggu-berikutnya"
          name="filtertransaksi"
          value=""
        />
        <label htmlFor="minggu-berikutnya">Minggu Berikutnya</label>
      </div>

      <Link
        to="/admin/transaksi/view-transaksi"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card-transaksi">
          <div className="usaha-email">
            <p className="bold">Badan Usaha</p>
            <p>Toko Terserah</p>
            <p className="bold">Email</p>
            <p>terserah@gmail.com</p>
          </div>
          <div className="nohp-bank">
            <p className="bold">Nomor Telepon</p>
            <p>0823 3232 2323</p>
            <p className="bold">Bank</p>
            <p>BRI</p>
          </div>
          <div className="alamat-nama">
            <p className="bold">Alamat</p>
            <p>Jl. MT Haryono Blok HTML</p>
            <p className="bold">Atas nama</p>
            <p>Abdul Terserah</p>
          </div>
          <div className="rek-tanggal">
            <div>
              <p className="bold">Nomor Rekening</p>
              <p>12345678912345</p>
            </div>
            <p className="tanggal minggu-ini">Senin, 7-14 Desember 2022</p>
          </div>
          <div className="saldo minggu-ini">
            <p className="bold">Saldo Mingguan</p>
            <p>Rp.80.000</p>
          </div>
        </div>
      </Link>

      <div className="card-transaksi">
        <div className="usaha-email">
          <p className="bold">Badan Usaha</p>
          <p>Toko Terserah</p>
          <p className="bold">Email</p>
          <p>terserah@gmail.com</p>
        </div>
        <div className="nohp-bank">
          <p className="bold">Nomor Telepon</p>
          <p>0823 3232 2323</p>
          <p className="bold">Bank</p>
          <p>BRI</p>
        </div>
        <div className="alamat-nama">
          <p className="bold">Alamat</p>
          <p>Jl. MT Haryono Blok HTML</p>
          <p className="bold">Atas nama</p>
          <p>Abdul Terserah</p>
        </div>
        <div className="rek-tanggal">
          <div>
            <p className="bold">Nomor Rekening</p>
            <p>12345678912345</p>
          </div>
          <p className="tanggal">Senin, 7-14 Desember 2022</p>
        </div>
        <div className="saldo">
          <p className="bold">Saldo Mingguan</p>
          <p>Rp.80.000</p>
        </div>
      </div>

      <div className="card-transaksi">
        <div className="usaha-email">
          <p className="bold">Badan Usaha</p>
          <p>Toko Terserah</p>
          <p className="bold">Email</p>
          <p>terserah@gmail.com</p>
        </div>
        <div className="nohp-bank">
          <p className="bold">Nomor Telepon</p>
          <p>0823 3232 2323</p>
          <p className="bold">Bank</p>
          <p>BRI</p>
        </div>
        <div className="alamat-nama">
          <p className="bold">Alamat</p>
          <p>Jl. MT Haryono Blok HTML</p>
          <p className="bold">Atas nama</p>
          <p>Abdul Terserah</p>
        </div>
        <div className="rek-tanggal">
          <div>
            <p className="bold">Nomor Rekening</p>
            <p>12345678912345</p>
          </div>
          <p className="tanggal">Senin, 7-14 Desember 2022</p>
        </div>
        <div className="saldo">
          <p className="bold">Saldo Mingguan</p>
          <p>Rp.80.000</p>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
