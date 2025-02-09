const allowedOrigins = [
  process.env.ALLOWED_ORIGIN_1,
  process.env.ALLOWED_ORIGIN_2,
  process.env.ALLOWED_ORIGIN_3,
  process.env.ALLOWED_ORIGIN_4,
  process.env.ALLOWED_ORIGIN_5,
  process.env.ALLOWED_ORIGIN_6,
];
var corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
