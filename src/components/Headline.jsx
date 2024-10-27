import { Grid, Avatar, Typography, Link } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../DataContext";

export default function Headline() {
  const { data } = useContext(DataContext);

  return (
    <>
      {data.initialAnalysis && (
        <Grid container padding={2}>
          <Grid item>
            <Avatar
              alt="profile pic"
              src={data.initialAnalysis.headlineData.avatar}
              sx={{ width: "100px", height: "100px" }}
            />
          </Grid>
          <Grid item xs container direction="column">
            <Grid item paddingLeft={2}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                {data.initialAnalysis.headlineData.name
                  ? data.initialAnalysis.headlineData.name
                  : "No name found"}
              </Typography>
              <Typography style={{ fontStyle: "italic", color: "#293241" }}>
                {data.initialAnalysis.headlineData.bio
                  ? data.initialAnalysis.headlineData.bio
                  : "No bio found"}
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
                {data.initialAnalysis.headlineData.company && (
                  <Grid item display="flex" flexDirection="row">
                    <>
                      <BusinessIcon style={{ marginRight: "10px" }} />
                      <Typography variant="body1">
                        {data.initialAnalysis.headlineData.company}
                      </Typography>
                    </>
                  </Grid>
                )}
                {data.initialAnalysis.headlineData.location && (
                  <Grid item display="flex" flexDirection="row">
                    <>
                      <RoomOutlinedIcon style={{ marginRight: "10px" }} />
                      <Typography variant="body1">
                        {data.initialAnalysis.headlineData.location}
                      </Typography>
                    </>
                  </Grid>
                )}
                {data.initialAnalysis.headlineData.followers > 0 && (
                  <Grid item display="flex" flexDirection="row">
                    <>
                      <GroupIcon style={{ marginRight: "10px" }} />
                      <Typography variant="body1">
                        {data.initialAnalysis.headlineData.followers} followers
                      </Typography>
                    </>
                  </Grid>
                )}
                {data.initialAnalysis.headlineData.following > 0 && (
                  <Grid item display="flex" flexDirection="row">
                    <>
                      <GroupOutlinedIcon style={{ marginRight: "10px" }} />
                      <Typography variant="body1">
                        {data.initialAnalysis.headlineData.following} following
                      </Typography>
                    </>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item display="flex" flexDirection="row" alignSelf="center">
            <Link
              href={data.initialAnalysis.headlineData.link}
              target="_blank"
              rel="noopener"
            >
              <OpenInNewIcon
                style={{
                  marginRight: "10px",
                  fontSize: "40px",
                  color: "black",
                }}
              />
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  );
}
