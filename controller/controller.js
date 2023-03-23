const { db } = require("../model/model");

const { timez } = require("../functions/time");

const bycrypt = require("bcrypt");

const validator = require("validator");
const jwt = require("jsonwebtoken");

// creating token

const crateToken = (email) => {
  return jwt.sign({ email }, process.env.SECRETE, {
    expiresIn: "3d",
  });
};

// end of token creation
// sign up function
const produce = async (email, password) => {
  if (!email || !password) {
    throw Error(" please fill all the fields");
  }

  if (!validator.isEmail(email)) {
    throw Error("please provide a valid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("password is not strong enough");
  }

  if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);

    return { hash: hash, tell: true };
  }
};
// end of signup function.

// login function
const forLogin = async (email, password) => {
  if (!email || !password) {
    throw Error(" please fill all the fields");
  }

  if (email && password) {
    return true;
  }

  // if (!validator.isEmail(email)) {
  //   throw Error("please provide a valid email address");
  // }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("password is not strong enough");
  // }

  // if (validator.isEmail(email) && validator.isStrongPassword(password)) {
  //   return true;
  // }
};
// end of login fun

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { hash, tell } = await produce(email, password);

    if (tell) {
      db.query(
        `select * from doggeduser where email= ?`,
        email,
        (err, data) => {
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          if (data.length != 0) {
            console.log(data.length);
            res.status(500).json({ error: "email already used" });
            return;
          } else {
            const post = {
              email: email,
              password: hash,
            };
            const sql = `insert into doggeduser SET ? `;

            db.query(sql, post, (err, data) => {
              if (err) {
                res.status(500).json({ error: err });
                return;
              } else {
                const token = crateToken(email);
                res
                  .status(200)
                  .json({ email: email.split("@")[0], token: token });
              }
            });
          }
        }
      );
    }

    // res.status(200).json({ message: "all went well", data: datez });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await forLogin(email, password);

    if (data) {
      const sql = "select * from doggeduser where email = ?";
      db.query(sql, email, async (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
          return;
        }
        if (data.length == 0) {
          res.status(400).json({ error: "wrong email" });
          return;
        }
        if (data) {
          const match = await bycrypt.compare(password, data[0].password);

          if (match) {
            const token = crateToken(email);
            res.status(200).json({ email: email.split("@")[0], token: token });
          } else {
            res.status(400).json({ error: "wrong password" });
          }
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const universal = (req, res) => {
  if (req.body?.message) {
    const { message } = req.body;
    const { email } = req.user;
    console.log(email);
    // draw single work out;
    if (message === "draw") {
      const sql = "select * from workout where email = ?";
      // draw workout for a perticular user
      db.query(sql, email, async (err, data) => {
        try {
          if (err) {
            res.status(500).json({ error: err });
            return;
          }
          if (data) {
            const how = data.map((da) => {
              const { id, exercise, loads, email, reps, times } = da;

              return {
                id: id,
                exercise: exercise,
                loads: loads,
                email: email,
                reps: reps,
                time: timez(times),
              };
            });
            console.log(how);
            res.status(200).json({ email: email.split("@")[0], message: how });
            return;
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
    }
    //  delete workout
    if (message == "deletework") {
      const { email } = req.user;
      const { id } = req.body;
      const sql = "delete from  workout where id = ?";
      db.query(sql, id, (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json({ message: "workout deleted succefully" });
        }
      });
    }

    // add workout

    if (message === "add") {
      const { email } = req.user;
      const { exercise, loads, reps } = req.body;
      const post = {
        exercise: exercise,
        loads: loads,
        email: email,
        reps: reps,
      };
      const sql = "insert into workout SET ?";

      db.query(sql, post, (err, data) => {
        if (err) {
          res.status(500).json({ error: err });
        } else {
          res.status(200).json({ message: "workout added successfully" });
        }
      });
    }
  }
};

module.exports = {
  login,
  signup,
  universal,
};
// <<<<<doggged****8000FFcc
