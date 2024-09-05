import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import StackedBarChart from "./StackedBar";

export default function LanguagesCard({ languageData }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          border: "solid",
          borderWidth: "2px",
          borderColor: "#98c1d9",
          borderRadius: "16px",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "#10151f",
            }}
          >
            MOST USED LANGUAGES
          </Typography>
          <CardContent>
            <StackedBarChart languageData={languageData} />
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}

LanguagesCard.propTypes = {
  percentage: PropTypes.number,
  contributions: PropTypes.number,
};
