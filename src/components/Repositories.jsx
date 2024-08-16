import { Link, Typography, Chip } from "@mui/material";
import { Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { DataGrid } from "@mui/x-data-grid";
import data from "../../dummy-data";

export default function Repositories() {
  const columns = [
    { field: "id", headerName: "SNo", width: 30 },
    { field: "repoName", headerName: "Name", width: 190 },
    { field: "repoDesc", headerName: "Description", width: 350 },
    { field: "repoLoc", headerName: "LOC", width: 100 },
    { field: "repoLang", headerName: "Languages", width: 300, renderCell: (cellValues) => {
      return (
        <Chip label={cellValues.row.repoLang} />
      )
    } },
    {
      field: "repoLink",
      headerName: "Link",
      width: 70,
      renderCell: (cellValues) => {
        return (
          <Link href={`${cellValues.row.repoLink()}`} target="_blank">
            <GitHubIcon />
          </Link>
        );
      },
    },
  ];
  //   {
  //     id: "1",
  //     repoName: "mental_health_chatbot",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
  //     repoLoc: 4567,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "2",
  //     repoName: "carpoolingDApp",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with complete innovation at its finest",
  //     repoLoc: 12567,
  //     repoLang: "Hyperledger Fabric, Node, React",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "3",
  //     repoName: "wordle",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with cute puns",
  //     repoLoc: 632,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "4",
  //     repoName: "rumour-spreading-algorithm",
  //     repoDesc: "this is a really cool description of a really cool project",
  //     repoLoc: 89,
  //     repoLang: "Node, Javascript",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "5",
  //     repoName: "mental_health_chatbot",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
  //     repoLoc: 4567,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "6",
  //     repoName: "carpoolingDApp",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with complete innovation at its finest",
  //     repoLoc: 12567,
  //     repoLang: "Hyperledger Fabric, Node, React",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "7",
  //     repoName: "wordle",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with cute puns",
  //     repoLoc: 632,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "8",
  //     repoName: "rumour-spreading-algorithm",
  //     repoDesc: "this is a really cool description of a really cool project",
  //     repoLoc: 89,
  //     repoLang: "Node, Javascript",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "9",
  //     repoName: "mental_health_chatbot",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
  //     repoLoc: 4567,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "10",
  //     repoName: "carpoolingDApp",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with complete innovation at its finest",
  //     repoLoc: 12567,
  //     repoLang: "Hyperledger Fabric, Node, React",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "11",
  //     repoName: "wordle",
  //     repoDesc:
  //       "this is a really cool description of a really cool project with cute puns",
  //     repoLoc: 632,
  //     repoLang: "Javascript, HTML, CSS",
  //     repoLink: `https://www.github.com`,
  //   },
  //   {
  //     id: "12",
  //     repoName: "rumour-spreading-algorithm",
  //     repoDesc: "this is a really cool description of a really cool project",
  //     repoLoc: 89,
  //     repoLang: "Node, Javascript",
  //     repoLink: `https://www.github.com`,
  //   },
  // ];

  return (
    <>
      <Container sx={{ pt: 3 }}>
       
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Container>
    </>
  );
}
