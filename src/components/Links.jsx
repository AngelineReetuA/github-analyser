import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link
} from "@mui/material";
import GithubCard from "./GithubCard";

export default function Releases({ links }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "300px",
          borderRadius: "16px",
          border: "solid",
          borderWidth: "2px",
          borderColor: "#eec64d",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              fontWeight: "bolder",
              justifyContent: "start",
              color: "#10151f",
            }}
          >
            RECENT WORK
          </Typography>
          <CardContent>
            <Table>
              <TableBody>
                {links.length > 0 &&
                  links.map((link) => (
                    <TableRow key={link.url}>
                      <TableCell width={150}>
                        <Link href={link.url} target="_blank">
                          <Typography variant="h6">{link.eventType}</Typography>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                {links.length === 0 && (
                  <TableRow>
                    <TableCell>
                      <Typography>No Events to show</Typography>{" "}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </CardContent>
      </Card>
    </>
  );
}

Releases.propTypes = {
  links: PropTypes.array,
};
