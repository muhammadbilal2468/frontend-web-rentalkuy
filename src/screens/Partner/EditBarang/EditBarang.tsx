import { AxiosResponse } from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { EditBrgImg, UbahImg } from "../../../asset";
import { Alert1Btn } from "../../../components";
import { productService } from "../../../service";
import { JasaDetailMyProductResponse } from "../../../types/JasaDetailMyProducts";
import {
  JasaEditMyProductRequest,
  JasaEditMyProductResponse,
} from "../../../types/JasaEditMyProducts";
import "./EditBarang.css";

const EditBarang: React.FC = () => {
  const [param, setParam] = useSearchParams();
  // const [dataAwal, setDataAwal] = useState<JasaDetailMyProductResponse>();
  const [alertUbah, setAlertUbah] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [imgUpload, setImgUpload] = useState<any>(null);
  const [data, setData] = useState<JasaEditMyProductRequest>({
    name: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    setImgUpload(files[0]);
    const imgPreview = URL.createObjectURL(files[0]);
    setImage(imgPreview);
  };

  const toggleAlertTambah = () => {
    setAlertUbah((prevState) => !prevState);
  };

  const uidbarang = param.get("uid_barang");
  console.log(uidbarang);

  const myDetailProduct = useQuery<AxiosResponse<JasaDetailMyProductResponse>>(
    "myProduct",
    async () => await productService.jasaDetailMyProduct(uidbarang)
  );

  const dataDetail = myDetailProduct.data?.data;
  console.log("data detail", dataDetail);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", imgUpload);
      formData.append("quantity", data.quantity);
      console.log(e);
      const editProduct = await productService.jasaEditMyProduct(
        formData as any as JasaEditMyProductRequest,
        uidbarang
      );
      console.log(editProduct);
      toggleAlertTambah();
    } catch (error: any) {
      if (error.response.status === 400) {
        alert("eh salah co");
        console.log(error.response.msg);
      }
    }
  };

  return (
    <div className="edit-barang">
      <div className="left">
        <h2>Edit Barang</h2>
        <form>
          <div className="input-box">
            <label htmlFor="">Tambah Foto Barang</label>
            <input
              className=""
              type="file"
              name="image"
              value={dataDetail?.image}
              onChange={onChangeImg}
            />
            <br />
            {image == undefined ? (
              <></>
            ) : (
              <img src={image} alt="" style={{ width: 100, height: 100 }} />
            )}
          </div>
          <div className="input-box">
            <label htmlFor="">Nama Barang</label>
            <input
              className="input text"
              type="text"
              name="name"
              value={dataDetail?.name}
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Deskripsi Barang</label>
            <input
              className="input desc text"
              type="text"
              name="description"
              onChange={onChange}
              value={dataDetail?.description}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Stok Barang</label>
            <input
              className="input text"
              type="text"
              name="quantity"
              onChange={onChange}
              value={dataDetail?.quantity}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Harga Sewa</label>
            <input
              name="price"
              className="input text"
              value={dataDetail?.price}
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <div></div>
            <button type="submit">Perbarui</button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src={EditBrgImg} alt="" />
      </div>
      <Alert1Btn
        img={UbahImg}
        visible={alertUbah}
        title="Berhasil memperbarui"
        desc="Barang berhasil Diperbarui "
        text="Selesai"
        link="/partner/barang-saya"
      />
    </div>
  );
};

export default EditBarang;
