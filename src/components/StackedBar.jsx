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
        data: [70],
        backgroundColor: "#7eb8d9",
        datalabels: {
          color: "black",
          anchor: "end",
          align: "start",
          offset: -10,
          font: {
            weight: "bold",
          },
          formatter: () => "Javascript",
        },
      },
      {
        label: "HTML",
        data: [30],
        backgroundColor: "#d9edf8",
        datalabels: {
          color: "black",
          anchor: "end",
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
    <div style={{ height: "290px", width: "180px" }}>
      <Bar data={data2} options={options2} />
    </div>
  );
}
