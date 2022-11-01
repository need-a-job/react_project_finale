const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    let payload = jwt.verify(token, process.env.secretKey);
    req.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "invalid token" });
  }
};
