import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartOptions,
} from "chart.js";
import Image from "next/image";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}

const CustomerAmount: FC = () => {
  const chartInfo = [
    {
      label: "Brooklyn Studio Membership",
      value: 5702,
      color: "#A1EDB0",
      data: [65, 59, 80, 81, 56, 55, 40],
      dir: "up",
    },
    {
      label: "Queens Gym Membership",
      value: 3971,
      color: "#41BFDD",
      data: [65, 59, 80, 81, 56, 55, 40],
      dir: "up",
    },
    {
      label: "Yonkers Warehouse Membership",
      value: 251,
      color: "#F05E83",
      data: [65, 59, 80, 81, 56, 55, 40],
      dir: "down",
    },
  ];

  const data: ChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Brooklyn Studio Membership",
        data: [65, 84, 80, 45, 35, 55, 80],
        fill: false,
        borderColor: "#A1EDB0",
        backgroundColor: "#A1EDB0",
        tension: 0,
      },
      {
        label: "Queens Gym Membership",
        data: [56, 84, 59, 150, 35, 12, 85],
        fill: false,
        borderColor: "#41BFDD",
        backgroundColor: "#41BFDD",
        tension: 0,
      },
      {
        label: "Yonkers Warehouse Membership",
        data: [85, 75, 46, 84, 22, 74, 87],
        fill: false,
        borderColor: "#F05E83",
        backgroundColor: "#F05E83",
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleFont: {
          family: "Jost",
        },
        bodyFont: {
          family: "Jost",
        },
      },
    },
    scales: {
      x: {
        border: {
          color: "#FFF",
        },
        ticks: {
          font: {
            family: "Jost",
          },
          color: "#FFF",
        },
        grid: {
          display: false,
        },
      },
      y: {
        border: {
          color: "#FFF",
        },
        ticks: {
          font: {
            family: "Jost",
          },
          color: "#FFF",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="font-jost grid gap-4 bg-black rounded-sm shadow-lg p-6">
      <div className="flex items-start">
        <h2 className="flex-grow font-medium text-2xl">Customer Amount</h2>
        <ul className="flex gap-4">
          {chartInfo.map((item, i: number) => (
            <li
              key={i}
              className="w-full max-w-[272px]  flex items-start gap-2"
            >
              <span
                className="inline-block w-6 h-6 rounded-full"
                style={{ background: item.color }}
              />
              <div>
                <p className="text-base">
                  <span className="font-medium whitespace-nowrap">
                    {item.label}:
                  </span>
                  <p className="flex items-center gap-1">
                    <span>{item.value}</span>
                    {item.dir === "up" ? (
                      <Image
                        src="/up.png"
                        width={24}
                        height={24}
                        alt="Direction"
                      />
                    ) : (
                      <Image
                        src="/down.png"
                        width={24}
                        height={24}
                        alt="Direction"
                      />
                    )}
                  </p>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div className="w-full h-[300px]">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CustomerAmount;
