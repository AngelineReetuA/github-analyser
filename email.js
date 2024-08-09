import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  secure: false, // use SSL
  auth: {
    user: "1a2b3c4d5e6f7g",
    pass: "1a2b3c4d5e6f7g",
  },
});

// Configure the mailoptions object
const mailOptions = {
  from: "angelinereetu@gmail.com",
  to: "angelinereetu@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
