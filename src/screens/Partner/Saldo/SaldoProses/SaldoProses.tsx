import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { ViewBarang2, ViewBarang3 } from "../../../../components";
import Table, { TableColumn } from "../../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./SaldoProses.css";

const SaldoProses: React.FC = () => {
  const [viewSaldoProses, setViewSaldoProses] = useState<Photo>();

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
          <div className="btn-saldo-diproses">
            <div className="btn-eye" onClick={() => setViewSaldoProses(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="saldo-proses">
      <h2>Minggu Ini</h2>
      <div className="minggu-ini">
        <div className="time">
          <p>Senin</p>
          <p>7-14 Desember 2022</p>
        </div>
        <div className="jumlah-saldo">
          <p className="bold">Saldo anda</p>
          <p>Rp.250.000</p>
        </div>
      </div>

      <h3>Diperoses</h3>
      <div className="card-diproses">
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

      <ViewBarang2
        data={viewSaldoProses}
        visible={viewSaldoProses != undefined}
        onClose={() => setViewSaldoProses(undefined)}
        status="Penyewa"
      />
    </div>
  );
};
export default SaldoProses;
