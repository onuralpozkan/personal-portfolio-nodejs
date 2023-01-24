const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5, // Limit each IP to 5 requests per `window` (here, per 60 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
  message:
    "Too many request getting from this IP, please try again after an hour",
});

module.exports = limiter;
