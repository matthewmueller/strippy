'use strict'

/**
 * Module Dependencies
 */

let assert = require('assert')
let strippy = require('./')

/**
 * Tests
 */

describe('strippy(str)', function() {
  let str = `
    a
    b
    c
        d

    e
  `
  assert.equal(strippy(str), 'a b c     d\n\ne')
})
