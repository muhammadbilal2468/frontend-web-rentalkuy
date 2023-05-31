import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { DashboardPImg } from "../../../asset";
import { ViewBarang1Btn } from "../../../components";
import { productService } from "../../../service";
import { JasaMyProductResponse } from "../../../types/JasaMyProduct";
import "./Dashboard.css";

const DashboardPartner: React.FC = () => {
  const [viewBarang, setViewBarang] = useState<JasaMyProductResponse>();

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

  const uid = localStorage.getItem("@uid");

  const myProduct = useQuery<AxiosResponse<JasaMyProductResponse[]>>(
    "myProduct",
    async () => await productService.jasaGetMyProduct(uid)
  );

  const jumlah = myProduct.data?.data.length;
  console.log("jumlah", jumlah);

  console.log("myProduct", myProduct);

  if (myProduct.isLoading) {
    <span>Loading......</span>;
  }
  return (
    <div className="dashboard-p">
      <div className="header-dp">
        <div className="img">
          <img src={DashboardPImg} alt="" />
        </div>
        <div className="barang">
          <Link to="/partner/dashboard/persetujuan">
            <div className="jml-barang">
              <div className="status">
                <p>Pengajuan Sewa</p>
              </div>
              <p>5</p>
              <p>Barang</p>
            </div>
          </Link>
          <Link to="/partner/dashboard/proses-pembayaran">
            <div className="jml-barang">
              <div className="status">
                <p>Proses Pembayaran</p>
              </div>
              <p>5</p>
              <p>Barang</p>
            </div>
          </Link>
          <Link to="/partner/dashboard/sedang-disewa">
            <div className="jml-barang">
              <div className="status">
                <p>Sedang di sewa</p>
              </div>
              <p>14</p>
              <p>Barang</p>
            </div>
          </Link>
          <Link to="/partner/dashboard/selesai">
            <div className="jml-barang">
              <div className="status">
                <p className="bold">Selesai</p>
              </div>
              <p>20</p>
              <p>Barang</p>
            </div>
          </Link>
          <Link to="/partner/dashboard/batal">
            <div className="jml-barang">
              <div className="status">
                <p className="bold">Batal</p>
              </div>
              <p>20</p>
              <p>Barang</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="product">
        {myProduct.data?.data.map((product) => {
          // const barang = "title";
          return (
            <div className="card-product">
              <img src={product.url} alt="" />
              <div className="desc">
                <p className="barang">{product.name}</p>
                <div className="alamat">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>jalan</p>
                </div>
                <div className="harga-detail">
                  <p className="harga">Rp.{formatRupiah(product.price)}</p>
                  <i
                    className="fa-solid fa-arrow-right"
                    onClick={() => setViewBarang(product)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ViewBarang1Btn
        data={viewBarang}
        visible={viewBarang != undefined}
        onClose={() => setViewBarang(undefined)}
        button="Arsipkan"
      />
    </div>
  );
};

export default DashboardPartner;
