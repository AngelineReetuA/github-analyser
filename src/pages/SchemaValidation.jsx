import * as yup from "yup";

export const schema = yup.object({
    name: yup
      .string()
      .required("Please enter your name")
      .matches(/^[a-zA-Z'-\s]+$/, "Invalid name")
      .min(2),
    email: yup.string().email("Is this really an email?").required(),
    phone: yup
      .string()
      .required("Please enter a phone number")
      .min(10,"Phone number has to be 10 digits long").max(10,"Phone number should not be longer than 10 digits")
      .matches(/^[0-9]+$/, "Must be only digits"),
    gender: yup.string().required(),
    reason: yup.string().required("Please select the reason for connection"),
    message: yup
      .string()
      .nullable()
      .notRequired()
      .max(40, "Keep your message less than 40 words"),
    rating: yup.string().nullable().notRequired(),
  });