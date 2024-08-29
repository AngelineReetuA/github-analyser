import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
} from "@mui/material";

export default function Releases({ links }) {
  return (
    <>
      <Box p={1}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Recent
        </Typography>
        <Table>
          <TableBody>
            {links.length > 0 &&
              links.map((link) => (
                <TableRow>
                  <TableCell key={link.url} width={150}>
                    <Link href={link.url} target="_blank">
                      <Typography variant="h6">{link.eventType}</Typography>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            {links.length === 0 && (
              <TableRow>
                <TableCell>
                  <Typography>No PushEvents</Typography>{" "}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </>
  );
}

Releases.propTypes = {
  links: PropTypes.array,
};
