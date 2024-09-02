const express = require("express");
const Product = require("../models/file.model.js");
const router = express.Router();
const {getFiles, getFile, createFile, updateFile, deleteFile, getPhrase} = require('../controllers/file.controller.js');


router.get('/files', getFiles);
router.get('/files/:filename/search/:phrase', getPhrase);
router.post("/files/:filename", getFile);

router.post("/", createFile);

// update a product
router.put("/files/:id", updateFile);

// delete a product
router.delete("/files/:id", deleteFile);




module.exports = router;