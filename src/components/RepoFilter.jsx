import { Box, Typography, Button } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import GithubCard from "../sub-components/GithubCard.jsx";
import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

export default function RepoFilter() {
  const { data } = useContext(DataContext);
  const [repos, setRepos] = useState(data.codeAnalysis.repos);
  let languagesArray = [];
  data.codeAnalysis.repos.map((rep) => {
    if (
      languagesArray.indexOf(rep.repoLang) === -1 &&
      rep.repoLang != null &&
      rep.repoLang != ""
    ) {
      languagesArray.push(rep.repoLang);
    }
  });

  const [langName, setLangName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    let updatedSelected = typeof value === "string" ? value.split(",") : value;
    setLangName(updatedSelected);

    let updatedRepos = data.codeAnalysis.repos.filter((repo) => {
      return updatedSelected.indexOf(repo.repoLang) != -1;
    });

    setRepos(updatedRepos);
  };

  function resetFilter() {
    setRepos(data.codeAnalysis.repos);
    setLangName([]);
  }

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          fontSize: "20px",
          fontWeight: "bolder",
          justifyContent: "start",
          alignItems: "center",
          color: "#10151f",
          paddingRight: "15px",
        }}
      >
        REPOSITORIES
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Filter by language
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={langName}
          onChange={handleChange}
          input={<OutlinedInput label="Filter by language" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {languagesArray.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={langName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        sx={{ alignContent: "center", ":hover": { backgroundColor: "white" } }}
        onClick={resetFilter}
      >
        RESET
      </Button>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
        {repos.length > 0 &&
          repos.map((d) => (
            <Box key={d.id}>
              <GithubCard
                repoLink={d.repoLink}
                repoName={d.repoName}
                repoDesc={d.repoDesc}
                repoLang={d.repoLang}
                repoStars={parseInt(d.repoStars)}
                repoForkStatus={d.repoForkStatus}
                repoLastPush={d.repoLastPush}
                repoHosted={d.repoHosted}
                height={180}
              />
            </Box>
          ))}
      </Masonry>
    </>
  );
}
