import "./RiwayatSewaBarang.css";
import { AxiosResponse } from "axios";
import "./RiwayatSewaBarang.css";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Table, ViewImagePotrait } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import ViewRiwayatSewa from "../../../../components/ViewBarang2/ViewBarang2";

const RiwayatSewa: React.FC = () => {
  const [viewImagePotrait, setViewImagePotrait] = useState<Photo>();
  const [viewBarang, setViewBarang] = useState<Photo>();

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
      title: "Pengguna",
      dataIndex: "title",
    },
    {
      title: "Nama Barang",
      dataIndex: "id",
    },
    {
      title: "Kategori Barang",
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
      title: "Bukti Pembayaran",
      dataIndex: "url",
      render: (data) => {
        return (
          <img
            src={data.url}
            alt=""
            width={30}
            height={30}
            onClick={() => setViewImagePotrait(data)}
          />
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="button-menu-ps">
            <div className="button-ps" onClick={() => setViewBarang(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="rsb">
      <h2 className="title">Riwayat Sewa Barang</h2>

      <div className="card-rsb">
        <h3>Riwayat</h3>
        <form action="">
          <div className="choice-card-rsb">
            <input type="radio" name="riwayat" id="kemarin" />
            <label htmlFor="kemarin">Kemarin</label> <br />
            <input type="radio" name="riwayat" id="minggu-lalu" />
            <label htmlFor="minggu-lalu">Minggu Lalu</label> <br />
            <input type="radio" name="riwayat" id="1-bulan-lalu" />
            <label htmlFor="1-bulan-lalu">1 Bulan Lalu</label>
          </div>
        </form>
      </div>

      <Table data={data} columns={columns} />

      <ViewImagePotrait
        key={data.id}
        data={viewImagePotrait}
        visible={viewImagePotrait != undefined}
        onClose={() => setViewImagePotrait(undefined)}
      />
      <ViewRiwayatSewa
        key={data.id}
        data={viewBarang}
        visible={viewBarang != undefined}
        onClose={() => setViewBarang(undefined)}
      />
    </div>
  );
};

export default RiwayatSewa;
