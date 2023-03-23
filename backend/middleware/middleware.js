const jwt = require("jsonwebtoken");

const multer = require("multer");

const verify = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(500).json({ message: "user must be logged in" });
  } else {
    try {
      const bearer = authorization.split(" ")[1];
      const { take } = await jwt.verify(bearer, process.env.SECRETE);
      console.log(take);
      req.user = { id: take };
      console.log("this is from the verigy");
      console.log(req.body);
      next();
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};

// uploading files

const storages = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../backend/asset/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploads = multer({
  storage: storages,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      const err = new Error();
      err.name = "extenstion error";
      err.message = "only jpg, png, or jpeg files are allowed";
      return cb(err, false);
    }
  },
}).single("files");

// end of uploading files

module.exports = {
  verify,
  uploads,
};
