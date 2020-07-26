'use strict';
const mongoose = require('mongoose');
require('dotenv').config()


let database_URL = 'mongodb://PipelineTest:Pipeline%40123@103.15.67.124:27017/PipelineDialerTest'

mongoose.Promise = global.Promise;

const option = {
  // useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.set('useNewUrlParser', true);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);
mongoose.connect(database_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('Mongo Server Connected Successfully...!', database_URL); }, // eslint-disable-line
  (err) => { console.error('Failed to connect to MongoDB:', err.message); /** handle initial connection error */ }
);
//require('../models/feedback.schema');

