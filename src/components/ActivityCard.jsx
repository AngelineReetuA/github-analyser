import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import Activity from "./Doughnut";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function ActivityCard() {
  const presentYear = new Date().getFullYear();
  const { data, setData } = useContext(DataContext);
  const initialAnalysisData = data.initialAnalysis;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "250px",
          backgroundColor: "#e0fbfc",
          borderRadius: "16px",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              fontWeight: "bolder",
              justifyContent: "end",
              color: "#10151f",
            }}
          >
            YEARLY ACTIVITY
          </Typography>
          <Typography
            sx={{
              display: "flex",
              fontSize: "15px",
              justifyContent: "end",
              color: "#10151f",
            }}
          >
            <b>Contributions in {presentYear}:</b>&nbsp;{initialAnalysisData.statcardData.yearlyContributions}
          </Typography>
          <CardContent style={{ height: "250px" }}>
            <Activity doughnut={initialAnalysisData.statcardData.doughnut} />
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}

ActivityCard.propTypes = {
  percentage: PropTypes.number,
  contributions: PropTypes.number,
};
