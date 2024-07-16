import PropTypes from "prop-types";
import {
  Link,
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StarIcon from "@mui/icons-material/Star";

export default function GithubCard({
  repoName,
  repoDesc,
  repoLang,
  repoStars,
  repoLink,
}) {
  return (
    <>
      <Link
        href="https://www.google.com"
        target="_blank"
        sx={{ textDecoration: "none" }}
      >
        <Box
          borderRadius="6px"
          sx={{ bgcolor: "#242424", color: "white" }}
          p={2}
          py={2}
          width="350px"
          height="150px"
        >
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>
            {repoName}
          </Typography>
          <Divider sx={{ bgcolor: "white", marginTop: "10px" }} />
          <Typography py={1} sx={{ height: "70px" }}>
            {repoDesc}
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <Grid display="flex" alignItems="center">
            <DataObjectIcon
              style={{ marginRight: "10px", fontSize: "medium" }}
            />
            <Typography variant="body2" pr={2} py={1}>
              {repoLang}
            </Typography>

            <StarIcon style={{ marginRight: "10px", fontSize: "medium" }} />
            {repoStars}
            <Typography variant="body2" py={1}></Typography>
          </Grid>
        </Box>
      </Link>
    </>
  );
}

GithubCard.propTypes = {
  repoLink: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repoDesc: PropTypes.string.isRequired,
  repoLang: PropTypes.string.isRequired,
  repoStars: PropTypes.string.isRequired,
};
