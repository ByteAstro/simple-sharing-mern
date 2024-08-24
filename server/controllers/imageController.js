const File = require('../models/file.js');

exports.uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
    }
    try {
        const file = await File.create(fileObj);
        console.log("File:", file);
        res.status(200).json({
            success: true,
            path: `http://localhost:4500/file/${file._id}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Upload failed. Please try after sinmetime',
            error: error.message
        });
    }
}

exports.downloadImage = async (req, res) => {
    try {
        const { fileId } = req.params;
        const file = await File.findById(fileId);

        file.downloadedTimes++;
        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Download failed. Please try after sinmetime',
            error: error.message
        });
    }
}