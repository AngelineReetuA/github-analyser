import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box } from "@mui/material";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function StackedBarChart() {
  const data2 = {
    labels: ["Languages"],
    datasets: [
      {
        label: "Javascript",
        data: [40],
        backgroundColor: "#4e7a94",
        datalabels: {
          color: "black",
          anchor: "middle",
          align: "start",
          offset: -10,
          font: {
            weight: "bold",
          },
          formatter: () => "Javascript",
        },
      },
      {
        label: "C++",
        data: [30],
        backgroundColor: "#7eb8d9",
        datalabels: {
          color: "black",
          anchor: "middle",
          align: "start",
          offset: -10,
          font: {
            weight: "bold",
          },
          formatter: () => "C++",
        },
      },
      {
        label: "HTML",
        data: [30],
        backgroundColor: "#d9edf8",
        datalabels: {
          color: "black",
          anchor: "middle",
          align: "start",
          offset: -10,
          font: {
            weight: "bold",
          },
          formatter: () => "HTML",
        },
      },
    ],
  };

  const options2 = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
      },
    },
  };

  return (
    <Box style={{ height: "290px", width: "180px" }}>
      <Bar data={data2} options={options2} />
    </Box>
  );
}
