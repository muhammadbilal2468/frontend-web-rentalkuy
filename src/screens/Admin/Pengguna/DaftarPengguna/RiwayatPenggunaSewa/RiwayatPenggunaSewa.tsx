import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Table, ViewImagePotrait } from "../../../../../components";
import { TableColumn } from "../../../../../components/Table/Table";
import ViewBarangPenyewa from "../../../../../components/ViewBarang3/ViewBarang3";
import { httpRequestJsonplc } from "../../../../../service/api";
import { Photo } from "../../../../../types/Photo";
import "./RiwayatPenggunaSewa.css";

const RiwayatPenggunaSewa: React.FC = () => {
  const [viewBarangPenyewa, setViewBarangPenyewa] = useState<Photo>();
  const [viewImagePotrait, setViewImagePotrait] = useState<Photo>();
  // ------ API photos dari jsonplaceholder
  const photos = useQuery<AxiosResponse<Photo>>(
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
      title: "",
      dataIndex: "id",
    },
    {
      title: "Nama",
      dataIndex: "id",
    },
    {
      title: "Nama Barang",
      dataIndex: "id",
    },
    {
      title: "Gambar",
      dataIndex: "url",
      render: (data) => {
        return <img src={data.url} alt="" width={30} height={30} />;
      },
    },
    {
      title: "Kategori",
      dataIndex: "id",
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
      title: "Pembayaran",
      dataIndex: "url",
      render: (data) => {
        return (
          <img
            src={data.url}
            onClick={() => setViewImagePotrait(data)}
            alt=""
            width={30}
            height={30}
          />
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="button-menu-act">
            <div
              className="button-act"
              onClick={() => setViewBarangPenyewa(data)}
            >
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="rps">
      <h2 className="title">Riwayat .....</h2>
      <div className="rps-header">
        <i className="fa-solid fa-chevron-left"></i>
        <h2>Riwayat Penyewaan Barang</h2>
      </div>
      <Table data={data} columns={columns} />

      <ViewImagePotrait
        key={data.id}
        data={viewImagePotrait}
        visible={viewImagePotrait != undefined}
        onClose={() => setViewImagePotrait(undefined)}
      />
      <ViewBarangPenyewa
        key={data.id}
        data={viewBarangPenyewa}
        visible={viewBarangPenyewa != undefined}
        onClose={() => setViewBarangPenyewa(undefined)}
        status="Telah Selesai Sewa"
      />
    </div>
  );
};

export default RiwayatPenggunaSewa;
