import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import GithubCard from "./GithubCard.jsx";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function RepositoriesList() {
  const { data } = useContext(DataContext);

  return (
    <>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
        {data.codeAnalysis.repos.map((d) => (
          <Box
            key={d.id}
            sx={{
              ":hover": {
                boxShadow: 20,
              },
            }}
          >
            <GithubCard
              repoLink={d.repoLink}
              repoName={d.repoName}
              repoDesc={d.repoDesc}
              repoLang={d.repoLang}
            />
          </Box>
        ))}
      </Masonry>
    </>
  );
}
