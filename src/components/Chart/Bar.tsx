import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Jumlah Transaksi",
    },
  },
};
const Bulan = {
  Jan: 100,
  Feb: 800,
  Mar: 700,
  Apr: 300,
  Mei: 400,
  Jun: 500,
  Jul: 1100,
  Agu: 100,
  Sep: 1200,
  Okt: 600,
  Nov: 200,
  Des: 1000,
};
const labelBar = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const dataBar = {
  labelBar,
  datasets: [
    {
      label: "Dataset 1",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: Bulan,
      backgroundColor: "rgb(255, 164, 29)",
    },
    {
      label: "Dataset 2",
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: Bulan,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function App() {
  return (
    <>
      <Bar options={options} data={dataBar} />;
    </>
  );
}

export default Bar;
