import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";

export default function HorizontalStatCard({ color, name, value }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: `${color}`,
        height: "120px",
        width: "520px",
        justifyContent:"center",
        borderRadius: "16px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "20px"
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "50px",
            fontWeight: "bolder",
            color: "#10151f",
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

HorizontalStatCard.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
