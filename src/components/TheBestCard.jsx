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
import GithubCard from "./GithubCard";

export default function TheBestCard({ githubData }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          width: "750px",
          borderRadius: "16px",
          border: "solid",
          borderWidth: "2px",
          borderColor: "#ee6c4d",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              fontWeight: "bolder",
              justifyContent: "start",
              color: "#10151f",
            }}
          >
            BEST WORK
          </Typography>
          <CardContent>
            <Grid container item spacing={2}>
              {githubData.map((repo) => (
                <Grid
                  key={repo.repoName}
                  item
                  direction="row"
                  xs={12}
                  sm={6}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <GithubCard
                    repoLink={repo.repoLink}
                    repoName={repo.repoName}
                    repoDesc={repo.repoDesc}
                    repoLang={repo.repoLang}
                    repoStars={parseInt(repo.repoStars)}
                    height={180}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}

TheBestCard.propTypes = {
  percentage: PropTypes.number,
  contributions: PropTypes.number,
};
