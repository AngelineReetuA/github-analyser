import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Link,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Releases() {
  const { data } = useContext(DataContext);
  const links = data.initialAnalysis.releases;

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
                      <TableCell>
                        <Typography sx={{ fontSize: "18px" }}>
                          {link.eventType} on {link.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Link href={link.url} target="_blank">
                          <ArrowOutwardIcon sx={{ fontSize: "large" }} />
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
