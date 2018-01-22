var Client = require('node-rest-client').Client

var score = require('./score')
var task = require('./task')

var secret = require('../secret.json')

function call (site, input, callback) {
  var client = new Client()

  var args = {
    data: input,
    headers: { 'Content-Type': 'application/json' }
  }

  client.post(site, args, callback)
}

var getScore = function (site, input, callback) {

}

module.exports = {
  getScore: 'getScore',
  updateScore: ''
}
