const express = require("express");
const rateLimit = require("express-rate-limit");
const globalErrorHandler = require("./middleware/errorMiddleware");
const eventRoute = require("./routes/eventRoute");

const app = express();

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Request limit per IP exceeded, please try again in one hour",
});

//ROUTE
app.use("/api/v1/events", eventRoute);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Server cant find this route:  ${req.originalUrl}`,
  });
});

app.use(globalErrorHandler);
module.exports = app;
