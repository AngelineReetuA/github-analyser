import PropTypes from "prop-types";
import {
  Link,
  Divider,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StarIcon from "@mui/icons-material/Star";

export default function GithubCard({
  repoName,
  repoDesc,
  repoLang,
  repoStars,
  repoLink,
  height,
}) {
  return (
    <>
      <Link href={repoLink} target="_blank" sx={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: `${height}px`,
            borderRadius: "16px",
            ":hover": {
              border: "2px solid",
              borderColor: "#ee6c4d",
            },
         
          }}
        >
          <CardContent>
            <Typography variant="h6">{repoName}</Typography>
            <Divider sx={{ bgcolor: "white", marginTop: "10px" }} />
            <Box sx={{ height: "75px", overflow: "auto" }}>
              <Typography py={1}>{repoDesc}</Typography>
            </Box>
            <Divider sx={{ bgcolor: "white" }} />
            <CardActions>
              {repoLang != null && (
                <>
                  <DataObjectIcon style={{ fontSize: "medium" }} />
                  <Typography variant="body2">{repoLang}</Typography>
                </>
              )}

              {repoStars > 0 && (
                <>
                  <StarIcon
                    style={{ fontSize: "medium" }}
                  />
                  <Typography>{repoStars}</Typography>
                </>
              )}
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
  height: PropTypes.number,
};
