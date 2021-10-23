const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const app = express();
const { PORT, MODE } = require("./config/config");
const databaseConnection = require("./db/connectDb");
const Testimonial = require("./routes/Testimonial");

//db connection
databaseConnection();
app.use(express.urlencoded({ extended: true }));
//body parser
app.use(express.json());
if (MODE === "development") {
  app.use(logger("dev"));
}
//sanitize data
app.use(mongoSanitize());
//set security headers
app.use(helmet());
//prevent cliet side scripting
app.use(xss());
//limit request acc minutes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});
app.use(limiter);
//prevent http params pollutions
app.use(hpp());
//enabling cors
app.use(cors());

app.use("/api/v1", Testimonial);
const port = PORT || 5000;
//server starting here
const server = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is running at port ${port} on ${MODE} mode`);
    });
  } catch (err) {
    console.error(err);
  }
};
//server call to start
server();
