import React, { FC } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const GymRevenue: FC = () => {
  const chartInfo = [
    { label: "Brooklyn Studio", value: 68994.13, color: "#A1EDB0" },
    { label: "Queens Gym", value: 45129.93, color: "#41BFDD" },
    { label: "Yonkers Warehouse", value: 19992.01, color: "#F05E83" },
  ];

  const data = {
    labels: chartInfo.map((item) => item.label),
    datasets: [
      {
        label: "$",
        data: chartInfo.map((item) => item.value),
        backgroundColor: chartInfo.map((item) => item.color),
        borderColor: "#1A2239",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full font-jost grid gap-4 bg-black rounded-sm shadow-lg p-6">
      <h2 className="font-medium text-2xl">All Gym Revenue</h2>
      <div className="flex items-center gap-6">
        <div className="w-[150px] h-[150px]">
          <Pie data={data} width={150} height={150} options={options} />
        </div>
        <ul className="grid gap-3">
          {chartInfo.map((item, i: number) => (
            <li key={i} className="flex items-center gap-2">
              <span
                className="inline-block w-6 h-6 rounded-full"
                style={{ background: item.color }}
              />
              <p className="text-base">
                <span className="font-medium">{item.label}</span>: ${item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GymRevenue;
