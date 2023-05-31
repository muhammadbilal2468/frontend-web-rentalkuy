import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Table, ViewBarang2 } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import ViewRiwayatSewa from "../../../../components/ViewBarang2/ViewBarang2";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./SedangDisewa.css";

const SedangDisewa: React.FC = () => {
  const [viewSedangSewa, setViewSedangSewa] = useState<Photo>();

  // ------ API photos dari jsonplaceholder -------- //
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
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="btn-sedang-disewa">
            <div className="btn-eye" onClick={() => setViewSedangSewa(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="btn-dikembalikan">
              <p>Dikembalikan</p>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <h2>Daftar Barang Sedang Di Sewa</h2>
      <Table columns={columns} data={data} />

      <ViewBarang2
        key={data.id}
        data={viewSedangSewa}
        visible={viewSedangSewa !== undefined}
        onClose={() => setViewSedangSewa(undefined)}
        status="Penyewa"
      />
    </>
  );
};

export default SedangDisewa;
