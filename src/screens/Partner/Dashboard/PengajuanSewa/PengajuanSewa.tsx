import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { AlertSuccessVerImg } from "../../../../asset";
import { Alert1Btn, Table, ViewBarang2Btn } from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./PengajuanSewa.css";

const PengajuanSewa: React.FC = () => {
  const [viewPengajuan, setViewPengajuan] = useState<Photo>();
  const [alertPersetujuan, setAlertPersetujuan] = useState(false);

  const toggleAlertPersetujuan = () => {
    alertPersetujuan === true
      ? setAlertPersetujuan(false)
      : setAlertPersetujuan(true);
  };

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
          <div className="btn-pengajuan">
            <div className="btn-eye" onClick={() => setViewPengajuan(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="btn-no">
              <i className="fa-regular fa-xmark"></i>
            </div>
            <div className="btn-yes" onClick={toggleAlertPersetujuan}>
              <i className="fa-regular fa-check"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <h2>Daftar Pengajuan Sewa</h2>
      <Table columns={columns} data={data} />

      <ViewBarang2Btn
        key={data.id}
        data={viewPengajuan}
        visible={viewPengajuan != undefined}
        onClose={() => setViewPengajuan(undefined)}
      />
      <Alert1Btn
        visible={alertPersetujuan}
        img={AlertSuccessVerImg}
        title="Menuggu Pembayaran"
        desc="Menunggu penyewa malakukan pembayaran"
        text="Selesai"
        link="/partner/dashboard"
      />
    </>
  );
};

export default PengajuanSewa;
