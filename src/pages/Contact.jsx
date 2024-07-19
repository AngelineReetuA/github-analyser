import { useState, useRef } from "react";
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
import { schema } from "./SchemaValidation";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState(false);

  let errorsObj = {};

  async function handleSubmit(event) {
    event.preventDefault();
    let data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      gender: event.target.gender.value,
      reason: event.target.reason.value,
      message: event.target.message?.value || null,
      rating: event.target.rating.value,
    };

    const errors = await schema
      .validate(data, { abortEarly: false })
      .then((validatedData) => {
        console.log("Data is valid:", validatedData);
        setErrors(false);
      })
      .catch((validationError) => {
        if (validationError.inner) {
          Object.entries(validationError.inner).forEach((error) => {
            if (!errorsObj[error[1].path]) {
              errorsObj[error[1].path] = { messages: [] };
            }
            errorsObj[error[1].path].messages.push(error[1].errors);
            setErrors(true);
          });
          console.log("final obj", errorsObj);
        }
      });
  }

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5" fontWeight="bold" py={2}>
          Get in touch
        </Typography>
        <form
          onSubmit={handleSubmit}
          onChange={() => {
            setErrors(true);
          }}
        >
          {errors ? (
            <Box display="flex" flexDirection="column">
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                sx={{ pb: "15px" }}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                sx={{ pb: "15px" }}
              />
              <TextField
                name="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "15px" }}
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender">
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
                defaultValue=""
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
                      onChange={(event) => {
                        setShow(event.target.checked);
                      }}
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
          ) : (
            <Box display="flex" flexDirection="column">
              <TextField
                name="name"
                label="Name"
                variant="outlined"
                error={errorsObj.name ? true : false}
                helperText={errorsObj.name?.messages[0]}
                sx={{ pb: "15px" }}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                sx={{ pb: "15px" }}
              />
              <TextField
                name="phone"
                label="Phone number"
                variant="outlined"
                sx={{ pb: "15px" }}
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender">
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
                defaultValue=""
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
                      onChange={(event) => {
                        setShow(event.target.checked);
                      }}
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
          )}
        </form>
      </Container>
    </>
  );
}
