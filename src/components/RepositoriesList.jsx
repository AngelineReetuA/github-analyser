import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import GithubCard from "./GithubCard.jsx";

export default function RepositoriesList() {
  // need the repo owner name on the below repoLink
  // supposed to be `https://www.github.com/${ownerName}/${this.repoName}`
  const data = [
    {
      id: "1",
      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "2",
      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "3",
      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "4",
      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "5",
      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "6",
      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "7",
      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "8",
      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "9",
      repoName: "mental_health_chatbot",
      repoDesc:
        "this is a really cool description of a really cool project with a lot of buzzwords and a really cool sounding brainy paragraph",
      repoLoc: 4567,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "10",
      repoName: "carpoolingDApp",
      repoDesc:
        "this is a really cool description of a really cool project with complete innovation at its finest",
      repoLoc: 12567,
      repoLang: "Hyperledger Fabric, Node, React",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "11",
      repoName: "wordle",
      repoDesc:
        "this is a really cool description of a really cool project with cute puns",
      repoLoc: 632,
      repoLang: "Javascript, HTML, CSS",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
    {
      id: "12",
      repoName: "rumour-spreading-algorithm",
      repoDesc: "this is a really cool description of a really cool project",
      repoLoc: 89,
      repoLang: "Node, Javascript",
      repoLink: function () {
        return `https://www.github.com/${this.repoName}`;
      },
    },
  ];

  return (
    <>
      <Box pt={3}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
          {data.map((d) => (
            <Box
              key={d.id}
              sx={{
                width: "250px",
                ":hover": {
                  boxShadow: 20,
                },
              }}
            >
              <GithubCard
                repoLink={d.repoLink()}
                repoName={d.repoName}
                repoDesc={d.repoDesc}
                repoLang={d.repoLang}
              />
            </Box>
          ))}
        </Masonry>
      </Box>
    </>
  );
}
