import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";

export default function StatCard({ statName, children }) {
  return (
    <>
      <Grid container>
        <Grid
          container
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            display="flex"
            padding={3}
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="70px"
          >
            {children}
          </Typography>
          <Grid
            display="flex"
            justifyContent="center"
            sx={{ color: "rgba(0,0,0,0.6)" }}
          >{statName}</Grid>
        </Grid>
      </Grid>
    </>
  );
}

StatCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  statName: PropTypes.string.isRequired,
  cardPadding: PropTypes.string,
};
