const multer = require("multer");
const { uploads } = require("../middleware/middleware");

// jwt token

const jwt = require("jsonwebtoken");

const bycrypt = require("bcrypt");

const { db } = require("../model/model");

const path = require("path");

// signing the jwt

special = (take) => {
  return jwt.sign({ take }, process.env.SECRETE, {
    expiresIn: "3d",
  });
};

const signin = (req, res) => {
  uploads(req, res, async (err) => {
    if (err) {
      res.status(500).json(err.message);
      return;
    } else {
      const { username, password } = req.body;

      // check if the fields are empty

      if (username === "" || password === "") {
        res.status(400).json({ message: "kindly fill all the from fields" });
        return;
      }

      if (username && password) {
        db.query(
          "select * from doggedblog.user where username = ?",
          username,
          async (err, data) => {
            if (err) {
              res.status(500).json({ error: err });
            }
            if (data.length > 0) {
              res.status(500).json({ message: "username already used" });
            } else {
              // start
              const salt = await bycrypt.genSalt(10);

              const hash = await bycrypt.hash(password, salt);

              const checkImage = () => {
                if (req.file?.originalname) {
                  return `/uploads/${req.file.originalname}`;
                } else {
                  return `/uploads/general.jpg`;
                }
              };

              const post = {
                username: username,
                password: hash,
                userimage: checkImage(),
                time: new Date(),
              };
              db.query(
                "insert into doggedblog.user SET ?",
                post,
                (err, data) => {
                  if (err) {
                    res.status(500).json({ error: err });
                  }
                  if (data) {
                    db.query(
                      "select * from doggedblog.user where username = ?",
                      username,
                      (err, data) => {
                        if (err) {
                          res.status(500).json({ error: err });
                        }
                        if (data) {
                          res.status(200).json({ token: special(data[0].id) });
                        }
                      }
                    );
                  }
                }
              );
              // end
            }
          }
        );
      }
    }
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  db.query(
    "select * from doggedblog.user where username = ? ",
    username,
    async (err, data) => {
      if (err) {
        res.status(500).send(err);
      }
      if (data.length > 0) {
        const match = await bycrypt.compare(password, data[0].password);

        // password match
        if (match) {
          res.status(200).json({ token: special(data[0].id) });
        } else {
          res.status(400).json({ message: "password not matched" });
        }
      } else {
        res.status(400).json({ message: "user not found" });
      }
    }
  );
};

const allProcesses = (req, res) => {
  const { id } = req.user;

  uploads(req, res, (err) => {
    const { message, title, post, image, category, payload } = req.body;

    const checkImage = () => {
      if (req.file?.originalname) {
        return `/uploads/${req.file.originalname}`;
      } else {
        return "";
      }
    };
    if (err) {
      res.status(500).json(err.message);
      return;
    } else {
      if (message == "post") {
        const posts = {
          id: id,
          title: title,
          post: post,
          image: checkImage(),
          category: category,
          time: new Date(),
        };

        db.query("insert into doggedblog.post SET ?", posts, (err, data) => {
          if (err) {
            res.status(500).json({ error: err });
          }
          if (data) {
            res.status(200).json({ message: "post added successfully" });
          }
        });
      }
      if (message == "delete") {
        db.query(
          "delete from doggedblog.post where uuid = ?",
          payload,
          (err, data) => {
            if (err) {
              res.status(500).json({ err: err });
            }
            if (data) {
              res
                .status(200)
                .json({ message: "post delted successfully", data: data });
            }
          }
        );
      }
    }
  });
};

const drawall = (req, res) => {
  db.query(
    " select * from doggedblog.user as u join doggedblog.post as p on p.id = u.id  order by uuid desc",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (data) {
        res.status(200).json({ data: data });
      }
    }
  );
};

const single = (req, res) => {
  const single = req.params.id;
  if (single) {
    db.query(
      " select * from user as u join post as p on p.id = u.id where uuid = ? order by uuid desc;",
      single,
      (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
        }
        if (data) {
          res.status(200).json({ data: data });
        }
      }
    );
  }
};

const category = (req, res) => {
  const cat = req.params.id;

  if (cat) {
    db.query(
      "select * from user as u join post as p on p.id = u.id where category = ? order by uuid desc;",
      cat,
      (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
        }
        if (data) {
          res.status(200).json({ data: data });
        }
      }
    );
  }
};

const onlycat = (req, res) => {
  db.query("select * from doggedblog.category", (err, data) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    if (data) {
      res.status(200).json({ data: data });
    }
  });
};

const related = (req, res) => {
  const { uuid, category } = req.body;

  db.query(
    "select * from doggedblog.post where uuid != ? and  category = ? ",
    [uuid, category],
    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      if (data) {
        res.status(200).json({ data: data });
      }
    }
  );
};

const search = (req, res) => {
  const id = req.params.id;

  db.query(
    `select * from doggedblog.post where category LIKE '%${id}%' OR TITLE LIKE '%${id}%'`,

    (err, data) => {
      if (err) {
        res.status(500).json({ error: err });
      }

      if (data) {
        res.status(200).json({ data: data });
      }
    }
  );
};

module.exports = {
  single,
  signin,
  login,
  allProcesses,
  drawall,
  category,
  onlycat,
  related,
  search,
};
