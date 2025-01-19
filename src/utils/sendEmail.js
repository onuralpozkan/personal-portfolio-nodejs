const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
   
    auth: {
      user: 'apikey',
      pass: process.env.API_KEY,
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
