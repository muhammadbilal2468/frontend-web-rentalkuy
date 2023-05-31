import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Table, ViewBarang2 } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./ViewTransaksi.css";

const ViewTransaksi: React.FC = () => {
  const [viewTransaksi, setViewTransaksi] = useState<Photo>();

  // ------ API photos dari jsonplaceholder -------- //
  const photos = useQuery<AxiosResponse<Photo[]>>(
    "photos",
    async () => await httpRequestJsonplc.get("/albums/1/photos")
  );
  console.log("photos", photos);

  if (photos.isLoading) {
    <span>Loading......</span>;
  }

  if (!photos.data?.data) return <span>Data Not Found</span>;

  const data = photos.data?.data;
  const columns: TableColumn<Photo>[] = [
    {
      title: "No",
      dataIndex: "id",
    },
    {
      title: "Nama Penyewa",
      dataIndex: "id",
    },
    {
      title: "Nama Barang",
      dataIndex: "id",
    },
    {
      title: "Gambar",
      dataIndex: "id",
      render: (data) => {
        return <img src={data.url} alt="" style={{ height: 40, width: 60 }} />;
      },
    },
    {
      title: "Tanggal Sewa",
      dataIndex: "id",
    },
    {
      title: "Tanggal Pengembalian",
      dataIndex: "id",
    },
    {
      title: "Harga",
      dataIndex: "id",
    },
    {
      title: "Total",
      dataIndex: "id",
    },
    {
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="btn-table-transaksi">
            <div className="btn-eye" onClick={() => setViewTransaksi(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="view-transaksi">
      <h2 className="title">Transaksi</h2>

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

      <div className="card-saldo">
        <div className="left">
          <i className="fa-solid fa-wallet icon"></i>
        </div>
        <div className="right">
          <div className="desc">
            <div className="time">
              <p className="hari">Senin</p>
              <p>7-14 Desember 2022</p>
            </div>
            <p className="bold">Rp.100.000</p>
          </div>
          <div className="status">
            <i className="fa-regular fa-clock"></i>
          </div>
        </div>
      </div>

      <Table columns={columns} data={data} hideSearch />

      <div className="btn-transaksi">
        <button>Sudah Ditransfer</button>
      </div>

      <ViewBarang2
        data={viewTransaksi}
        visible={viewTransaksi != undefined}
        onClose={() => setViewTransaksi(undefined)}
        status="Penyewa"
      />
    </div>
  );
};

export default ViewTransaksi;
