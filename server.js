const dotenv = require("dotenv");
const app = require("./app.js");
const mongoose = require("mongoose");
const { initializeData } = require("./dataHelpers/initializeData.js");
dotenv.config({ path: "./config.env" });
mongoose.set("strictQuery", false);

const PORT = 3000;

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught exception! Shutting down the server...");
  process.exit(1);
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Running on port: " + PORT);
      initializeData();
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection! Shutting down the server...");
  server.close(() => {
    process.exit(1);
  });
});
