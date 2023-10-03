const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PortSchema = new Schema(
  {
    nextFreePort: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("port", PortSchema);
