var request = require('request')

var score = require('./score')
// var task = require('./task')

var secret = require('./../secret.json')

function call (method, input, callback) {
  var options = {
    uri: secret.site + method,
    body: JSON.stringify(input),
    family: 4,
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  }

  request(options, function (err, response, body) {
    if (err) {
      console.log('request error', err)
    } else {
      var data = JSON.parse(body)
      callback(data)
    }
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
