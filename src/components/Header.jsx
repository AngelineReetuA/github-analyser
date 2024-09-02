import { AppBar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height:"60px" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, bgcolor: "#293241", padding: "15px" }}
        >
          Quick Github Analyser
        </Typography>
      </AppBar>
    </>
  );
}
