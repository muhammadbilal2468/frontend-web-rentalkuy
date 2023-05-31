import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EditBrgImg, UbahImg } from "../../../asset";
import { Alert1Btn } from "../../../components";
import { productService } from "../../../service";
import { JasaAddMyProductRequest } from "../../../types/JasaAddMyProducts";
import "./TambahBarang.css";

const TambahBarang: React.FC = () => {
  const navigate = useNavigate();
  const [alertTambah, setAlertTambah] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [imgUpload, setImgUpload] = useState<any>(null);
  const [data, setData] = useState<JasaAddMyProductRequest>({
    name: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
    categoryId: "",
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

  const onChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setData((prev) => ({
      ...prev, // ... untuk mengambil object yang diklik (replace)
      categoryId: value,
    }));
  };

  const toggleAlertTambah = () => {
    setAlertTambah((prevState) => !prevState);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("image", imgUpload);
      formData.append("quantity", data.quantity);
      formData.append("categoryId", data.categoryId);
      console.log(e);
      const addProduct = await productService.jasaAddMyProduct(
        formData as any as JasaAddMyProductRequest
      );
      console.log(addProduct);
      toggleAlertTambah();
    } catch (error: any) {
      if (error.response.status === 400) {
        alert("eh salah co");
        console.log(error.response.msg);
      }
    }
  };

  // console.log("data", data);

  return (
    <div className="tambah-barang">
      <div className="left">
        <h2>Tambah Barang</h2>
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label htmlFor="">Tambah Foto Barang</label>
            <div className="file-foto">
              <input
                name="image"
                className=""
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onChangeImg}
              />{" "}
              <br />
              {image == undefined ? (
                <></>
              ) : (
                <img src={image} alt="" style={{ width: 100, height: 100 }} />
              )}
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="">Nama Barang</label>
            <input
              name="name"
              className="input text"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Deskripsi Barang</label>
            <input
              name="description"
              className="input desc text"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="">Stok Barang</label>
            <input
              name="quantity"
              className="input text"
              type="text"
              onChange={onChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="">Kategori Barang</label>
            <select
              className="select text"
              onChange={(e) => onChangeOption(e)}
              name="categoryId"
            >
              <option value="" selected hidden>
                Kategori Barang
              </option>
              <option value="47675e9a-ffcb-4a06-a5de-844cebbf6b70">
                Pakaian
              </option>
              <option value="3f6fcb1f-47f7-4efb-904d-51a7ca45848f">
                Elektronik
              </option>
              <option value="667291eb-c090-4c07-84f3-e02ba6cdac9f">
                Kendaraan
              </option>
              <option value="9a741a5b-08f5-4d2e-8e3a-927c3cb20a29">
                Peralatan Bayi
              </option>
              <option value="1d1ae77b-3063-460b-9cd3-8ab6836b5f2c">
                Outdor
              </option>
              <option value="65e0ad6f-5b04-40f2-9439-94553262f0a0">
                Peralatan Rumah
              </option>
              <option value="eb0e0a1e-f83b-48e5-9c38-e721428ff09f">
                Olahraga
              </option>
              <option value="b2bb8795-c773-4999-9a7d-19a556c9bd42">
                Gedung
              </option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="">Harga Sewa</label>
            <input name="price" className="input text" onChange={onChange} />
          </div>
          <div className="input-box">
            <div></div>
            <button type="submit">Tambah</button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src={EditBrgImg} alt="" />
      </div>

      <Alert1Btn
        img={UbahImg}
        visible={alertTambah}
        title="Berhasil Menambahkan Barang"
        desc="Anda berhasil menambahkan Daftar barang sewaan anda"
        text="Selesai"
        link="/partner/barang-saya"
      />
    </div>
  );
};

export default TambahBarang;
