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
import * as yup from "yup";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
    message: "",
    rating: "",
  });

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required().min(10),
    gender: yup.string().required(),
    reason: yup.string().required(),
    message: yup.string(),
    rating: yup.number(),
  });

  async function formSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    await setData({
      name: `${formData.get("name")}`,
      email: `${formData.get("email")}`,
      phone: `${formData.get("phone")}`,
      gender: `${formData.get("gender")}`,
      reason: `${formData.get("reason")}`,
      message: `${formData.get("message")}`,
      rating: `${formData.get("rating")}`,
    });
    schema
      .validate(data)
      .then((valid) => console.log(valid))
      .catch((error) => {
        console.log(error);
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
                required
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
              />
              <TextField
                name="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender" defaultValue="female" required>
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
                    name="message"
                  />
                </>
              )}
              <FormGroup row padding={2}>
                <FormLabel>Rate my Github:</FormLabel>
                <Rating name="rating" labelid="rating" />
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
