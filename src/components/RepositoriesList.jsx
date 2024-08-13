import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import GithubCard from "./GithubCard.jsx";
import data from "../../dummy-data";

export default function RepositoriesList() {
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
