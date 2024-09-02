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
        backgroundColor: ["#ee6c4d", "#bfbdbd"],
        borderWidth: 0,
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();

      const fontSize = (height / 4).toFixed(2);
      ctx.font = `bold ${fontSize}px 'Slabo 27px', serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#10151f";

      const text = `${doughnutFormatted}%`;
      const textX = width / 2;
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  const options = {
    rotation: -135,
    circumference: 270,
    cutout: "80%",
    maintainAspectRatio: true,
    responsive: true,
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
     
    },
  };
  return (
    <>
      <Doughnut
        data={data}
        options={options}
        plugins={[centerTextPlugin]} 
      />
    </>
  );
}
