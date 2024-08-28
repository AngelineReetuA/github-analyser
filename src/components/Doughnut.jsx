import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

export default function Activity({ doughnut }) {
  const doughnutFormatted = Math.round(doughnut);

  const data = {
    datasets: [
      {
        data: [doughnutFormatted, 100 - doughnutFormatted],
        backgroundColor: ["#7eb8d9", "#d9edf8"],
      },
    ],
  };

  const CenterTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 574).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const text = chart.config.options.plugins.centerText.text;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      innerLabel: {
        display: true,
      },
      centerText: {
        text: `${doughnutFormatted}%`,
      },
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} plugins={[CenterTextPlugin]} />
    </>
  );
}
