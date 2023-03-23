const Express = require("express");
const path = require("path");
const multer = require("multer");
const Router = require("./router/router");
const env = require("dotenv");
const cors = require("cors");
env.config({ path: `${__dirname}/Path/config.env` });

const bodyparser = require("body-parser");
const morgan = require("morgan");
const expressSession = require("express-session");
const App = Express();
App.use(morgan("dev"));
App.use(bodyparser.json());
App.use(bodyparser.urlencoded({ extended: true }));
App.use(Express.static("assets"));
App.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "UPDATE"],
  })
);
App.set("view engine", "ejs");

App.use("/api", Router);

App.use((req, res) => {
  res.send("page not found");
});

const PORT = process.env.PORT || 8000;

App.listen(PORT, (req, res) => {
  console.log("listening to port" + PORT);
});
// connecting to the database
