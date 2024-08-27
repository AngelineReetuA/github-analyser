import PropTypes from "prop-types";
import { Grid, Avatar, Typography, Link } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Headline({
  photoURL,
  name,
  bio,
  followers,
  emp,
  link,
}) {
  return (
    <>
      <Grid container padding={2}>
        <Grid item>
          <Avatar
            alt="profile pic"
            src={photoURL}
            sx={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item paddingLeft={2}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography style={{ fontStyle: "italic" }}>
              {bio}
            </Typography>
            <Grid
              container
              spacing={3}
              style={{ fontStyle: "italic", paddingTop: "5px" }}
              alignItems="center"
            >
              <Grid item display="flex" flexDirection="row">
                <GroupIcon style={{ marginRight: "10px" }} />
                <Typography variant="body1">{followers} followers</Typography>
              </Grid>
              <Grid item display="flex" flexDirection="row">
                <BusinessIcon style={{ marginRight: "10px" }} />
                <Typography variant="body1">{emp}</Typography>
              </Grid>
              <Grid item display="flex" flexDirection="row">
                <OpenInNewIcon style={{ marginRight: "10px" }} />
                <Typography variant="body1">
                  <Link href={link} target="_blank">
                    Open Github
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

Headline.propTypes = {
  photoURL: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followers: PropTypes.string.isRequired,
  emp: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
