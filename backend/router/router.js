const express = require("express");
const { db } = require("../model/model");
const { verify } = require("../middleware/middleware");

const {
  signin,
  single,
  login,
  allProcesses,
  drawall,
  category,
  onlycat,
  related,
  search,
} = require("../controller/controller");

const route = express.Router();

route.post("/", signin);

route.post("/login", login);

route.post("/api/process", verify, allProcesses);

route.get("/api/drawall/", drawall);

route.get("/api/single/:id", single);

route.get("/api/category/:id", category);

route.get("/api/onlycat", onlycat);

route.post("/api/related", related);

route.get("/api/searchz/:id", search);

module.exports = {
  route,
};
