const express = require("express");
const { varify } = require("../middleware/varify");
// const env = require("dotenv");
// env.config({ path: "../config.env" });

const Router = express.Router();

const { login, signup, universal } = require("../controller/controller");

Router.post("/signup", signup);

Router.post("/login", login);

Router.post("/process", varify, universal);

module.exports = Router;
