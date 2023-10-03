const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    githubId: {
      type: String,
      required: true,
    },
    githubLogin: {
      type: String,
    },
    projects: {
      // An array of project ids of the user
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("user", UserSchema);
