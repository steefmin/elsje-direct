var Client = require('node-rest-client').Client

module.exports = function (site, input, callback) {
  var client = new Client()

  var args = {
    data: input,
    headers: { 'Content-Type': 'application/json' }
  }

  client.post(site, args, callback)
}
