import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box } from "@mui/material";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  ChartDataLabels
);

export default function StackedBarChart({ languageData }) {
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
      tooltip: {
        display: false,
      },
    },
  };

  return (
    <Box style={{ height: "230px", width:"180px" }}>
      <Bar data={languageData} options={options2}/>
    </Box>
  );
}
