const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
const { joseKeyUrl } = require("../secrets");

const isLogedin = async (req, res, next) => {
  try {
    const token = req.headers?.auth;
    const JWTS = createRemoteJWKSet(new URL(joseKeyUrl));

    const { payload } = await jwtVerify(token, JWTS, {});

    if (!payload) {
      return res.status(300).send({
        message: "not verified",
      });
    }

    // id as string
    req.userId = payload.id;

    next();
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = { isLogedin };
