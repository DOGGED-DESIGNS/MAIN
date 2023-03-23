const express = require("express");
const dovenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
const { route } = require("./router/router");
const app = express();
const mysql2 = require("mysql2");
const multer = require("multer");

const upload = multer();

// this are the general middleware

dovenv.config({ path: "config.env" });

// CONSTANT FOR THE ENV
const port = process.env.PORT || 8000;
// END OF CONSTNAT FOR ENV FILE

app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());

app.use(bodyparser.json());

app.use(express.json());

app.use(bodyparser.json());
app.use(express.static(`${__dirname}/asset`));

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});

app.use("/", route);

app.use((req, res) => {
  res.status(500).json({ error: "page not found" });
});
