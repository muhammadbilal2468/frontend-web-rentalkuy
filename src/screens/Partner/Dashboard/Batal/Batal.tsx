import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { HapusImg, LogoImg2 } from "../../../../asset";
import { Alert2Btn, Table } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import ViewBarangPenyewa from "../../../../components/ViewBarang3/ViewBarang3";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./Batal.css";

const Batal: React.FC = () => {
  const [viewBatalSewa, setViewBatalSewa] = useState<Photo>();
  const [alertHapusBarang, setAlertHapusBarang] = useState(false);

  const toggleAlertHapus = () => {
    alertHapusBarang === true
      ? setAlertHapusBarang(false)
      : setAlertHapusBarang(true);
  };

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
      render: (data) => {
        return <img src={data.url} alt="" style={{ height: 30, width: 30 }} />;
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
          <div className="btn-batal">
            <div className="btn-eye" onClick={() => setViewBatalSewa(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="btn-delete" onClick={toggleAlertHapus}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="batal">
      <h2>Daftar Pembatalan Sewa</h2>
      <div className="input-radio-batal">
        <input type="radio" id="semua" name="filterbatal" value="" />
        <label htmlFor="semua">semua</label> <br />
        <input type="radio" id="tidak-bayar" name="filterbatal" value="" />
        <label htmlFor="tidak-bayar">Tidak Melakukan Pembayaran</label> <br />
        <input type="radio" id="menolak-sewa" name="filterbatal" value="" />
        <label htmlFor="menolak-sewa">Penyedia Menolak Mau Sewa</label>
      </div>

      <Table columns={columns} data={data} />

      <ViewBarangPenyewa
        data={viewBatalSewa}
        visible={viewBatalSewa != undefined}
        onClose={() => setViewBatalSewa(undefined)}
        status="Batal Sewa"
      />

      <Alert2Btn
        visible={alertHapusBarang}
        img={HapusImg}
        title="Hapus Barang Pembatalan ?"
        desc="Daftar barang pembatalan yang sudah dihapus tidak bisa kembali lagi, Benar ingin menghapus ?"
        button1="Tidak"
        button2="Hapus"
        link1="/partner/dashboard"
        link2="/partner/dashboard"
      />
    </div>
  );
};

export default Batal;
