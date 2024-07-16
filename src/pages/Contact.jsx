import {
  Container,
  FormControl,
  Box,
  TextField,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Switch,
  FormGroup,
  Rating,
  Button,
} from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
    message: "",
    rating: "",
  });
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("");

  function formSubmission(event) {
    event.preventDefault();
    console.log(data);
    const values = {};
  }

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <form onSubmit={formSubmission}>
          <Typography variant="h5" fontWeight="bold" py={2}>
            Get in touch
          </Typography>
          <FormControl variant="standard" sx={{ width: "50%" }}>
            <Box display="flex" flexDirection="column">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
              />
              <TextField
                id="mail"
                label="Email"
                type="email"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
              />
              <TextField
                id="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup row id="gender" defaultValue="female" required>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
              <FormLabel id="reasonConnect">
                What are you connecting for?
              </FormLabel>
              <Select
                labelId="reasonConnect"
                value={select || ""}
                onChange={(event) => {
                  setSelect(event.target.value);
                }}
                sx={{ width: "350px" }}
              >
                <MenuItem value="Freelance/Job">Freelance/Job</MenuItem>
                <MenuItem value="Likeminded/Networking">
                  Likeminded/Networking
                </MenuItem>
              </Select>
              <br />
              <FormGroup row>
                <FormControlLabel
                  value="Add a message?"
                  control={
                    <Switch
                      checked={show}
                      onChange={(event) => {
                        setShow(event.target.checked);
                      }}
                    />
                  }
                  label="Add a message?"
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
              {show && (
                <>
                  <TextareaAutosize
                    minRows={6}
                    placeholder="Enter message here"
                  />
                </>
              )}
              <FormGroup row padding={2}>
                <FormLabel id="rating">Rate my Github:</FormLabel>
                <Rating labelid="rating" />
              </FormGroup>
              <br />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </Box>
          </FormControl>
        </form>
      </Container>
    </>
  );
}
