const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;
const REACT_BUILD = process.env.REACT_BUILD || './client/build'

const app = express();
const routes = require('./routes');

app.use(express.static(path.resolve(__dirname, REACT_BUILD)));

app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, REACT_BUILD, 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});