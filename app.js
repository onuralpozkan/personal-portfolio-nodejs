const express = require("express");
const app = express();
// Middlewares
const cors = require("cors");
const {
  errorLogger,
  errorResponder,
} = require("./src/middlewares/errorHandler");
// Routes
const messageRouter = require("./src/routes/message.routes");
// Config
require("dotenv").config();
require("./src/db/dbConnection");
const corsOptions = require("./src/config/corsOptions");
const limiter = require("./src/middlewares/rateLimit");
const port = process.env.PORT || 5001;

app.use(cors(corsOptions));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(limiter);

app.use(messageRouter);

// Error Handling => 1. Logging Error 2. Return error message 3. Invalid route check
app.use(errorLogger);
app.use(errorResponder);
//app.use(invalidPathHandler);

app.listen(port, () => {
  console.log(`Server is connected on port: ${port}`);
});
