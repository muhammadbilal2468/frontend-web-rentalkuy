import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Sewa = {
  batal: 250,
  berhasil: 750,
};

export const data = {
  labels: ["Pembatalan Sewa", "Sewa"],
  datasets: [
    {
      label: "Nda tau apa Fungsinya",
      data: [Sewa.batal, Sewa.berhasil],
      backgroundColor: ["#FFA41D", "#1676AD"],
      borderColor: ["#FFA41D", "#1676AD"],
      borderWidth: 5,
    },
  ],
};

export function App() {
  return <Doughnut data={data} />;
}

export default Doughnut;
