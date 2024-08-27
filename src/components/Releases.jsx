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

export default function Releases() {
  return (
    <>
      <Box p={1}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Links
        </Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="https://www.google.com" target="_blank">
                  <Typography variant="h6">App Release Link</Typography>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link href="https://www.google.com" target="_blank">
                  <Typography variant="h6">App Release Link</Typography>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Link href="https://www.google.com" target="_blank">
                  <Typography variant="h6">App Release Link</Typography>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </>
  );
}

Releases.propTypes = {
  links: PropTypes.array,
};
