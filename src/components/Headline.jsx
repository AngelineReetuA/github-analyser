import { Grid, Avatar, Typography, Link } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function Headline() {
  const { data } = useContext(DataContext);
  const initialAnalysisData = data.initialAnalysis;

  return (
    <>
      <Grid container padding={2}>
        <Grid item>
          <Avatar
            alt="profile pic"
            src={initialAnalysisData.headlineData.avatar}
            sx={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item paddingLeft={2}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {initialAnalysisData.headlineData.name ? initialAnalysisData.headlineData.name: "No name found"}
            </Typography>
            <Typography style={{ fontStyle: "italic", color: "#293241" }}>
              {initialAnalysisData.headlineData.bio ? initialAnalysisData.headlineData.bio : "No bio found"}
            </Typography>
            <Grid
              container
              spacing={3}
              style={{
                fontStyle: "italic",
                paddingTop: "5px",
                color: "#293241",
              }}
              alignItems="center"
            >
              {initialAnalysisData.headlineData.company && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <BusinessIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">{initialAnalysisData.headlineData.company}</Typography>
                  </>
                </Grid>
              )}
              {initialAnalysisData.headlineData.location && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <RoomOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">{initialAnalysisData.headlineData.location}</Typography>
                  </>
                </Grid>
              )}
              {initialAnalysisData.headlineData.followers > 0 && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <GroupIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">
                      {initialAnalysisData.headlineData.followers} followers
                    </Typography>
                  </>
                </Grid>
              )}
              {initialAnalysisData.headlineData.following > 0 && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <GroupOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">
                      {initialAnalysisData.headlineData.following} following
                    </Typography>
                  </>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" flexDirection="row" alignSelf="center">
          <Link href={initialAnalysisData.headlineData.link} target="_blank" rel="noopener">
            <OpenInNewIcon
              style={{ marginRight: "10px", fontSize: "40px", color: "black" }}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
