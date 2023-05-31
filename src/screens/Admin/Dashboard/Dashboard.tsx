import React from "react";
import Bar, { dataBar, options } from "../../../components/Chart/Bar";
import Doughnut, { data } from "../../../components/Chart/Doughnut";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="dashboard">
        <div className="status-brg">
          <h2>Status Barang</h2>
          <div className="box-sb">
            <div className="box-sb1">
              <p>Sedang Proses sewa</p>
              <h3>10 Barang</h3>
            </div>
            <div className="box-sb2">
              <p>Berhasil Sewa barang</p>
              <h3>100 Barang</h3>
            </div>
            <div className="box-sb3">
              <p>Sewa barang dibatalkan</p>
              <h3>10 Barang</h3>
            </div>
          </div>
        </div>
        <div className="analisis">
          <h2>Analisis</h2>
          <div className="analisis-data">
            <div className="jt">
              <h3>Jumlah Transaksi</h3>
              <select className="select">
                <option value="Tahun 2021">Tahun 2021</option>
                <option value="Tahun 2022">Tahun 2022</option>
                <option value="Tahun 2023">Tahun 2023</option>
              </select>
              <div className="chart">
                <Bar options={options} data={dataBar} className="Bar" />
              </div>
            </div>
            <div className="tbt">
              <h3>Total Pembayaran Transaksi</h3>
              <select className="select">
                <option value="Tahun 2021">Tahun 2021</option>
                <option value="Tahun 2022">Tahun 2022</option>
                <option value="Tahun 2023">Tahun 2023</option>
              </select>
              <div className="chart">
                <Doughnut data={data} className="Doughnut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
