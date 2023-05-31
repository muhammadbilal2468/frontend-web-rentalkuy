import { AxiosResponse } from "axios";
import React, { useState } from "react";
import "./PenggunaSewa.css";
import { Table } from "../../../../../components";
import { useQuery } from "react-query";
import { TableColumn } from "../../../../../components/Table/Table";
import httpRequest, { httpRequestJsonplc } from "../../../../../service/api";
import { Link } from "react-router-dom";
import { AdminUser } from "../../../../../types/AdminUser";
import { userService } from "../../../../../service";

const PenggunaSewa: React.FC = () => {
  // ------ API photos dari jsonplaceholder
  const user = useQuery<AxiosResponse<AdminUser>>(
    "user",
    async () => await httpRequest.get("/user")
  );
  console.log("user", user);

  if (user.isLoading) {
    <span>Loading......</span>;
  }

  if (!user.data?.data) return <span>Data Not Found</span>;

  const data = user.data?.data;
  const columns: TableColumn<AdminUser>[] = [
    {
      title: "No",
      dataIndex: "name",
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
      title: "Nama Pengguna",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Nomor Induk Kependudukan",
      dataIndex: "identity_number",
    },
    {
      title: "Action",
      dataIndex: "name",
      render: (data) => {
        const uiduser = data.uid;
        const deletes = async () => {
          try {
            const deleteUser = await userService.deleteUser(uiduser);
            console.log("delete User", deleteUser);
            alert("Berhasil Menghapus Akun User");
          } catch (error: any) {
            if (error.response.status === 400) {
              console.log("eror");
            }
          }
        };
        return (
          <div className="button-menu-ps">
            <Link to={`/admin/daftar-pengguna/view-pengguna-sewa/${data.uid}`}>
              <div className="button-ps">
                <i className="fa-regular fa-eye"></i>
              </div>
            </Link>
            <div className="button-ps" onClick={deletes}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ps">
      <Table data={data} columns={columns} />
    </div>
  );
};

export default PenggunaSewa;
