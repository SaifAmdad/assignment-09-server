const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
const { joseKeyUrl } = require("../secrets");

const isLogedin = async (req, res, next) => {
  try {
    const token = req.headers?.auth;
    const userId = req.headers?.userid;
    const JWTS = createRemoteJWKSet(new URL(joseKeyUrl));

    const { payload } = await jwtVerify(token, JWTS, {});

    if (!payload) {
      return res.status(300).send({
        message: "not verified",
      });
    }

    req.userId = payload.id;

    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { isLogedin };
