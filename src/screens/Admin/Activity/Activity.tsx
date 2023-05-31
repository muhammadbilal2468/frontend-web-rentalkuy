import "./Activity.css";
import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { Table, ViewProofPayment } from "../../../components";
import { useQuery } from "react-query";
import { TableColumn } from "../../../components/Table/Table";
import { httpRequestJsonplc } from "../../../service/api";
import { Photo } from "../../../types/Photo";
import ViewImagePotrait from "../../../components/ViewImagePotrait/ViewImagePotrait";
import ViewBarangPenyewa from "../../../components/ViewBarang3/ViewBarang3";

const Activity: React.FC = () => {
  const [viewBarang, setViewBarang] = useState<Photo>();
  const [viewImagePotrait, setViewImagePotrait] = useState<Photo>();
  const [alertProofPayment, setAlertProofPayment] = useState(false);

  const toggleProofPayment = () => {
    alertProofPayment === true
      ? setAlertProofPayment(false)
      : setAlertProofPayment(true);
  };

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
      title: "No",
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
      render: () => {
        return <p className="tgl-pngembalian-act" onClick={toggleProofPayment}>04:10:10</p>;
      },
    },
    {
      title: "Bukti Pembayaran",
      dataIndex: "url",
      render: (data) => {
        return (
          <img
            src={data.url}
            onClick={() => setViewImagePotrait(data)}
            alt=""
            width={30}
            height={30}
            className="img-act"
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
            <div className="button-act" onClick={() => setViewBarang(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="akt">
      <h2 className="title">Aktifitas</h2>
      <div className="akt-btn">
        {/* <NavLink
          className={(btnData) => (btnData.isActive ? "btn-dp-active" : "")}
          to="/admin/daftar-pengguna/pengguna-sewa"
          style={{ textDecoration: "none" }}
        > */}
        <div className="btn-akt">
          <p>Proses Sewa Sedang Berjalan</p>
        </div>
        {/* </NavLink> */}
      </div>
      <Table data={data} columns={columns} />

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
      <ViewBarangPenyewa
        key={data.id}
        data={viewBarang}
        visible={viewBarang != undefined}
        onClose={() => setViewBarang(undefined)}
        status="Telah Selesai Sewa"
      />
    </div>
  );
};

export default Activity;
