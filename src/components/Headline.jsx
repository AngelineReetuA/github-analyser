import PropTypes from "prop-types";
import { Grid, Avatar, Typography, Link } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from '@mui/icons-material/Business';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPJ9cm0-r5p50py0yUzvM5ZtEB-xWoJRPRA&s"
            sx={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item paddingLeft={2}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              github name
            </Typography>
            <Typography style={{ fontStyle: "italic" }}>
              bio / headline / profession
            </Typography>
            <Grid container spacing={3} style={{ fontStyle: "italic", paddingTop:"5px" }} alignItems="center">
              <Grid item>
                <Typography variant="body1">
                  <GroupIcon style={{marginRight:"10px"}}/>8 followers
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <BusinessIcon style={{marginRight:"10px"}}/>IT Company
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <OpenInNewIcon style={{marginRight:"10px"}}/>
                  <Link href="https://www.google.com">Blog</Link>
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
