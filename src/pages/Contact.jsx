import { useState } from "react";
import {
  Container,
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
import Swal from "sweetalert2";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

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

    await schema
      .validate(data, { abortEarly: false })
      .then(async (validatedData) => {
        console.log("Data is valid:", validatedData);
        setErrors({});
        await Swal.fire({
          icon: "success",
          title: "Data validated",
          showConfirmButton: false,
          timer: 2000
        });
        window.location.reload();
      })
      .catch((validationError) => {
        if (validationError.inner) {
          let tempErrors = {};
          console.log(validationError.inner);
          Object.entries(validationError.inner).forEach((error) => {
            if (!tempErrors[error[1].path]) {
              tempErrors[error[1].path] = { messages: [] };
            }
            tempErrors[error[1].path].messages.push(error[1].errors);
          });
          setErrors(tempErrors);
          console.log("final obj", tempErrors);
        }
      });
  }

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5" fontWeight="bold" py={2}>
          Get in touch
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column">
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              error={errors.name?.messages.length > 0}
              helperText={errors.name?.messages.flat(1).pop()}
              sx={{ pb: "15px" }}
            />
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              error={errors.email?.messages.length > 0}
              helperText={errors.email?.messages.flat(1).pop()}
              sx={{ pb: "15px" }}
            />
            <TextField
              name="phone"
              label="Phone number"
              variant="outlined"
              error={errors.phone?.messages.length > 0}
              helperText={errors.phone?.messages.flat(1).pop()}
              sx={{ pb: "15px" }}
            />
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
              <FormLabel sx={{ alignContent: "center", color: "red" }}>
                {errors.gender?.messages.flat(1).pop()}
              </FormLabel>
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
            <FormLabel sx={{ alignContent: "center", color: "red" }}>
              {errors.reason?.messages.flat(1).pop()}
            </FormLabel>
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
                 <FormLabel sx={{ alignContent: "center", color: "red" }}>
              {errors.message?.messages.flat(1).pop()}
            </FormLabel>
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
        </form>
      </Container>
    </>
  );
}
