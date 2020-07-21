require('dotenv').config();

const server = require('./build/server');
const { consoleLog } = require('./src/Utils/logging');

const { PORT = 8080 } = process.env;

server.listen(PORT, () => {
  consoleLog('Starting server:', { port: PORT });
});