import PropTypes from "prop-types";
import { Grid, Avatar, Typography, Link } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

export default function Headline({
  photoURL,
  name,
  bio,
  followers,
  following,
  location,
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
              {name ? name: "No name found"}
            </Typography>
            <Typography style={{ fontStyle: "italic", color: "#293241" }}>
              {bio ? bio : "No bio found"}
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
              {emp && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <BusinessIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">{emp}</Typography>
                  </>
                </Grid>
              )}
              {location && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <RoomOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">{location}</Typography>
                  </>
                </Grid>
              )}
              {followers > 0 && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <GroupIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">
                      {followers} followers
                    </Typography>
                  </>
                </Grid>
              )}
              {followers > 0 && (
                <Grid item display="flex" flexDirection="row">
                  <>
                    <GroupOutlinedIcon style={{ marginRight: "10px" }} />
                    <Typography variant="body1">
                      {following} following
                    </Typography>
                  </>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" flexDirection="row" alignSelf="center">
          <Link href={link} target="_blank" rel="noopener">
            <OpenInNewIcon
              style={{ marginRight: "10px", fontSize: "40px", color: "black" }}
            />
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

Headline.propTypes = {
  photoURL: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  location: PropTypes.string,
  emp: PropTypes.string,
  link: PropTypes.string,
};
