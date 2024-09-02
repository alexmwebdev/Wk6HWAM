const mongoose = require("mongoose");

const FileSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },

    contents: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const File = mongoose.model("File", FileSchema);

module.exports = File;