const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

// This is sensitive;
require("dotenv").config({ path: "../.env" }); 

// Use express.json() to parse incoming JSON data
app.use(express.json());

// Enable CORS to allow requests from Next.js (if they're on different domains)
app.use(cors());

// Example route to handle sending email
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // this is for testing
  console.log(`Received message from ${name} (${email}): ${message}`);

  // Create a Nodemailer transport (Gmail in this case)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    srvice:'gmail',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user:process.env.LAMI,
      pass:process.env.APP,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  

  const mailOptions = {
    from: email, // Sender's email (from the form)
    to: process.env.LAMI, // The recipient's email (your Gmail or other email)
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    // Send the email using Nodemailer
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Start the Express server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
  
});
