import { Card, CardContent, Typography } from "@mui/material";
import StackedBarChart from "../sub-components/StackedBar";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function LanguagesCard() {
  const { data } = useContext(DataContext);
  const languageData = data?.initialAnalysis?.stackBarData;

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
