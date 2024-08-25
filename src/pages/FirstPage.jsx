import { Typography, Grid, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function FirstPage() {
  return (
    <>
      <Grid container padding={8} sx={{ alignItems: "center" }}>
        <Grid item>
          <GitHubIcon sx={{ fontSize: "120px" }} />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item paddingLeft={2}>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              QuickGit
            </Typography>
            <Typography style={{ fontStyle: "italic", fontSize: "20px" }}>
              The complete github analyser
            </Typography>
          </Grid>
        </Grid>
        <Grid item container pt={4} direction="row">
          <TextField
            id="username"
            placeholder="Enter a username"
            autoComplete="on"
            sx={{ width: "65%", paddingRight: "16px" }}
          />
          <Button
            component={Link}
            to="/user/user-analysis"
            variant="contained"
            sx={{
              width: "160px",
              backgroundColor: "#4e7a94",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
