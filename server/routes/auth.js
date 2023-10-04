const express = require("express");
const router = express.Router();
const UserSchema = require("../models/User");
const cors = require("cors");
// const { body, validationResult } = require('express-validator');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
// const fetchuser = require('../middleware/fetchuser');
const axios = require("axios");
const qs = require("querystring");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

router.use(cors());
router.options("*", cors());
router.post("/", async (req, res) => {
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // res.json(response.data);
      const theUser = await UserSchema.findOne({ githubId: response.data.id });
      if (!theUser) {
        // Create new account here!!
        const newUser = await UserSchema.create({
          name: response.data.name,
          githubId: response.data.id,
          githubLogin: response.data.login,
        });

        return res.status(200).json({ success: true });
      } else {
        // Logged in Successfully Here
        return res.status(200).json({ success: true });
      }
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.get("/github", (req, res) => {
  const code = req.query.code;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  axios
    .post(
      "https://github.com/login/oauth/access_token",
      qs.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
      {
        headers: {
          Accept: "application/json",
        },
      },
    )
    .then((response) => {
      const accessToken = response.data.access_token;
      return res.redirect(
        `http://staticstorm.repocraft.com/verifyLogin?access_token=${accessToken}`,
      );
    })
    .catch((error) => {
      console.error(error);
      res.send("An error occurred");
    });
});

module.exports = router;
