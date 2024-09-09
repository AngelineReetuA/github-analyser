import PropTypes from "prop-types";
import {
  Link,
  Divider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid,
} from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StarIcon from "@mui/icons-material/Star";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import UpdateIcon from "@mui/icons-material/Update";
import PreviewIcon from "@mui/icons-material/Preview";

export default function GithubCard({
  repoName,
  repoDesc,
  repoLang,
  repoStars,
  repoLink,
  repoForkStatus,
  repoLastPush,
  repoHosted,
  height,
}) {
  return (
    <>
      <Link href={repoLink} target="_blank" sx={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: `${height}px`,
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                overflow: "hidden",
                height: "22px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              {repoName}
            </Typography>
            <Divider sx={{ bgcolor: "white", marginTop: "10px" }} />
            <Typography
              sx={{
                overflow: "hidden",
                height: "70px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              {repoDesc}
            </Typography>
            <Divider sx={{ bgcolor: "white" }} />
            <CardActions>
              <Grid
                container
                direction="row"
                sx={{ justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {repoLang != null && (
                    <>
                      <DataObjectIcon style={{ fontSize: "medium" }} />
                      <Typography
                        variant="body2"
                        sx={{ paddingLeft: "5px", paddingRight: "10px" }}
                      >
                        {repoLang}
                      </Typography>
                    </>
                  )}
                  {repoStars > 0 && (
                    <>
                      <StarIcon style={{ fontSize: "medium" }} />
                      <Typography
                        variant="body2"
                        sx={{ paddingLeft: "5px", paddingRight: "10px" }}
                      >
                        {repoStars}
                      </Typography>
                    </>
                  )}
                  {repoForkStatus && (
                    <ForkRightIcon sx={{ fontSize: "medium" }} />
                  )}
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {repoLastPush != null && (
                    <>
                      <UpdateIcon style={{ fontSize: "medium" }} />
                      <Typography
                        variant="body2"
                        sx={{ paddingLeft: "5px", paddingRight: "10px" }}
                      >
                        {repoLastPush}
                      </Typography>
                    </>
                  )}
                  {repoHosted && (
                    <Link
                      href={repoHosted}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                    >
                      <PreviewIcon style={{ fontSize: "medium" }} />
                    </Link>
                  )}
                </Box>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}

GithubCard.propTypes = {
  repoLink: PropTypes.string,
  repoName: PropTypes.string,
  repoDesc: PropTypes.string,
  repoLang: PropTypes.string,
  repoStars: PropTypes.number,
  repoForkStatus: PropTypes.bool,
  repoLastPush: PropTypes.string,
  repoHosted:PropTypes.string,
  height: PropTypes.number,
};
