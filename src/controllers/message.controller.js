const messageModel = require("../models/message.model");
const sendEmail = require("../utils/sendEmail");

const sendMessage = async (req, res, next) => {
  console.log("body", req.body);
  const { email, name, message } = req.body;
  const newMessage = new messageModel(req.body);

  await newMessage
    .save()
    .then(() => {
      sendEmail({
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: "New Message from Personal Site",
        html: getMessageHtml(name, email, message),
      });
      return res.status(201).json({ statusCode: 201, message: "Success" });
    })
    .catch(next);
};

const getMessageHtml = (name, mail, message) => {
  return `
  <table border cellpadding="5px" style="border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <tr>
        <td colspan="2">1 yeni mesajınız var</td>
    </tr>
    <tr>
      <td>İsim</td>
      <td>${name}</td>
    </tr>
    <tr>
      <td>E-Mail</td>
      <td>${mail}</td>
    </tr>
    <tr>
      <td>Mesaj</td>
      <td>${message}</td>
    </tr>
  </table>
  `;
};

module.exports = { sendMessage };
