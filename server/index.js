const express = require('express');
const colors = require('colors');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
	console.log(`Server running on port ${port}`.brightCyan.italic.underline);
});
