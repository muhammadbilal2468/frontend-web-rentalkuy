import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { HapusImg } from "../../../asset";
import { Alert2Btn, Table, ViewBarang1Btn } from "../../../components";
import { TableColumn } from "../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../service/api";
import { Photo } from "../../../types/Photo";
import "./BarangArsip.css";

const BarangArsip: React.FC = () => {
  const [alertHapus, setAlertHapus] = useState<boolean>(false);
  const [viewBarang, setViewBarang] = useState<Photo>();

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
        return <img src={data.url} alt="" width={30} height={30} />;
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "id",
    },
    {
      title: "Stok",
      dataIndex: "id",
    },
    {
      title: "Harga",
      dataIndex: "id",
    },
    {
      title: "status",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="button-menu-ba">
            <div className="button-ba" onClick={() => setViewBarang(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="button-ba">
              <i className="fa-regular fa-trash-can"></i>
            </div>
            <div className="button-ba">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        );
      },
    },
  ];

  const toggleAlertHapus = () => {
    setAlertHapus((prevState) => !prevState);
  };

  return (
    <>
      <h2>Barang Arsip</h2>
      <Table columns={columns} data={data} />

      {/* <Alert2Btn
        img={HapusImg}
        visible={alertHapus}
        title="Hapus barang ?"
        desc="Barang yang sudah di hapus tidak bisa kembali lagi, Benar ingin menghapus ?"
        button1="Tidak"
        button2="Simpan"
      /> */}

      <ViewBarang1Btn
        key={data.id}
        data={viewBarang}
        visible={viewBarang != undefined}
        onClose={() => setViewBarang(undefined)}
        button="Tampilkan"
      />
    </>
  );
};

export default BarangArsip;
