import { useState } from "react";
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
import SchemaValidation from "./SchemaValidation";
import { Formik } from "formik";
import { SettingsInputComponentSharp } from "@mui/icons-material";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "female",
    reason: "",
    message: "",
    rating: null,
  });

  const onUpdateField = (e) => {
    const updateState = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(updateState);
  };

  async function formSubmission(event) {
    event.preventDefault();
    console.log(data);

    schema
      .validate(data)
      .then((valid) => {
        console.log("Validation Successful", valid);
        alert("Validation successful");
      })
      .catch((error) => {
        console.log(error + " in the data", data);
        alert(error);
      });
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
                name="name"
                label="Name"
                variant="outlined"
                sx={{ pb: "10px" }}
                onChange={onUpdateField}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                onChange={onUpdateField}
                sx={{ pb: "10px" }}
              />
              <TextField
                name="phone"
                label="Phone number"
                onChange={onUpdateField}
                variant="outlined"
                sx={{ pb: "10px" }}
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                defaultValue="female"
                onChange={onUpdateField}
              >
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
              <FormLabel name="reasonConnect">
                What are you connecting for?
              </FormLabel>
              <Select
                name="reason"
                labelId="reasonConnect"
                id="reason"
                value={select}
                onChange={(event) => {
                  setSelect(event.target.value);
                  const updateState = {
                    ...data,
                    [event.target.name]: event.target.value,
                  };
                  setData(updateState);
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
                  control={
                    <Switch
                      checked={show}
                      onChange={(event) => setShow(event.target.checked)}
                    />
                  }
                  label="Add a message?"
                  labelPlacement="start"
                />
              </FormGroup>
              {show && (
                <>
                  <TextareaAutosize
                    minRows={6}
                    placeholder="Enter message here"
                    name="message"
                    onChange={onUpdateField}
                  />
                </>
              )}
              <FormGroup row padding={2}>
                <FormLabel>Rate my Github:</FormLabel>
                <Rating
                  name="rating"
                  labelid="rating"
                  onChange={onUpdateField}
                />
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

// Things to see:
// - uncontrolled and controlled components
// - what we want: we want uncontrolled components which we can control manually using formik and yup

// Things to be done:
// - move schema to another file
// - do validation using formik and yup 