const express = require("express");
const router = express.Router();
const UserSchema = require("../models/User");
const ProjectSchema = require("../models/Project");
// const { body, validationResult } = require('express-validator');
const axios = require("axios");

router.use(cors());
router.options("*", cors());
// Get All Projects
router.post("/", async (req, res) => {
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Token ${req.body.accessToken}`,
      },
    })
    .then(async (response) => {
      // res.json(response.data);
      const allProjects = await ProjectSchema.find({
        ownerId: response.data.id,
      });
      return res.status(200).json(allProjects);
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

router.post("/delete", async (req, res) => {
  res.json({ success: false });
  //const theProject = await ProjectSchema.findById(req.body.projectId);

  //if (theProject) {
  //    await theProject.delete();
  //    return res.json({ success: true });
  //}
  //res.json({ success: false });
});

module.exports = router;
