const express = require('express');
const { uploadImage, downloadImage } = require('../controllers/imageController.js');
const upload = require('../utils/upload.js');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', downloadImage);

module.exports = router;