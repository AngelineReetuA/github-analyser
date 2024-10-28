import { AppBar, Typography, Toolbar, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {
  const navigate = useNavigate();

  function handleClose() {
    Swal.fire({
      title: "Close this profile?",
      text: "You will go back to the homepage",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#98c1d9",
      cancelButtonColor: "#ee6c4d",
      confirmButtonText: "Yes, go back!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  }

  return (
    <>
      <AppBar position="fixed" sx={{ height: "60px", bgcolor: "#293241" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ bgcolor: "#293241" }}>
            QuickGit
          </Typography>
          <CloseIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ fontSize: "30px", ":hover": { backgroundColor: "#e0fbfc", color:"#293241" } }}
            onClick={handleClose}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
