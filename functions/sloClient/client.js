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

  client.post(site, args, function (data) {
    callback(data)
  })
}

var getScore = function (input, callback) {
  var send = {
    token: secret.token,
    tokenid: secret.tokenid
  }
  call(secret.client, send, function (data) {
    var score = data.scores.filter(function (val) {
      return val.userid === input.userid
    })
    callback(score.shift().score)
  })
}

module.exports = {
  getScore: getScore
}
