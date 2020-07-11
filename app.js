const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
mongoose.connect(
  `mongodb+srv://server:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.static(path.join(__dirname, './frontend/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.listen(80, () => {
  console.log('Server running on port 80');
});