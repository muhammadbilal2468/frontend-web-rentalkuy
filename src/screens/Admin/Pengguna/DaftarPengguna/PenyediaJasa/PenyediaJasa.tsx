import { AxiosResponse } from "axios";
import React, { useState } from "react";
import "./PenyediaJasa.css";
import { useQuery } from "react-query";
import { Table } from "../../../../../components";
import { TableColumn } from "../../../../../components/Table/Table";
import httpRequest from "../../../../../service/api";
import { Link } from "react-router-dom";
import { AdminJasa } from "../../../../../types/AdminJasa";
import { userService } from "../../../../../service";

const PenyediaJasa: React.FC = () => {
  const jasa = useQuery<AxiosResponse<AdminJasa>>(
    "jasa",
    async () => await httpRequest.get("/datas/jasa")
  );
  console.log("jasa", jasa);

  if (jasa.isLoading) {
    <span>Loading......</span>;
  }

  if (!jasa.data?.data) return <span>Data Not Found</span>;

  const data = jasa.data?.data;
  const columns: TableColumn<AdminJasa>[] = [
    {
      title: "",
      dataIndex: "uid",
      render: () => {
        let text = "";
        let i;
        for (i = 0; i <= 10; i++) {
          text += "Angka " + i + "<br>";
          return <p>{i++}</p>;
        }
      },
    },
    {
      title: "Nama Badan Usaha",
      dataIndex: "company_name",
    },
    {
      title: "Nomor Perusahaan",
      dataIndex: "company_number",
    },
    {
      title: "Email",
      dataIndex: "company_email",
    },
    {
      title: "Alamat",
      dataIndex: "address",
    },
    {
      title: "",
      dataIndex: "uid",
      render: (data) => {
        const uidjasa = data.uid;

        const deletes = async () => {
          try {
            const deleteJasa = await userService.deleteJasa(uidjasa);
            console.log("delete jasa", deleteJasa);
            alert("Berhasil Mengahapus Akun Jasa");
          } catch (error: any) {
            if (error.reponse.status == 400) {
              console.log("eror");
            }
          }
        };

        return (
          <div className="button-menu-pj">
            <Link to="/admin/daftar-pengguna/view-penyedia-jasa">
              <div className="button-pj">
                <i className="fa-regular fa-eye"></i>
              </div>
            </Link>
            <div className="button-pj" onClick={deletes}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="pj">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default PenyediaJasa;
