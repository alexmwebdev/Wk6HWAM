const File = require("../models/file.model");

const getFiles = async (req, res) => {
  try {
    const files = await File.find({});
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// * /file/:filename - POST
const getFile = async (req, res) => {
  try {
    const { filename } = req.params;
    const file = await File.find({"filename" : filename});
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPhrase = async (req, res) => {
  try {
    const { filename, phrase } = req.params;
    const file = await File.find( { $and: [ { filename: { $eq: filename } }, { contents: { $regex: phrase } } ] }) ;
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*

const getFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);
    res.status(200).json(File);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

*/

const createFile = async (req, res) => {
  try {
    const file = await File.create(req.body);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFile = async (req, res) => {
  try {
    const { id } = req.params;

    const file = await File.findByIdAndUpdate(id, req.body);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const updatedFile = await File.findById(id);
    res.status(200).json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;

    const file = await File.findByIdAndDelete(id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile,
  getPhrase,
};
