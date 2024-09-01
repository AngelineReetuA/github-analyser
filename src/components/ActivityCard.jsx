import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Activity from "./Doughnut";

export default function ActivityCard({ percentage, contributions }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "250px",
          width: "400px",
          backgroundColor: "#e0fbfc",
          borderRadius: "16px"
        }}
      >
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              fontWeight: "bolder",
              justifyContent: "end",
              color:"#10151f"
            }}
          >
            YEARLY ACTIVITY
          </Typography>
          <Typography
            sx={{
              display: "flex",
              fontSize: "15px",
              justifyContent: "end",
              color:"#10151f"
            }}
          >
            Contributions: {contributions}
          </Typography>
          <CardContent style={{ height: "250px" }}>
            <Activity doughnut={percentage} />
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
