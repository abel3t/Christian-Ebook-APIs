'use strict';

const mongoose = require('mongoose');

const { consoleLog } = require('../logging');

function connectDB() {
  const { MONGO_URL } = process.env;
  mongoose.connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true })
    .then(
      () => consoleLog('Database is Connected!', {}),
      () => consoleLog('Can\'t connect to the Database', {})
    );
}

module.exports = {
  connectDB
}