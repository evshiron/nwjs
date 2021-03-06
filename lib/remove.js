'use strict'

/**
 * Module dependencies
 */
const home = require('user-home')
const config = require('./config')
require('shelljs/global')

module.exports = function (version) {
  try {
    config.set('current', null)
    const dir = `${home}/.nwjs/${version}`
    rm('-r', dir)
  } catch (e) {
    console.log(e.stack)
  }
}
