import { Box, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import GithubCard from "./GithubCard.jsx";
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
  let languagesArray = [];
  data.codeAnalysis.repos.map((rep) => {
    if (languagesArray.indexOf(rep.repoLang) === -1) {
      languagesArray.push(rep.repoLang);
    }
  });

  const [langName, setLangName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLangName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          fontSize: "20px",
          fontWeight: "bolder",
          justifyContent: "start",
          color: "#10151f",
        }}
      >
        REPOSITORIES
      </Typography>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={langName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
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
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
        {data.codeAnalysis.repos.map((d) => (
          <Box key={d.id}>
            <GithubCard
              repoLink={d.repoLink}
              repoName={d.repoName}
              repoDesc={d.repoDesc}
              repoLang={d.repoLang}
              height={180}
            />
          </Box>
        ))}
      </Masonry>
    </>
  );
}
