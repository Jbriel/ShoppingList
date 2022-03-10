require('dotenv').config();
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
var cors = require('cors')

const PORT = process.env.PORT || 3001;
const REACT_BUILD = process.env.REACT_BUILD || './client/build'

const app = express();
const routes = require('./routes');

const test = require('./models')

app.use(cors())
app.use(express.static(path.resolve(__dirname, REACT_BUILD)));

app.use(bodyParser.json());
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, REACT_BUILD, 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});