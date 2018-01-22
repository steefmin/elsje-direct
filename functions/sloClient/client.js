var Client = require('node-rest-client').Client

var score = require('./score')
// var task = require('./task')

var secret = require('./../secret.json')

function call (method, input, callback) {
  var client = new Client()

  var args = {
    data: input,
    headers: { 'Content-Type': 'application/json' }
  }

  var req = client.post(secret.site + method, args, function (data) {
    callback(data)
  })

  req.on('error', function (err) {
    console.log('request error', err)
  })
}

var getScore = function (input, callback) {
  var send = {
    token: secret.token,
    tokenid: secret.tokenid
  }
  call('score.get', send, function (data) {
    var score = data.scores.filter(function (val) {
      return val.userid === input.userid
    })
    callback(score.shift().score)
  })
}

module.exports = {
  getScore: getScore
}
