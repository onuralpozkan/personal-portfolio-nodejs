const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000/",
  "https://www.onuralpozkan.com",
];
var corsOptions = {
  origin: function (origin, callback) {
    console.log("origin", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = corsOptions;
