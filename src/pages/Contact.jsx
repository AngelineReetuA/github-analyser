import React, { useState } from "react";
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
<<<<<<< HEAD
=======
import { useState } from "react";
import * as yup from "yup";
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311

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
    rating: null,
  });

<<<<<<< HEAD
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  const handleRatingChange = (newValue) => {
    setData({
      ...data,
      rating: newValue,
    });
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(data);
  };
=======
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
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311

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
                value={data.name}
                onChange={handleInputChange}
              />
              <TextField
<<<<<<< HEAD
                id="email"
=======
                name="email"
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311
                label="Email"
                type="email"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
                value={data.email}
                onChange={handleInputChange}
              />
              <TextField
                name="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
                value={data.phone}
                onChange={handleInputChange}
              />
<<<<<<< HEAD
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                id="gender"
                value={data.gender}
                onChange={handleInputChange}
                required
              >
=======
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender" defaultValue="female" required>
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311
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
<<<<<<< HEAD
              <FormLabel>What are you connecting for?</FormLabel>
=======
              <FormLabel name="reasonConnect">
                What are you connecting for?
              </FormLabel>
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311
              <Select
                name="reason"
                labelId="reasonConnect"
                id="reason"
                value={select}
                onChange={(event) => setSelect(event.target.value)}
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
<<<<<<< HEAD
                <TextareaAutosize
                  minRows={6}
                  placeholder="Enter message here"
                  value={data.message}
                  onChange={(event) =>
                    setData({ ...data, message: event.target.value })
                  }
                />
              )}
              <FormGroup row padding={2}>
                <FormLabel component="legend">Rate my Github:</FormLabel>
                <Rating
                  id="rating"
                  name="rating"
                  value={data.rating}
                  onChange={(event, newValue) => handleRatingChange(newValue)}
                />
=======
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
>>>>>>> 8dbfc4c0e5ea93889bb21e19c70ad1fea6f25311
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
