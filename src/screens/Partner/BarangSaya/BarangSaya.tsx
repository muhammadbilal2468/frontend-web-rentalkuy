import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { HapusImg } from "../../../asset";
import {
  Alert1Btn,
  Alert2Btn,
  Table,
  ViewBarang1Btn,
} from "../../../components";
import { TableColumn } from "../../../components/Table/Table";
import { productService } from "../../../service";
import { JasaMyProductResponse } from "../../../types/JasaMyProduct";
import "./BarangSaya.css";

const BarangSaya: React.FC = () => {
  const navigate = useNavigate();
  const [alertHapus, setAlertHapus] = useState<boolean>(false);
  const [viewBarang, setViewBarang] = useState<JasaMyProductResponse>();
  const [alertHapusBarang, setAlertHapusBarang] = useState(false);

  const toggleAlertHapus = () => {
    alertHapusBarang === true
      ? setAlertHapusBarang(false)
      : setAlertHapusBarang(true);
  };

  // ----------- format Rupiah
  const formatRupiah = (value: any) => {
    if (!value) return;
    return value
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/\d{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("");
  };

  // ------ API Jasa My Products -------- //
  const uid = localStorage.getItem("@uid");
  const myProduct = useQuery<AxiosResponse<JasaMyProductResponse[]>>(
    "myProduct",
    async () => await productService.jasaGetMyProduct(uid)
  );
  console.log("myProduct", myProduct);

  if (myProduct.isLoading) {
    <span>Loading......</span>;
  }

  if (!myProduct.data?.data) return <span>Data Not Found</span>;

  const data = myProduct.data?.data;

  const columns: TableColumn<JasaMyProductResponse>[] = [
    {
      title: "No",
      dataIndex: "uid",
      render: (data) => {
        return <p>1</p>;
      },
    },
    {
      title: "Nama Barang",
      dataIndex: "name",
    },
    {
      title: "Gambar",
      dataIndex: "name",
      render: (data) => {
        return <img src={data.url} alt="" width={30} height={30} />;
      },
    },
    {
      title: "Kategori",
      dataIndex: "categoryId",
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
    },
    {
      title: "Stok",
      dataIndex: "quantity",
    },
    {
      title: "Harga",
      dataIndex: "price",
      render: (myProduct) => {
        return <p>Rp.{formatRupiah(myProduct.price)}</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "name",
      render: (data) => {
        const uidbarang = data.uid;

        const deletes = async () => {
          try {
            const deleteProduct = await productService.jasaDeleteMyProduct(
              uidbarang
            );
            console.log("delete", deleteProduct);
            alert("Berhasil Hapus Barang");
          } catch (error: any) {
            if (error.response.status == 400) {
              console.log("error");
            }
          }
        };

        return (
          <div className="button-menu-bs">
            <div className="button-bs" onClick={() => setViewBarang(data)}>
              <i className="fa-regular fa-eye"></i>
            </div>
            <div className="button-bs" onClick={deletes}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
            <div
              className="button-bs"
              onClick={() => navigate(`/partner/edit-barang`)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="barang-saya">
      <Table columns={columns} data={data} />

      {/* ------Alert----- */}
      <Alert2Btn
        img={HapusImg}
        visible={alertHapus}
        title="Ingin hapus ?"
        desc="Apakah anda ingin menghapus barang sewaan anda ?"
        button1="Tidak"
        button2="Hapus"
        link1="/partner/dashboard"
        link2="/partner/dashboard"
      />

      <ViewBarang1Btn
        data={viewBarang}
        visible={viewBarang != undefined}
        onClose={() => setViewBarang(undefined)}
        button="Arsipkan"
      />
    </div>
  );
};

export default BarangSaya;
