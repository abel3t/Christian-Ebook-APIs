'use strict';

/**
 *
 * @param name The name of Logging
 * @param args The arguments to stringify
 */
function consoleLog(name, args = {}) {
  const current = new Date(Date.now()).toISOString();
  console.info(`>> time: ${current}, name: ${name}, data: ${JSON.stringify(args)}`);
}

module.exports = {
  consoleLog
}