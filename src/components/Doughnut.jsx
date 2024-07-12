import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function Activity() {
  const data = {
    labels: [""],
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#7eb8d9", "#d9edf8"],
        hoverBackgroundColor: ["#7eb8d9", "#d9edf8"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}
