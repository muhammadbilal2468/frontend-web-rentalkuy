import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { LogoImg2 } from "../../../../asset";
import { Table, ViewBarang3 } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import ViewBarangPenyewa from "../../../../components/ViewBarang3/ViewBarang3";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./Selesai.css";

const Selesai: React.FC = () => {
  const [viewSelesaiSewa, setViewSelesaiSewa] = useState<Photo>();

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
      dataIndex: "title",
    },
    {
      title: "Nama Barang",
      dataIndex: "id",
    },
    {
      title: "Gambar",
      dataIndex: "id",
      render: () => {
        return <img src={LogoImg2} alt="" style={{ height: 50, width: 100 }} />;
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
      title: "Status",
      dataIndex: "id",
      render: (data) => {
        return <p className="selesai">Selesai</p>;
      },
    },
    {
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="btn-selesai">
            <div className="btn-eye" onClick={() => setViewSelesaiSewa(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <h2>Daftar Selesai Sewa Barang</h2>
      <Table columns={columns} data={data} />

      <ViewBarang3
        data={viewSelesaiSewa}
        visible={viewSelesaiSewa != undefined}
        onClose={() => setViewSelesaiSewa(undefined)}
        status="Telah Selesai Sewa"
      />
    </>
  );
};

export default Selesai;
