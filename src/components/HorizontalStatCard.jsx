import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function HorizontalStatCard({ color, name, value, overlay: Icon }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: `${color}`,
        height: "120px",
        width: "520px",
        justifyContent: "center",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "20px",
          position: "relative",
          zIndex: 1,
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
            fontSize: "70px",
            fontWeight: "bolder",
            color: "#10151f",
            fontFamily: "'Slabo 27px', serifs",
          }}
        >
          {value}
        </Typography>
      </CardContent>
      <Box
        sx={{
          fontSize: "200px",
          color: "rgba(255, 255, 255, 0.7)",
          position: "absolute",
          right: "20px",
          top: "90%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      >
        <Icon sx={{ fontSize: "inherit", color: "inherit" }} />
      </Box>
    </Card>
  );
}

HorizontalStatCard.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.element,
};
