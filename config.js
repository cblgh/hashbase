var os = require('os')
var path = require('path')
var xtend = require('xtend')

var config = {
  shared: {
    township: {
      secret: 'very very not secret',
      db: path.join(__dirname, '.hypercloud', 'township.db'),
      email: {
        fromEmail: 'hi@example.com',
        postmarkAPIKey: 'your api key'
      }
    },
    cloud: {
      dir: path.join(__dirname, '.hypercloud')
    },
    port: 8080
  },
  development: {},
  production: {
    township: {
      secret: process.env.TOWNSHIP_SECRET,
      db: path.join(os.homedir(), '.hypercloud', 'township.db')
    },
    cloud: {
      dir: path.join(os.homedir(), '.hypercloud')
    }
  }
}

var env = process.env.NODE_ENV || 'development'
module.exports = xtend(config.shared, config[env])
