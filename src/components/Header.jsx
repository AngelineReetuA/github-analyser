import { AppBar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, bgcolor: "black", padding: "15px" }}
        >
          Quick Github Analyser
        </Typography>
      </AppBar>
    </>
  );
}
