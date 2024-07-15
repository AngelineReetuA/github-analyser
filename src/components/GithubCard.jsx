import PropTypes from "prop-types";
import { Link, Box, Typography, Divider, Grid } from "@mui/material";
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
        >
          <Typography variant="h7" sx={{ fontWeight: "bold" }}>
            github-name
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <Typography py={1}>
            description description description description description
          </Typography>
          <Divider sx={{ bgcolor: "white" }} />
          <Grid display="flex">
            <Typography variant="body2" pr={2} py={1}>
              <DataObjectIcon
                style={{ marginRight: "10px", fontSize: "medium" }}
              />
              Javascript
            </Typography>
            <Typography variant="body2" py={1}>
              <StarIcon style={{ marginRight: "10px", fontSize: "medium" }} />
              213
            </Typography>
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
