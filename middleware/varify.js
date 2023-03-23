const jwt = require("jsonwebtoken");

const varify = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      res.status(500).json({ error: "unauthorised request" });
    }

    if (authorization) {
      const bear = authorization.split(" ")[1];
      console.log(bear);
      const { email } = jwt.verify(bear, process.env.SECRETE);
      console.log(email);
      req.user = { email: email };
      next();
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  varify,
};
