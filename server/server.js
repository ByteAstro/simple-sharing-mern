const express = require('express');
const DBConnection = require('./db/db.js');
const router = require('./routes/router.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = 4500;
app.listen(PORT, () => {
    DBConnection();
    console.log("Server running on PORT:", PORT);
});
