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
import { schema } from "./SchemaValidation";
import { useFormik } from "formik";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const data = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
    message: "",
    rating: null,
  };

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      data,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      console.log("hi inside submit");
    },
  });

  console.log(errors);

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" fontWeight="bold" py={2}>
            Get in touch
          </Typography>
          <FormControl variant="standard">
            <Box display="flex" flexDirection="column">
              <TextField
                name="name"
                label="Name"
                value={values.name}
                variant="outlined"
                sx={{ pb: "15px" }}
                onBlur={handleBlur}
                onChange={handleChange}
              />

              <TextField
                name="email"
                label="Email"
                variant="outlined"
                sx={{ pb: "15px" }}
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                name="phone"
                label="Phone number"
                variant="outlined"
                value={values.phone}
                sx={{ pb: "15px" }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={values.gender}
                onBlur={handleBlur}
                onChange={handleChange}
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
                value={values.reason}
                defaultValue=""
                onBlur={handleBlur}
                onChange={handleChange}
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
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </>
              )}
              <FormGroup row padding={2}>
                <FormLabel>Rate my Github:</FormLabel>
                <Rating
                  name="rating"
                  labelid="rating"
                  value={parseFloat(values.rating)}
                  onBlur={handleBlur}
                  onChange={handleChange}
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
