import { Card, CardContent, Grid, Typography } from "@mui/material";
import GithubCard from "../sub-components/GithubCard";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function TheBestCard() {
  const { data } = useContext(DataContext);
  
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          borderRadius: "16px",
          border: "solid",
          borderWidth: "2px",
          borderColor: "#ee6c4d",
          overflow: "scroll",
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
              {data.initialAnalysis.githubData.map((repo) => (
                <Grid
                  key={repo.repoName}
                  item
                  container
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
                    repoForkStatus={repo.repoForkStatus}
                    repoLastPush={repo.repoLastPush}
                    repoHosted={repo.repoHosted}
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
