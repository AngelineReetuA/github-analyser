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

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
    message: "",
    rating: null,
  });
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("");

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
                value={data.name}
                onChange={handleInputChange}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
                value={data.email}
                onChange={handleInputChange}
              />
              <TextField
                id="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "10px" }}
                required
                value={data.phone}
                onChange={handleInputChange}
              />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                id="gender"
                value={data.gender}
                onChange={handleInputChange}
                required
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
              <FormLabel>What are you connecting for?</FormLabel>
              <Select
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
