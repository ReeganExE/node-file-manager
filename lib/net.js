
module.exports = function() {
  const _ = require('lodash');

  var os = require('os');
  var ifaces = os.networkInterfaces();

  let ips = Object.values(ifaces).map(a => {
    return _.find(a, { family: 'IPv4'});
  });

  return _(ifaces).values().map(a => _.find(a, { family: 'IPv4'})).compact().map('address').value();

}