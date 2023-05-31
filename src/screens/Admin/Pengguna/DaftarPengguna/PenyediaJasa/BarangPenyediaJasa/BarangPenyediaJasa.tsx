import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ViewBarang1 from "../../../../../../components/ViewBarang1/ViewBarang1";
import { httpRequestJsonplc } from "../../../../../../service/api";
import { Photo } from "../../../../../../types/Photo";
import "./BarangPenyediaJasa.css";

const BarangPenyediaJasa: React.FC = () => {
  const [viewBarang, setViewBarang] = useState<Photo>();

  const photos = useQuery<AxiosResponse<Photo[]>>(
    "photos",
    async () => await httpRequestJsonplc.get("/albums/1/photos")
  );
  console.log("photos", photos);

  if (photos.isLoading) {
    <span>Loading......</span>;
  }
  return (
    <div className="bpj">
      <h2 className="title">Pengguna</h2>
      <div className="bpj-content">
        <i className="fa-solid fa-chevron-left back"></i>
        <h3>Pengguna Penyedia Jasa Sewa</h3>

        <p className="kategori">Kategori</p>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Pencarian Barang" />
        </div>

        <div className="product">
          {photos.data?.data.map((photo) => {
            // const barang = "title";
            return (
              <div
                className="card-product"
                onClick={() => setViewBarang(photo)}
              >
                <img src={photo.url} alt="" />
                <div className="desc">
                  <div className="desc-left">
                    <p className="title">mobil</p>
                    <p className="address">
                      <i className="fa-sharp fa-solid fa-location-dot"></i>Jalan
                      Jalan
                    </p>
                  </div>
                  <div className="desc-right">
                    <p className="price">Rp.100.000</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ViewBarang1
          data={viewBarang}
          visible={viewBarang != undefined}
          onClose={() => setViewBarang(undefined)}
        />
      </div>
    </div>
  );
};

export default BarangPenyediaJasa;
