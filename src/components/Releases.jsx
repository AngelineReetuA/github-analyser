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
        <Typography variant="h4">Releases</Typography>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="https://www.google.com" target="_blank">
                  <Typography variant="h6">this is a link</Typography>
                  {/* iterate through the links array */}
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
