import { Link, Typography } from "@mui/material";
import { Container } from "@mui/material";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

export default function Repositories() {
  const pages = [6, 12, 18];
  const [pageNo, setPageNo] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[pageNo]);

  const handlePageChange = (event, newPage) => {
    setPageNo(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPageNo(0);
  };

  let data = [
    {
      id:"1"
,      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"2"
,      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: `https://www.github.com`,
    },
    {
      id:"3"
,      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"4"
,      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: `https://www.github.com`,
    },
    {
      id:"5"
,      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"6"
,      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: `https://www.github.com`,
    },
    {
      id:"7"
,      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"8"
,      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: `https://www.github.com`,
    },
    {
      id:"9"
,      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"10",
      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: `https://www.github.com`,
    },
    {
      id:"11",
      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: `https://www.github.com`,
    },
    {
      id:"12",
      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: `https://www.github.com`,
    },
  ];

  return (
    <>
      <Container sx={{ pt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", pb: 2 }}>
          Repositories
        </Typography>
        <TableContainer component={Paper} sx={{ padding: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>LOC</TableCell>
                <TableCell>Languages</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(pageNo * rowsPerPage, pageNo * rowsPerPage + rowsPerPage).map((repo, index) => (
                <TableRow key={index}>
                  <TableCell>{repo.id}</TableCell>
                  <TableCell>{repo.repoName}</TableCell>
                  <TableCell sx={{ width: "45%" }}>{repo.repoDesc}</TableCell>
                  <TableCell>{repo.repoLoc}</TableCell>
                  <TableCell>{repo.repoLang}</TableCell>
                  <TableCell>
                    <Link
                      href="https://www.google.com"
                      target="_blank"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      <GitHubIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          page={pageNo}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={pages}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          count={data.length}
        />
      </Container>
      ;
    </>
  );
}
