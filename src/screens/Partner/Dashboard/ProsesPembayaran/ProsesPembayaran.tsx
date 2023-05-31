import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  Table,
  ViewBarang2,
  ViewImagePotrait,
  ViewProofPayment,
} from "../../../../components";
import { TableColumn } from "../../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../../service/api";
import { Photo } from "../../../../types/Photo";
import "./ProsesPembayaran.css";

const ProsesPembayaran: React.FC = () => {
  const [viewProses, setViewProses] = useState<Photo>();
  const [viewImagePotrait, setViewImagePotrait] = useState<Photo>();
  const [alertProofPayment, setAlertProofPayment] = useState(false);

  const toggleProofPayment = () => {
    alertProofPayment === true
      ? setAlertProofPayment(false)
      : setAlertProofPayment(true);
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
      title: "Bukti Pembayaran",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="bukti-pembayaran">
            <img
              src={data.url}
              alt=""
              width={30}
              height={30}
              onClick={() => setViewImagePotrait(data)}
            />
            <p onClick={toggleProofPayment}>Lunas</p>
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "id",
      render: (data) => {
        return (
          <div className="btn-proses">
            <div className="btn-eye" onClick={() => setViewProses(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <h2>Daftar Proses Pembayaran</h2>
      <Table columns={columns} data={data} />

      <ViewImagePotrait
        key={data.id}
        data={viewImagePotrait}
        visible={viewImagePotrait != undefined}
        onClose={() => setViewImagePotrait(undefined)}
      />

      <ViewProofPayment
        visible={alertProofPayment}
        onClose={toggleProofPayment}
      />

      <ViewBarang2
        key={data.id}
        data={viewProses}
        visible={viewProses !== undefined}
        onClose={() => setViewProses(undefined)}
        status="Pengajuan Sewa"
      />
    </>
  );
};

export default ProsesPembayaran;
