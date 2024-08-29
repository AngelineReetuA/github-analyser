import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function StatCard({ statName, children }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ alignSelf: "center", justifyContent: "center" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              height: "160px",
              width: "120px",
              fontSize: "60px",
              fontWeight: "bolder",
              justifyContent:"center"
            }}
          >
            {children}
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: "center" }}>
          <Typography
            sx={{
              fontSize: "15px",
              color: "rgba(0,0,0,0.6)",
              display: "flex",
            }}
          >
            {statName}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}

StatCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  statName: PropTypes.string.isRequired,
  cardPadding: PropTypes.string,
};
