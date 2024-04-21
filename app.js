const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// import the routes
const agentsRoutes = require('./routes/agents');
app.use('/agents', agentsRoutes);

app.listen(port, () => {
    console.log(`GPT to GPT app listening at http://localhost:${port}`);
});