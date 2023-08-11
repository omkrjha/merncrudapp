const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5009;
const cors = require('cors');
const Routes = require('./routes/route');
const path = require('path');
const dbConfig = require('./database/db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Routes.router);

app.use(express.static(path.join(__dirname, './client/build')));

app.get('*', function (_, res) {
  res.sendFile(
    path.join(__dirname, './client/build/index.html'),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
