const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("There is an error occured while sending e-mail: ", error);
    }
    return true;
  });
};

module.exports = sendEmail;
