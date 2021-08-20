const express = require('express');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const app = express();
const { PORT } = process.env || 3001;
const router = require('./router');

const logStream = fs.createWriteStream(path.join(__dirname, 'requestLog.log'), { flags: 'a' });

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan('combined', { stream: logStream }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(router);

app.get('*', (_, res) => {
  res.status(404).send('Page not found');
});

app.post('*', (_, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
