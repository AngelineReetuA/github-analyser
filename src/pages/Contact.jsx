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
import { useFormik } from "formik";
import { useForm, Controller } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";
import { schema } from "../../SchemaValidation.js";
import Swal from "sweetalert2";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  //   event.preventDefault();
  //   let data = {
  //     name: event.target.name.value,
  //     email: event.target.email.value,
  //     phone: event.target.phone.value,
  //     gender: event.target.gender.value,
  //     reason: event.target.reason.value,
  //     message: event.target.message?.value || null,
  //     rating: event.target.rating.value,
  //   };

  //   await schema
  //     .validate(data, { abortEarly: false })
  //     .then(async (validatedData) => {
  //       console.log("Data is valid:", validatedData);
  //       setErrors({});
  //       await Swal.fire({
  //         icon: "success",
  //         title: "Data validated",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //       window.location.reload();
  //     })
  //     .catch((validationError) => {
  //       if (validationError.inner) {
  //         let tempErrors = {};
  //         console.log(validationError.inner);
  //         Object.entries(validationError.inner).forEach((error) => {
  //           if (!tempErrors[error[1].path]) {
  //             tempErrors[error[1].path] = { messages: [] };
  //           }
  //           tempErrors[error[1].path].messages.push(error[1].errors);
  //         });
  //         setErrors(tempErrors);
  //         console.log("final obj", tempErrors);
  //       }
  //     });
  // }

  // corrected function
  const { control, handleSubmit } = useForm();

  const data = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    reason: "",
    message: "",
    rating: null,
  };

  const formik = useFormik({
    initialValues: data,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Validation completed", values);
    },
  });
  
  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography variant="h5" fontWeight="bold" py={2}>
          Get in touch
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ pb: "15px" }}
                  label="Name"
                  type="text"
                  id="name"
                  {...field}
                  onChange={(e) => {
                    formik.handleChange(e);
                    field.onChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.name || ""}
                  variant="outlined"
                  error={
                    (formik.errors?.name && formik.touched.name) ||
                    (formik.errors?.name && formik.touched.data?.name)
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.name || formik.touched.data?.name
                      ? formik.errors?.name
                      : ""
                  }
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ pb: "15px" }}
                  label="Email"
                  type="text"
                  id="email"
                  {...field}
                  onChange={(e) => {
                    formik.handleChange(e);
                    field.onChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.email || ""}
                  variant="outlined"
                  error={
                    (formik.errors?.email && formik.touched.email) ||
                    (formik.errors?.email && formik.touched.data?.email)
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.email || formik.touched.data?.email
                      ? formik.errors?.email
                      : ""
                  }
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ pb: "15px" }}
                  label="Phone number"
                  type="text"
                  id="phone"
                  {...field}
                  onChange={(e) => {
                    formik.handleChange(e);
                    field.onChange(e);
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone || ""}
                  variant="outlined"
                  error={
                    (formik.errors?.phone && formik.touched.phone) ||
                    (formik.errors?.phone && formik.touched.data?.phone)
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.phone || formik.touched.data?.phone
                      ? formik.errors?.phone
                      : ""
                  }
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <>
                  <FormLabel id="radio" sx={{ color: "black" }}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    id="radio"
                    name="gender"
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      formik.handleChange(e);
                      field.onChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    sx={{ pb: "15px" }}
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
                    <FormLabel
                      sx={{
                        alignContent: "center",
                        color: "#d32f2f",
                        fontSize: "small",
                      }}
                    >
                      {formik.touched.gender ||
                      formik.touched.data?.gender ||
                      formik.touched.gender && formik.errors?.gender
                        ? formik.errors?.gender
                        : ""}
                    </FormLabel>
                  </RadioGroup>
                </>
              )}
            />
            <Controller
              name="reason"
              control={control}
              render={({ field }) => (
                <>
                  <FormLabel sx={{ color: "black", pb: "10px" }}>
                    Please select your reason for connection
                  </FormLabel>
                  <Select
                    name="reason"
                    labelId="reasonConnect"
                    value={field.value || ""}
                    sx={{ width: "350px" }}
                    onChange={(e) => {
                      formik.handleChange(e);
                      field.onChange(e);
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value="Freelance/Job">Freelance/Job</MenuItem>
                    <MenuItem value="Likeminded/Networking">
                      Likeminded/Networking
                    </MenuItem>
                  </Select>
                  <FormLabel
                    sx={{
                      alignContent: "center",
                      color: "#d32f2f",
                      fontSize: "small",
                      pb: "15px",
                    }}
                  >
                    {formik.touched.reason || formik.touched.data?.reason
                      ? formik.errors?.reason
                      : ""}
                  </FormLabel>
                </>
              )}
            />
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          name="switch"
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
                        sx={{ resize: "vertical", overflow: "auto" }}
                        placeholder="Enter message here"
                        name="message"
                      />
                      <FormLabel
                        sx={{
                          alignContent: "center",
                          color: "#d32f2f",
                          fontSize: "small",
                          pb: "15px",
                        }}
                      >
                        {(formik.touched.message && show) ||
                        (formik.touched.data?.message && show)
                          ? formik.errors?.message
                          : ""}
                      </FormLabel>
                    </>
                  )}
                </>
              )}
            />
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <>
                  <FormGroup row padding={2}>
                    <FormLabel sx={{ color: "black" }}>
                      Rate my Github:
                    </FormLabel>
                    <Rating
                      name="rating"
                      labelid="rating"
                      sx={{ pb: "15px" }}
                    />
                  </FormGroup>
                </>
              )}
            />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

// change to react hook form - controller, yup, formik
{
  /* <TextField
name="name"
label="Name"
variant="outlined"
error={errors.name?.messages.length > 0}
helperText={errors.name?.messages.flat(1).pop()}
sx={{ pb: "15px" }}
/> */
}
