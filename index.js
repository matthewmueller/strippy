'use strict'

/**
 * Module Dependencies
 */

let indent = require('strip-indent')

/**
 * Export `strippy`
 */

module.exports = strippy

/**
 * Export `strippy`
 */

function strippy (str) {
  if (typeof str !== 'string') return str

  str = indent(str)
  let lines = str.split(/\n/)
  let out = ''

  for (let i = 0, len = lines.length; i < len; i++) {
    if (i === 0 || i === len - 1) {
      out += lines[i].trim()
    } else if (lines[i] === '') {
      lines[i] = out ? '\n\n' : '\n'
      out += lines[i] + lines[++i]
    } else if (out) {
      out += ' ' + lines[i]
    } else {
      out = lines[i]
    }
  }

  return out
}
