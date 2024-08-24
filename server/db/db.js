const mongoose = require('mongoose');

const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connexting to MongoDB');
    }
}

module.exports = DBConnection;